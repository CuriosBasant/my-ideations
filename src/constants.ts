export const IS_BROWSER = typeof window !== 'undefined'
export const __DEV__ = IS_BROWSER && process.env.NODE_ENV === 'development'

export const USE_FIREBASE_EMULATORS = true
