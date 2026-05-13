# Interview Studio

Interactive interview prep app with searchable question collections, hidden answers, engineering reasoning, follow-ups, saved questions, and account progress tracking.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Account Sync

The app works as a guest app by default and stores progress on the current device. To enable login and account progress sync:

```bash
npx convex dev
npx @convex-dev/auth --web-server-url http://localhost:5173
npx convex env set SITE_URL http://localhost:5173
npx convex env set AUTH_GOOGLE_ID <google-client-id>
npx convex env set AUTH_GOOGLE_SECRET <google-client-secret>
```

`npx convex dev` links a Convex deployment and creates the local Convex environment values. The Convex Auth command configures the auth keys for that deployment. Google OAuth also needs a Web Application client with these authorized JavaScript origins:

```txt
http://localhost:5173
https://viaxco-interview-studio.netlify.app
```

The Google OAuth client also needs the Convex HTTP Actions callback URL as an authorized redirect URI:

```txt
https://<deployment>.convex.site/api/auth/callback/google
```

For Netlify, the included `netlify.toml` runs the production Convex deploy and passes the production Convex URL into the Vite build as `VITE_CONVEX_URL`.

Netlify needs `CONVEX_DEPLOY_KEY` in its environment variables so the build can deploy Convex from CI.

The production Convex deployment also needs the auth environment configured before Netlify deploys:

```bash
npx convex env set --prod SITE_URL https://viaxco-interview-studio.netlify.app
npx convex env set --prod AUTH_GOOGLE_ID <google-client-id>
npx convex env set --prod AUTH_GOOGLE_SECRET <google-client-secret>
```

Make sure the production deployment also has the Convex Auth `JWT_PRIVATE_KEY` and `JWKS` values created by the Convex Auth setup or added in the Convex dashboard.

When `VITE_CONVEX_URL` is present, users can sign in with Google and sync reviewed questions, revealed answers, starred questions, and theme preference to Convex.
