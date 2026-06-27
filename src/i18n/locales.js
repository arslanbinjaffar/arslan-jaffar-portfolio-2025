export const LOCALES = {
  en: { label: "English", flag: "🇺🇸", dir: "ltr", ogLocale: "en_US" },
  ur: { label: "اردو", flag: "🇵🇰", dir: "rtl", ogLocale: "ur_PK" },
  ar: { label: "العربية", flag: "🇸🇦", dir: "rtl", ogLocale: "ar_SA" },
};

export const DEFAULT_LOCALE = "en";
export const RTL_LOCALES = ["ur", "ar"];
export const LOCALE_CODES = Object.keys(LOCALES);
export const PREFIXED_LOCALES = ["ur", "ar"];

export function isRtlLocale(locale) {
  return RTL_LOCALES.includes(locale);
}

export function isValidLocale(locale) {
  return LOCALE_CODES.includes(locale);
}
