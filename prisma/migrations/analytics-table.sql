-- AnalyticsEvent table - run this in Neon SQL Editor
CREATE TABLE IF NOT EXISTS "AnalyticsEvent" (
  "id" TEXT NOT NULL,
  "event" TEXT NOT NULL,
  "page" TEXT NOT NULL,
  "label" TEXT,
  "value" TEXT,
  "referrer" TEXT,
  "userAgent" TEXT,
  "ip" TEXT,
  "sessionId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "AnalyticsEvent_event_idx" ON "AnalyticsEvent"("event");
CREATE INDEX IF NOT EXISTS "AnalyticsEvent_page_idx" ON "AnalyticsEvent"("page");
CREATE INDEX IF NOT EXISTS "AnalyticsEvent_createdAt_idx" ON "AnalyticsEvent"("createdAt");
CREATE INDEX IF NOT EXISTS "AnalyticsEvent_sessionId_idx" ON "AnalyticsEvent"("sessionId");
