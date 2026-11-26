# Requestly — API Workbench
A private dark-mode API client built with Next.js 16. Includes an HTTP request builder, WebSocket console, response inspection, local request history and username/password sign-in.

## Configure
Copy `.env.example` to `.env.local`. Never commit `.env.local`.
Generate a session secret: `openssl rand -base64 48`
Generate a scrypt password hash using Node's built-in crypto:
```bash
node -e "const c=require('node:crypto');const salt=c.randomBytes(16).toString('hex');const hash=c.scryptSync(process.argv[1],salt,64).toString('hex');console.log(salt+':'+hash)" 'YOUR-STRONG-PASSWORD'
```
Set the hash output as `AUTH_PASSWORD_HASH`, your chosen login as `AUTH_USERNAME`, and the OpenSSL output as `AUTH_SECRET`. Restart after env changes.

## Run
```bash
pnpm install
pnpm dev
```
Open http://localhost:3000.

## Features
- HTTP method selector: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS, TRACE, CONNECT.
- Custom headers, JSON/text payloads, Bearer token and Basic authentication.
- Response status, duration, size, headers, pretty/raw body and copy.
- Browser-native WebSocket connect/disconnect, message send and incoming/outgoing log.
- Recent requests saved in browser local storage.
- Responsive dark interface.

## Browser networking limitations
Cross-origin HTTP requests obey the target API's CORS policy. If the API does not allow the browser origin, the browser cannot read its response. This app deliberately does not proxy arbitrary URLs through the application server: an unrestricted server-side proxy is a serious SSRF risk. Browser Fetch blocks some methods (notably CONNECT and TRACE) and certain headers even though standard method names are exposed in the selector. WebSockets connect directly from the browser and the endpoint must accept browser-origin connections.

## Security
- Password verification uses scrypt; plaintext passwords are not stored.
- HMAC-SHA-256 signed sessions expire after eight hours.
- Session cookie is HttpOnly, SameSite=Strict, Secure in production.
- Login/logout enforce same-origin requests.
- Requests use `credentials: omit`; app cookies are not forwarded to target APIs.
- History is local to the browser; avoid shared browser profiles for sensitive traffic.
- Serve production over HTTPS. Configure reverse-proxy/WAF rate limiting for `/api/auth/login`; in-memory limits do not work reliably across instances.
- Keep secrets server-side and never use a `NEXT_PUBLIC_` prefix.

## Not yet included
Collection import/export, environment interpolation, OAuth flows, multipart file uploads and a separately isolated server-side request agent.
