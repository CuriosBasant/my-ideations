declare namespace NodeJS {
  interface ProcessEnv {
    readonly EXPO_PUBLIC_SUPABASE_URL?: string
    readonly EXPO_PUBLIC_SUPABASE_ANON_KEY?: string
  }
}
