import uk from '@/translations/uk.json';
import en from '@/translations/en.json';

export const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

export type Language = keyof typeof resources;
