import { createClient } from '@base44/sdk';

// Server-side Base44 client. Do NOT import this from client-side code.
// Store the APP ID and API key in environment variables and set them in Vercel.
const appId = process.env.BASE44_APP_ID ?? '';
const apiKey = process.env.BASE44_API_KEY ?? '';

if (!appId || !apiKey) {
  // In production fail-fast so deployments don't run with empty credentials.
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Missing BASE44_APP_ID or BASE44_API_KEY environment variables');
  } else {
    // In development warn to make debugging easier.
    // Do NOT commit real keys — use .env.local for local development.
    // eslint-disable-next-line no-console
    console.warn('BASE44_APP_ID or BASE44_API_KEY is not set; Base44 client will be initialized with empty values');
  }
}

const base44 = createClient({
  appId,
  headers: {
    api_key: apiKey,
  },
});

export default base44;
