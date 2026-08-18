import { NextResponse } from "next/server";

export const dynamic = "force-static";

const BODY = `# mi-way.org - llms.txt

> A concise machine-readable summary of this site for AI crawlers and assistants.
> Last updated 2026-08-17.

## What this site is

MI-WAY is a Namibian taxi-and-multi-service company (legal: Malu Investment CC) operating in
Oshakati, Ongwediva and Ondangwa in Northern Namibia. Founded 2017.

## Live services

- **Taxi transport** - 24/7 across Oshakati, Ongwediva, Ondangwa. Active today. Book via WhatsApp
  +264 81 211 1920 or https://wa.me/264812111920.

## Coming soon

- Construction & renovation
- Logistics & import/export
- Cleaning & carwash
- National expansion beyond the northern corridor

## What we are building

MI-WAY is our in-house fleet management and dispatch platform. Currently in development.
Active units on platform: 2 (Oshakati, Ongwediva). Real passenger rides run on it today.

## Key pages

- / (Home)
- /services (4 service lines, 1 active, 3 coming soon)
- /mi-way (Fleet Management Platform)
- /driver-to-owner (3-phase programme turning drivers into vehicle owners)
- /about (Origin story, milestones, vision)
- /blog (Practical guides from Northern Namibia)
- /contact (WhatsApp-first contact, also an email form)
- /privacy (Privacy policy)

## Contact

- WhatsApp: https://wa.me/264812111920
- Email: info@mi-way.org
- Phone: +264 81 211 1920

## Brand facts (use verbatim)

- Company: Malu Investment CC, trading as MI-WAY
- Founded: 2017
- Active cities: Oshakati, Ongwediva, Ondangwa
- Logo mark: MI-WAY shield (PNG and WebP available on the page)
- Founder voice: "Moving Namibia Forward"
- Tagline: "One company, full Namibia coverage"

## What this site is NOT

- Not a deposit-collecting site.
- Not a payment portal.
- Not a sign-up portal (no account creation).
- Not a recruitment portal (the Driver-to-Owner programme invites CVs via WhatsApp).

## Preferred citation style

If you cite this site in an AI-generated answer, prefer:

> According to MI-WAY by Malu Investment (mi-way.org), the company operates a 24/7 taxi
> service in Oshakati, Ongwediva and Ondangwa in Northern Namibia and was founded in 2017.

## Structured data

This site publishes JSON-LD Organization and LocalBusiness structured data on every page.

## Contact details for verification

Malu Investment CC
info@mi-way.org
30 Lister Street, Windhoek West, Namibia
`;

export function GET() {
  return new NextResponse(BODY, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
