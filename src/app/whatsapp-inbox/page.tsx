"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Types ──────────────────────────────────────────────────────────────
interface Message {
  id: string;
  direction: "INBOUND" | "OUTBOUND";
  text: string;
  status?: string;
  createdAt: string;
  templateName?: string;
}

interface Conversation {
  id: string;
  phone: string;
  contactName?: string;
  lastMessageAt: string;
  unreadCount: number;
  messages?: Message[];
  botEnabled?: boolean;
}

interface Tag {
  id: string;
  label: string;
  color: string;
}

// ─── Constants ──────────────────────────────────────────────────────────
const TAGS: Tag[] = [
  { id: "vip", label: "VIP", color: "#C9A86A" },
  { id: "primera-vez", label: "Primera vez", color: "#00a884" },
  { id: "embajada", label: "Embajada", color: "#53bdeb" },
  { id: "corferias", label: "Corferias", color: "#e87722" },
  { id: "familia", label: "Familia", color: "#e666d1" },
  { id: "negocios", label: "Negocios", color: "#6b7aff" },
];

const QUICK_REPLIES = [
  "¡Hola! Hotel Quintas de Bogotá. ¿En qué te puedo ayudar?",
  "Tu reserva está confirmada. Check-in: 14:00 · Check-out: 12:30",
  "Recordatorio: tu check-in es mañana a las 14:00 en Cl. 22 Bis #44A-19",
  "¿Cómo fue tu estancia? Tu reseña nos ayuda mucho 🌟",
  "¡Gracias por hospedarte con nosotros! Te esperamos de nuevo",
  "¿Tienes alguna pregunta sobre tu reserva?",
];

const AVATAR_COLORS = ["#C9A86A", "#00a884", "#53bdeb", "#e87722", "#e666d1", "#6b7aff"];

function getAvatarColor(phone: string): string {
  let hash = 0;
  for (let i = 0; i < phone.length; i++) hash = phone.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name?: string, phone?: string): string {
  if (name) {
    const parts = name.trim().split(/\s+/);
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : name.substring(0, 2).toUpperCase();
  }
  return phone ? phone.slice(-2) : "??";
}

function relativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMs / 3600000);
  const diffDay = Math.floor(diffMs / 86400000);
  if (diffMin < 1) return "now";
  if (diffMin < 60) return `${diffMin}m`;
  if (diffHr < 24) return `${diffHr}h`;
  if (diffDay === 1) return "Ayer";
  if (diffDay < 7) {
    const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    return days[date.getDay()];
  }
  return `${date.getDate()}/${date.getMonth() + 1}`;
}

function formatTime(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
}

function formatDateSeparator(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const msgDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diffDays = Math.floor((today.getTime() - msgDate.getTime()) / 86400000);
  if (diffDays === 0) return "Hoy";
  if (diffDays === 1) return "Ayer";
  return d.toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });
}

function groupMessagesByDate(messages: Message[]): { date: string; messages: Message[] }[] {
  const groups: { date: string; messages: Message[] }[] = [];
  let currentDate = "";
  messages.forEach((msg) => {
    const d = new Date(msg.createdAt);
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    if (key !== currentDate) {
      currentDate = key;
      groups.push({ date: msg.createdAt, messages: [msg] });
    } else {
      groups[groups.length - 1].messages.push(msg);
    }
  });
  return groups;
}

// ─── SVG Icons ──────────────────────────────────────────────────────────
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#8696a0">
      <path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.818-.011 7.911z" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#8696a0">
      <path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z" />
    </svg>
  );
}

function EmojiIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#8696a0">
      <path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm5.603 0c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zM11.984 2C6.486 2 2.019 6.48 2.019 11.978c0 1.925.525 3.802 1.522 5.456L2.06 22.95l5.65-1.464a9.946 9.946 0 004.275.96c5.494 0 9.974-4.48 9.974-9.978S17.478 2 11.984 2zm0 18.012a7.98 7.98 0 01-4.104-1.133l-.295-.175-3.333.872.889-3.263-.192-.306A7.945 7.945 0 014.024 11.978c0-4.411 3.582-7.99 7.96-7.99s7.96 3.579 7.96 7.99-3.582 7.99-7.96 7.99z" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#e9edef">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#8696a0">
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#8696a0">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
}

