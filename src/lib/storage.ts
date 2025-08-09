export const safeLocalStorage = {
  //読み出し
  get<T>(key: string, fallback: T) : T {
    if(typeof window === 'undefined') return fallback

    try {
      const raw = window.localStorage.getItem(key)

      return raw ? (JSON.parse(raw) as T ): fallback
    } catch {
      return fallback
    }
  },

  set<T>(key: string, value: T) {

    if(typeof window === 'undefined') return

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      
    }
  }
}