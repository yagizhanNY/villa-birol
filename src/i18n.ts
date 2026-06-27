import { ref, computed } from 'vue'
import tr from './locales/tr.json'
import en from './locales/en.json'

type Locale = 'tr' | 'en'
type Translations = typeof tr

const translations: Record<Locale, Translations> = { tr, en }

const locale = ref<Locale>(
  (localStorage.getItem('villa-birol-locale') as Locale) || 'tr'
)

/** Get a string value by dot-notation key */
function t(key: string): string {
  const keys = key.split('.')
  let result: any = translations[locale.value]
  for (const k of keys) {
    if (result === undefined || result === null) return key
    result = result[k]
  }
  return typeof result === 'string' ? result : key
}

/** Get an array value by dot-notation key */
function ta<T = any>(key: string): T[] {
  const keys = key.split('.')
  let result: any = translations[locale.value]
  for (const k of keys) {
    if (result === undefined || result === null) return []
    result = result[k]
  }
  return Array.isArray(result) ? (result as T[]) : []
}

function toggleLocale() {
  locale.value = locale.value === 'tr' ? 'en' : 'tr'
  localStorage.setItem('villa-birol-locale', locale.value)
}

export function useI18n() {
  return { locale: computed(() => locale.value), t, ta, toggleLocale }
}
