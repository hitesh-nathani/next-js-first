import "server-only";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import("../../pesonal-projects/first-next/messages/en.json").then(
      (module) => module.default
    ),
  id: () =>
    import("../../pesonal-projects/first-next/messages/id.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
