# Sachet — AI Scam Shield

**Pause. Check. Stay Safe.** Sachet is a mobile-first safety companion that helps people recognize common digital scam patterns before money or personal information is lost.

## What it does
- Checks pasted messages, links, and uploaded screenshots
- Detects urgency, OTP/PIN requests, payment pressure, fake KYC, suspicious links, impersonation, and job scams
- Gives a risk score and clear next steps in English or Hindi
- Supports local anonymous reporting, recent-check-ready browser storage, and WhatsApp sharing
- Includes a community safety pulse using transparent sample data

## Stack
Next.js 15, React 19, TypeScript, and custom responsive CSS. The current analyzer is deliberately rule-based and runs entirely in-browser; it needs no API key or backend.

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Architecture
`app/page.tsx` contains the client experience and reusable local analysis rules. An OpenAI-compatible analyzer can be added behind a route handler, with credentials set from `.env.example`; rules should remain as a transparent first-pass safeguard.

## Hackathon pitch
Sachet is a pocket-sized digital safety companion for India’s first-time digital users. It turns scary, technical fraud signals into clear language and safe next actions—before someone clicks, pays, or shares an OTP.

## Important disclaimer
Sachet offers educational safety guidance, not legal, banking, or emergency-services advice. Always verify urgent requests through official channels.
