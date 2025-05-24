import uk from '@/core/translations/uk.json';
import en from '@/core/translations/en.json';

export const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

export type Language = keyof typeof resources;
