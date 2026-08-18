import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Security headers middleware for mi-way.org.
 *
 * CSP notes:
 *   - script-src keeps 'self' + 'unsafe-eval'/'unsafe-inline' because Next.js 15 + React Server Components
 *     emit inline boot scripts and use eval during development. Tightening this requires nonce-based CSP,
 *     which Next.js does not yet generate end-to-end. Tracked as a follow-up.
 *   - connect-src 'self' is required for local fetches; https://openrouter.ai is required by
 *     src/app/api/chat/route.ts which is the MiaChatbot backend (Malu Investment AI assistant).
 *   - frame-ancestors 'none' blocks clickjacking; equivalent to X-Frame-Options DENY but CSP syntax.
 *   - upgrade-insecure-requests upgrades any remaining http:// resource to https://.
 *   - sfile.chatglm.cn has been REMOVED (audit 2026-08-17: no longer referenced; was reserved for
 *     OpenRouter mirror hosting; not in use).
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()");
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://openrouter.ai",
      "frame-src 'self' https://www.google.com https://www.openstreetmap.org",
      "frame-ancestors 'none'",
      "form-action 'self' https://wa.me https://chat.whatsapp.com",
      "base-uri 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  );
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  response.headers.set("X-XSS-Protection", "0");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
