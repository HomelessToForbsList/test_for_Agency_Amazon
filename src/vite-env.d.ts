/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ACCOUNTS_API_URL: string;
  readonly VITE_PROFILES_API_URL: string;
  readonly VITE_CAMPAIGNS_API_URL: string;
  readonly VITE_LIMIT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}