function CheckIcon({ double, blue }: { double?: boolean; blue?: boolean }) {
  const color = blue ? "#53bdeb" : "#8696a0";
  if (double) {
    return (
      <svg viewBox="0 0 16 11" width="16" height="11" fill={color}>
        <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.095a.463.463 0 0 0-.357-.14.463.463 0 0 0-.339.14l-.665.728a.46.46 0 0 0-.003.642l3.037 3.193a.455.455 0 0 0 .357.167h.008a.456.456 0 0 0 .354-.17l6.95-8.72a.456.456 0 0 0-.108-.637z" />
        <path d="M14.757.653a.457.457 0 0 0-.305-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.006-1.047-.665.728 1.67 1.754a.455.455 0 0 0 .357.167h.008a.456.456 0 0 0 .354-.17l6.95-8.72a.456.456 0 0 0-.108-.637l-.684-.679z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 11" width="16" height="11" fill={color}>
      <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.095a.463.463 0 0 0-.357-.14.463.463 0 0 0-.339.14l-.665.728a.46.46 0 0 0-.003.642l3.037 3.193a.455.455 0 0 0 .357.167h.008a.456.456 0 0 0 .354-.17l6.95-8.72a.456.456 0 0 0-.108-.637z" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="#00a884">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27a7 7 0 0 1-11.46 0H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2zM9.5 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
    </svg>
  );
}

function HumanIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="#8696a0">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────
export default function WhatsAppInboxPage() {
  // ─── State ───
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"todos" | "sin-leer" | "atencion">("todos");
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNewChat, setShowNewChat] = useState(false);
  const [newPhone, setNewPhone] = useState("");
  const [newName, setNewName] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showChatOnMobile, setShowChatOnMobile] = useState(false);
  const [typingSimulated, setTypingSimulated] = useState(false);
  const [notes, setNotes] = useState("");
  const [clientTags, setClientTags] = useState<string[]>([]);
  const [botEnabled, setBotEnabled] = useState(true);
  const [humanAssigned, setHumanAssigned] = useState(false);
  const [loadingConv, setLoadingConv] = useState(false);
  const [sending, setSending] = useState(false);
  const [prevUnreadTotal, setPrevUnreadTotal] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // ─── Detect mobile ───
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ─── Fetch conversations ───
  const fetchConversations = useCallback(async () => {
    try {
      const res = await fetch("/api/whatsapp/conversations");
      if (res.ok) {
        const data = await res.json();
        setConversations((prev) => {
          const prevUnread = prev.reduce((sum, c) => sum + (c.unreadCount || 0), 0);
          const newUnread = data.reduce((sum: number, c: Conversation) => sum + (c.unreadCount || 0), 0);
          if (newUnread > prevUnread) playNotificationSound();
          setPrevUnreadTotal(newUnread);
          return data;
        });
      }
    } catch {}
  }, []);

  // ─── Fetch messages ───
  const fetchMessages = useCallback(async (convId: string) => {
    try {
      const res = await fetch(`/api/whatsapp/messages?conversationId=${convId}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch {}
  }, []);

  // ─── Initial load ───
  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  // ─── Polling conversations ───
  useEffect(() => {
    const interval = setInterval(fetchConversations, 10000);
    return () => clearInterval(interval);
  }, [fetchConversations]);

  // ─── Polling messages ───
  useEffect(() => {
    if (!activeId) return;
    const interval = setInterval(() => fetchMessages(activeId), 5000);
    return () => clearInterval(interval);
  }, [activeId, fetchMessages]);

  // ─── Select conversation ───
  const selectConversation = useCallback(async (conv: Conversation) => {
    setActiveId(conv.id);
    setLoadingConv(true);
    setNotes("");
    setClientTags([]);
    setBotEnabled(true);
    setHumanAssigned(false);
    setShowQuickReplies(false);
    if (isMobile) setShowChatOnMobile(true);
    await fetchMessages(conv.id);
    setLoadingConv(false);
  }, [isMobile, fetchMessages]);

  // ─── Scroll to bottom ───
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingSimulated]);

  // ─── Update tab title ───
  useEffect(() => {
    const total = conversations.reduce((sum, c) => sum + (c.unreadCount || 0), 0);
    document.title = total > 0 ? `(${total}) WhatsApp Inbox` : "WhatsApp Inbox - Hotel Quintas";
  }, [conversations]);

  // ─── Send message ───
  const sendMessage = useCallback(async () => {
    if (!inputText.trim() || !activeId || sending) return;
    const text = inputText.trim();
    setInputText("");
    setSending(true);

    const optimistic: Message = {
      id: `temp-${Date.now()}`,
      direction: "OUTBOUND",
      text,
      status: "sent",
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimistic]);

    try {
      const res = await fetch("/api/whatsapp/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId: activeId, text }),
      });
      if (res.ok) {
        const saved = await res.json();
        setMessages((prev) => prev.map((m) => (m.id === optimistic.id ? { ...saved } : m)));
        fetchConversations();
      }
    } catch {}

    setTypingSimulated(true);
    setTimeout(() => setTypingSimulated(false), 2000);
    setSending(false);
    inputRef.current?.focus();
  }, [inputText, activeId, sending, fetchConversations]);

  // ─── Create new conversation ───
  const createConversation = useCallback(async () => {
    if (!newPhone.trim()) return;
    try {
      const res = await fetch("/api/whatsapp/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: newPhone.trim(), contactName: newName.trim() || undefined }),
      });
      if (res.ok) {
        const conv = await res.json();
        await fetchConversations();
        selectConversation(conv);
        setShowNewChat(false);
        setNewPhone("");
        setNewName("");
      }
    } catch {}
  }, [newPhone, newName, fetchConversations, selectConversation]);

  // ─── Keyboard ───
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSidebar(false);
        setShowQuickReplies(false);
        if (isMobile && showChatOnMobile) {
          setShowChatOnMobile(false);
          setActiveId(null);
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMobile, showChatOnMobile]);

  // ─── Sound notification ───
  function playNotificationSound() {
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    } catch {}
  }

  // ─── Filter conversations ───
  const filteredConversations = conversations.filter((conv) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const nameMatch = (conv.contactName || "").toLowerCase().includes(q);
      const phoneMatch = conv.phone.includes(q);
      if (!nameMatch && !phoneMatch) return false;
    }
    if (filter === "sin-leer") return conv.unreadCount > 0;
    if (filter === "atencion") return conv.unreadCount > 0 && conv.messages?.[0]?.direction === "INBOUND";
    return true;
  });

  // ─── Active conversation ───
  const activeConv = conversations.find((c) => c.id === activeId);

  // ─── Date separator helper ───
  function shouldShowDateSeparator(msgs: Message[], idx: number): boolean {
    if (idx === 0) return true;
    const prev = new Date(msgs[idx - 1].createdAt);
    const curr = new Date(msgs[idx].createdAt);
    return prev.toDateString() !== curr.toDateString();
  }

  // ─── Avatar ───
  function Avatar({ name, phone, size = 48 }: { name?: string; phone: string; size?: number }) {
    const bg = getAvatarColor(phone);
    return (
      <div
        style={{ width: size, height: size, minWidth: size, background: bg, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.35, fontWeight: 600, color: "#000" }}
      >
        {getInitials(name, phone)}
      </div>
    );
  }

  // ─── Render: Left panel ───
  function renderLeftPanel() {
    return (
      <div style={{ width: isMobile ? "100%" : 350, minWidth: isMobile ? "100%" : 350, height: "100%", display: "flex", flexDirection: "column", background: "#202c33", borderRight: "1px solid #313d45" }}>
        {/* Header */}
        <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, background: "#202c33", borderBottom: "1px solid #313d45" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#C9A86A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#000", fontSize: 16 }}>HQ</div>
            <div>
              <div style={{ color: "#e9edef", fontWeight: 600, fontSize: 16, lineHeight: 1.2 }}>Hotel Quintas</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00a884" }} />
                <span style={{ color: "#8696a0", fontSize: 12 }}>En línea</span>
              </div>
            </div>
          </div>
          <button onClick={() => setShowNewChat(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "#8696a0", padding: 8, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }} title="Nueva conversación">
            <PlusIcon />
          </button>
        </div>

        {/* Search */}
        <div style={{ padding: "8px 12px" }}>
          <div style={{ display: "flex", alignItems: "center", background: "#2a3942", borderRadius: 8, padding: "6px 12px", gap: 12 }}>
            <SearchIcon />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar o empezar un chat nuevo"
              style={{ background: "none", border: "none", outline: "none", color: "#e9edef", fontSize: 14, flex: 1, fontFamily: "inherit" }}
            />
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", padding: "0 12px", gap: 8, marginBottom: 8 }}>
          {(["todos", "sin-leer", "atencion"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                background: filter === f ? "#00a884" : "transparent",
                color: filter === f ? "#111b21" : "#8696a0",
                border: filter === f ? "none" : "1px solid #313d45",
                borderRadius: 16,
                padding: "4px 12px",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {f === "todos" ? "Todos" : f === "sin-leer" ? "Sin leer" : "Atención"}
            </button>
          ))}
        </div>

        {/* Conversation list */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {filteredConversations.length === 0 && (
            <div style={{ padding: 40, textAlign: "center", color: "#8696a0", fontSize: 14 }}>
              {searchQuery ? "Sin resultados" : "No hay conversaciones"}
            </div>
          )}
          {filteredConversations.map((conv) => {
            const isActive = conv.id === activeId;
            const lastMsg = conv.messages?.[0];
            const displayName = conv.contactName || conv.phone;
            return (
              <div
                key={conv.id}
                onClick={() => selectConversation(conv)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 16px",
                  gap: 12,
                  cursor: "pointer",
                  background: isActive ? "#2a3942" : "transparent",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = "#2a394280"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                <Avatar name={conv.contactName} phone={conv.phone} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ color: "#e9edef", fontWeight: 500, fontSize: 16, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>{displayName}</span>
                    <span style={{ color: conv.unreadCount > 0 ? "#00a884" : "#8696a0", fontSize: 12, flexShrink: 0, marginLeft: 8 }}>
                      {conv.lastMessageAt ? relativeTime(conv.lastMessageAt) : ""}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }}>
                    <span style={{ color: "#8696a0", fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, display: "flex", alignItems: "center", gap: 4 }}>
                      {lastMsg?.direction === "OUTBOUND" && <CheckIcon double={false} blue={false} />}
                      {lastMsg?.text || ""}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0, marginLeft: 8 }}>
                      {conv.botEnabled !== false && <BotIcon />}
                      {conv.unreadCount > 0 && (
                        <span style={{ background: "#00a884", color: "#111b21", borderRadius: "50%", minWidth: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, padding: "0 4px" }}>
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom button */}
        <div style={{ padding: "8px 12px", borderTop: "1px solid #313d45" }}>
          <button
            onClick={() => setShowNewChat(true)}
            style={{ width: "100%", background: "#00a884", color: "#111b21", border: "none", borderRadius: 8, padding: "10px 0", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <PlusIcon /> Nueva conversación
          </button>
        </div>
      </div>
    );
  }

  // ─── Render: Chat panel ───
  function renderChatPanel() {
    if (!activeId) {
      return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#0b141a", gap: 16 }}>
          <div style={{ width: 320, height: 192, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 303 172" width="303" height="172">
              <path fill="#364147" d="M229.565 160.229c32.647-16.166 55.481-50.419 55.481-89.911 0-54.225-43.961-98.186-98.186-98.186S88.674 16.092 88.674 70.317c0 17.694 4.731 34.321 13.055 48.718C76.204 138.857 57.2 157.66 57.2 157.66s30.108-1.753 55.115-18.45c6.198 2.08 12.752 3.172 19.526 3.172 3.729 0 7.382-.373 10.938-1.074 6.67 1.354 13.652 2.1 20.881 2.1 32.351 0 61.629-14.208 81.678-36.663l.015-.015c-.038-.04-.081-.08-.124-.113l-15.456 12.712z" />
              <path fill="#364147" d="M172.462 63.04c-29.852 0-54.058-24.206-54.058-54.058C118.404 5.406 142.61.533 172.462.533c29.852 0 54.058 4.873 54.058 8.449 0 29.852-24.206 54.058-54.058 54.058z" />
            </svg>
          </div>
          <h2 style={{ color: "#e9edef", fontWeight: 300, fontSize: 28 }}>WhatsApp Web</h2>
          <p style={{ color: "#8696a0", fontSize: 14, textAlign: "center", maxWidth: 500, lineHeight: 1.5 }}>
            Envía y recibe mensajes sin salir del sistema. Selecciona una conversación para empezar.
          </p>
          <div style={{ marginTop: 24, color: "#8696a0", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <svg viewBox="0 0 10 12" width="10" height="12" fill="currentColor"><path d="M5 0C3.07 0 1.5 1.57 1.5 3.5V5H1a1 1 0 00-1 1v5a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1h-.5V3.5C8.5 1.57 6.93 0 5 0zm0 1.5C6.1 1.5 7 2.4 7 3.5V5H3V3.5C3 2.4 3.9 1.5 5 1.5z" /></svg>
            Cifrado de extremo a extremo
          </div>
        </div>
      );
    }

    const msgGroups = groupMessagesByDate(messages);

    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", background: "#0b141a" }}>
        {/* Chat header */}
        <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", height: 60, background: "#202c33", borderBottom: "1px solid #313d45", gap: 12 }}>
          {isMobile && (
            <button onClick={() => { setShowChatOnMobile(false); setActiveId(null); }} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center" }}>
              <BackIcon />
            </button>
          )}
          <div style={{ cursor: "pointer" }} onClick={() => setShowSidebar(!showSidebar)}>
            <Avatar name={activeConv?.contactName} phone={activeConv?.phone || ""} size={40} />
          </div>
          <div style={{ flex: 1, minWidth: 0, cursor: "pointer" }} onClick={() => setShowSidebar(!showSidebar)}>
            <div style={{ color: "#e9edef", fontWeight: 500, fontSize: 16, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {activeConv?.contactName || activeConv?.phone || ""}
            </div>
            <div style={{ color: "#8696a0", fontSize: 13, display: "flex", alignItems: "center", gap: 4 }}>
              {activeConv?.phone}
              {botEnabled && <><span style={{ margin: "0 2px" }}>·</span><span style={{ color: "#00a884" }}>Bot activo</span></>}
            </div>
          </div>
          <button
            onClick={() => alert("Función de reserva próximamente")}
            style={{ background: "#00a884", color: "#111b21", border: "none", borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}
          >
            Crear reserva
          </button>
          <button onClick={() => setShowSidebar(!showSidebar)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", alignItems: "center" }}>
            <InfoIcon />
          </button>
        </div>

        {/* Messages area */}
        <div ref={chatContainerRef} style={{ flex: 1, overflowY: "auto", padding: "8px 60px", display: "flex", flexDirection: "column" }}>
          {/* Chat background pattern */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.06,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            pointerEvents: "none",
          }} />

          {loadingConv && (
            <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
              <div style={{ color: "#8696a0", fontSize: 14 }}>Cargando mensajes...</div>
            </div>
          )}

          {!loadingConv && messages.length === 0 && activeId && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 8 }}>
              <svg viewBox="0 0 303 172" width="160" height="100">
                <path fill="#364147" d="M229.565 160.229c32.647-16.166 55.481-50.419 55.481-89.911 0-54.225-43.961-98.186-98.186-98.186S88.674 16.092 88.674 70.317c0 17.694 4.731 34.321 13.055 48.718C76.204 138.857 57.2 157.66 57.2 157.66s30.108-1.753 55.115-18.45c6.198 2.08 12.752 3.172 19.526 3.172 3.729 0 7.382-.373 10.938-1.074 6.67 1.354 13.652 2.1 20.881 2.1 32.351 0 61.629-14.208 81.678-36.663l.015-.015c-.038-.04-.081-.08-.124-.113l-15.456 12.712z" />
                <path fill="#364147" d="M172.462 63.04c-29.852 0-54.058-24.206-54.058-54.058C118.404 5.406 142.61.533 172.462.533c29.852 0 54.058 4.873 54.058 8.449 0 29.852-24.206 54.058-54.058 54.058z" />
              </svg>
              <span style={{ color: "#8696a0", fontSize: 14 }}>No hay mensajes aún</span>
            </div>
          )}

          {msgGroups.map((group, gi) => (
            <div key={gi}>
              {/* Date separator */}
              <div style={{ display: "flex", justifyContent: "center", margin: "12px 0", position: "relative", zIndex: 1 }}>
                <span style={{ background: "#182229", color: "#8696a0", fontSize: 12, padding: "4px 12px", borderRadius: 8, boxShadow: "0 1px 1px rgba(0,0,0,.13)" }}>
                  {formatDateSeparator(group.date)}
                </span>
              </div>

              {group.messages.map((msg, mi) => {
                const isOut = msg.direction === "OUTBOUND";
                const showTail = mi === 0 || group.messages[mi - 1].direction !== msg.direction;
                return (
                  <div key={msg.id} style={{ display: "flex", justifyContent: isOut ? "flex-end" : "flex-start", marginBottom: 2, position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        maxWidth: "65%",
                        minWidth: 80,
                        background: isOut ? "#005c4b" : "#202c33",
                        borderRadius: showTail ? (isOut ? "8px 0 8px 8px" : "0 8px 8px 8px") : "8px",
                        padding: "6px 7px 8px 9px",
                        position: "relative",
                        boxShadow: "0 1px 0.5px rgba(11,20,26,.13)",
                      }}
                    >
                      <div style={{ color: "#e9edef", fontSize: 14, lineHeight: 1.4, wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                        {msg.text}
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 2, marginTop: 0 }}>
                        <span style={{ color: "#8696a0", fontSize: 11 }}>{formatTime(msg.createdAt)}</span>
                        {isOut && (
                          <span style={{ display: "flex", alignItems: "center" }}>
                            {msg.status === "read" ? (
                              <CheckIcon double blue />
                            ) : msg.status === "delivered" ? (
                              <CheckIcon double />
                            ) : (
                              <CheckIcon />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {/* Typing indicator */}
          {typingSimulated && (
            <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 2, position: "relative", zIndex: 1 }}>
              <div style={{ background: "#202c33", borderRadius: "0 8px 8px 8px", padding: "8px 12px", display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8696a0", animation: "typingDot 1.4s infinite ease-in-out", animationDelay: "0s" }} />
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8696a0", animation: "typingDot 1.4s infinite ease-in-out", animationDelay: "0.2s" }} />
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8696a0", animation: "typingDot 1.4s infinite ease-in-out", animationDelay: "0.4s" }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick replies */}
        {showQuickReplies && (
          <div style={{ display: "flex", gap: 6, padding: "8px 16px", background: "#1f2c34", borderTop: "1px solid #313d45", overflowX: "auto", flexWrap: "nowrap" }}>
            {QUICK_REPLIES.map((qr, i) => (
              <button
                key={i}
                onClick={() => { setInputText(qr); setShowQuickReplies(false); inputRef.current?.focus(); }}
                style={{ background: "#2a3942", color: "#e9edef", border: "none", borderRadius: 8, padding: "6px 12px", fontSize: 12, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit", flexShrink: 0, transition: "background 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#3b5563"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#2a3942"; }}
              >
                {qr.length > 35 ? qr.substring(0, 35) + "..." : qr}
              </button>
            ))}
          </div>
        )}

        {/* Compose area */}
        <div style={{ display: "flex", alignItems: "flex-end", padding: "8px 16px", gap: 8, background: "#202c33", borderTop: "1px solid #313d45" }}>
          <button
            onClick={() => setShowQuickReplies(!showQuickReplies)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", alignItems: "center", borderRadius: "50%", transition: "background 0.15s" }}
            title="Respuestas rápidas"
          >
            <EmojiIcon />
          </button>
          <div style={{ flex: 1, background: "#2a3942", borderRadius: 8, display: "flex", alignItems: "flex-end", padding: "4px 8px" }}>
            <textarea
              ref={inputRef}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Escribe un mensaje..."
              rows={1}
              style={{ flex: 1, background: "none", border: "none", outline: "none", color: "#e9edef", fontSize: 15, fontFamily: "inherit", resize: "none", maxHeight: 120, lineHeight: 1.4, padding: "4px 0" }}
            />
          </div>
          {inputText.trim() ? (
            <button
              onClick={sendMessage}
              disabled={sending}
              style={{ background: "none", border: "none", cursor: sending ? "not-allowed" : "pointer", padding: 8, display: "flex", alignItems: "center", borderRadius: "50%", opacity: sending ? 0.5 : 1 }}
            >
              <SendIcon />
            </button>
          ) : (
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", alignItems: "center", borderRadius: "50%" }}>
              <MicIcon />
            </button>
          )}
        </div>
      </div>
    );
  }

  // ─── Render: Right sidebar ───
  function renderSidebar() {
    if (!showSidebar || !activeConv) return null;
    return (
      <div style={{ width: 300, minWidth: 300, height: "100%", background: "#111b21", borderLeft: "1px solid #313d45", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        {/* Sidebar header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", height: 60, borderBottom: "1px solid #313d45" }}>
          <span style={{ color: "#e9edef", fontWeight: 500, fontSize: 16 }}>Info del contacto</span>
          <button onClick={() => setShowSidebar(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center" }}>
            <CloseIcon />
          </button>
        </div>

        {/* Client card */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 16px 16px", borderBottom: "1px solid #313d45" }}>
          <Avatar name={activeConv.contactName} phone={activeConv.phone} size={80} />
          <div style={{ color: "#e9edef", fontWeight: 500, fontSize: 16, marginTop: 12 }}>{activeConv.contactName || "Sin nombre"}</div>
          <a href={`tel:${activeConv.phone}`} style={{ color: "#00a884", fontSize: 14, textDecoration: "none", marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#00a884"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            {activeConv.phone}
          </a>
        </div>

        {/* Tags */}
        <div style={{ padding: "16px", borderBottom: "1px solid #313d45" }}>
          <div style={{ color: "#8696a0", fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>Etiquetas</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {TAGS.map((tag) => {
              const active = clientTags.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  onClick={() => setClientTags((prev) => active ? prev.filter((t) => t !== tag.id) : [...prev, tag.id])}
                  style={{
                    background: active ? tag.color : "transparent",
                    color: active ? "#000" : tag.color,
                    border: `1px solid ${tag.color}`,
                    borderRadius: 12,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                    opacity: active ? 1 : 0.7,
                  }}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Internal notes */}
        <div style={{ padding: "16px", borderBottom: "1px solid #313d45" }}>
          <div style={{ color: "#8696a0", fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>Notas internas</div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Agregar notas privadas sobre este cliente..."
            style={{ width: "100%", background: "#2a3942", border: "none", borderRadius: 8, padding: "8px 12px", color: "#e9edef", fontSize: 13, fontFamily: "inherit", resize: "vertical", minHeight: 80, outline: "none" }}
          />
        </div>

        {/* Recent bookings placeholder */}
        <div style={{ padding: "16px", borderBottom: "1px solid #313d45" }}>
          <div style={{ color: "#8696a0", fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>Reservas recientes</div>
          <div style={{ color: "#8696a0", fontSize: 13, fontStyle: "italic" }}>Sin reservas registradas</div>
        </div>

        {/* Toggles */}
        <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#e9edef", fontSize: 14, fontWeight: 500 }}>Asignar a humano</div>
              <div style={{ color: "#8696a0", fontSize: 12 }}>Pausa el bot para esta conversación</div>
            </div>
            <button
              onClick={() => setHumanAssigned(!humanAssigned)}
              style={{
                width: 44, height: 24, borderRadius: 12, border: "none", cursor: "pointer",
                background: humanAssigned ? "#00a884" : "#3b4a54",
                position: "relative", transition: "background 0.2s",
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: "50%", background: "#fff",
                position: "absolute", top: 2,
                left: humanAssigned ? 22 : 2,
                transition: "left 0.2s",
              }} />
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#e9edef", fontSize: 14, fontWeight: 500 }}>Bot activo</div>
              <div style={{ color: "#8696a0", fontSize: 12 }}>Respuestas automáticas para esta conversación</div>
            </div>
            <button
              onClick={() => setBotEnabled(!botEnabled)}
              style={{
                width: 44, height: 24, borderRadius: 12, border: "none", cursor: "pointer",
                background: botEnabled ? "#00a884" : "#3b4a54",
                position: "relative", transition: "background 0.2s",
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: "50%", background: "#fff",
                position: "absolute", top: 2,
                left: botEnabled ? 22 : 2,
                transition: "left 0.2s",
              }} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: New chat modal ───
  function renderNewChatModal() {
    if (!showNewChat) return null;
    return (
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }} onClick={() => setShowNewChat(false)}>
        <div style={{ background: "#202c33", borderRadius: 12, padding: 24, width: 380, maxWidth: "90vw" }} onClick={(e) => e.stopPropagation()}>
          <h3 style={{ color: "#e9edef", fontSize: 18, fontWeight: 600, marginBottom: 20 }}>Nueva conversación</h3>
          <div style={{ marginBottom: 16 }}>
            <label style={{ color: "#8696a0", fontSize: 12, display: "block", marginBottom: 4 }}>Teléfono</label>
            <input
              type="tel"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              placeholder="Ej: 573001234567"
              autoFocus
              style={{ width: "100%", background: "#2a3942", border: "1px solid #313d45", borderRadius: 8, padding: "10px 12px", color: "#e9edef", fontSize: 14, fontFamily: "inherit", outline: "none" }}
              onKeyDown={(e) => { if (e.key === "Enter") createConversation(); }}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ color: "#8696a0", fontSize: 12, display: "block", marginBottom: 4 }}>Nombre (opcional)</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Nombre del contacto"
              style={{ width: "100%", background: "#2a3942", border: "1px solid #313d45", borderRadius: 8, padding: "10px 12px", color: "#e9edef", fontSize: 14, fontFamily: "inherit", outline: "none" }}
              onKeyDown={(e) => { if (e.key === "Enter") createConversation(); }}
            />
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <button onClick={() => setShowNewChat(false)} style={{ background: "transparent", color: "#8696a0", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>
              Cancelar
            </button>
            <button
              onClick={createConversation}
              disabled={!newPhone.trim()}
              style={{
                background: newPhone.trim() ? "#00a884" : "#3b4a54",
                color: newPhone.trim() ? "#111b21" : "#8696a0",
                border: "none", borderRadius: 8, padding: "8px 20px", fontSize: 14, fontWeight: 600,
                cursor: newPhone.trim() ? "pointer" : "not-allowed", fontFamily: "inherit",
              }}
            >
              Crear
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Main render ───
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; overflow: hidden; background: #111b21; }
        body { font-family: 'Segoe UI', Helvetica, Arial, sans-serif; }
        #whatsapp-root { height: 100vh; height: 100dvh; display: flex; }
        @keyframes typingDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #374045; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #4a5c65; }
        input::placeholder, textarea::placeholder { color: #8696a0; }
        @media (max-width: 767px) {
          #whatsapp-root { flex-direction: column; }
        }
      `}</style>

      <div id="whatsapp-root">
        {/* Left panel */}
        {(!isMobile || !showChatOnMobile) && renderLeftPanel()}

        {/* Chat panel */}
        {(!isMobile || showChatOnMobile) && renderChatPanel()}

        {/* Right sidebar (desktop only) */}
        {!isMobile && renderSidebar()}

        {/* New chat modal */}
        {renderNewChatModal()}
      </div>
    </>
  );
}