import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  if (host.startsWith("whatsapp.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/whatsapp-inbox";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
