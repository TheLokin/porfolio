import english from "@/i18n/en.json"
import spanish from "@/i18n/es.json"
import galician from "@/i18n/gl.json"

export function getI18N({ currentLocale = "es" }) {
  if (currentLocale === "gl") return { ...spanish, ...galician }
  if (currentLocale === "en") return { ...spanish, ...english }

  return spanish
}
