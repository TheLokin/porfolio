import type { GetLocaleOptions } from "astro:i18n"

import { Buffer } from "node:buffer"
import { getRelativeLocaleUrl as getLocaleUrl } from "astro:i18n"

export function getRelativeLocaleUrl(locale: string, path?: string, options?: GetLocaleOptions) {
  const url = getLocaleUrl(locale, path, options)

  return url.length > 1 && url.endsWith("/") ? url.slice(0, -1) : url
}

export async function responseToDataUrl(response: Response) {
  const contentType = response.headers.get("content-type")
  const arrayBuffer = await response.arrayBuffer()
  const base64String = Buffer.from(arrayBuffer).toString("base64")

  return `data:${contentType};base64,${base64String}`
}
