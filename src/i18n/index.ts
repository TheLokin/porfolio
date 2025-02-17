import english from "@/i18n/en.json"
import spanish from "@/i18n/es.json"
import galician from "@/i18n/gl.json"

const LANG = {
  SPANISH: "es",
  GALICIAN: "gl",
  ENGLISH: "en",
}

export function getI18N({ currentLocale = "es" }) {
  if (currentLocale === LANG.GALICIAN) return { ...spanish, ...galician }
  if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english }

  return spanish
}
