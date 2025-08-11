// Dynamic Translation Service for scalable content management
class TranslationService {
  constructor() {
    this.translations = new Map();
    this.fallbackLanguage = "en";
  }

  // Load translations from external source (API, CMS, etc.)
  async loadTranslations(language, page = "common") {
    try {
      // In production, this would fetch from your CMS/API
      const response = await fetch(`/api/translations/${language}/${page}`);
      if (response.ok) {
        const data = await response.json();
        this.translations.set(`${language}_${page}`, data);
        return data;
      }
    } catch (error) {
      console.warn(
        `Failed to load ${language} translations for ${page}, using fallback`
      );
      return this.getFallbackTranslations(page);
    }
  }

  // Get translations for a specific page
  getTranslations(language, page = "common") {
    const key = `${language}_${page}`;
    return this.translations.get(key) || this.getFallbackTranslations(page);
  }

  // Fallback translations when API fails
  getFallbackTranslations(page) {
    const fallbacks = {
      common: {
        navigation: {
          home: "Home",
          services: "Services",
          doctors: "Doctors",
          appointments: "Appointments",
          contact: "Contact",
          about: "About Us",
        },
        common: {
          loading: "Loading...",
          error: "Something went wrong",
          retry: "Try Again",
          close: "Close",
          save: "Save",
          cancel: "Cancel",
        },
      },
    };
    return fallbacks[page] || fallbacks.common;
  }

  // Update translations dynamically
  updateTranslations(language, page, translations) {
    this.translations.set(`${language}_${page}`, translations);
  }

  // Get translation for a specific key
  getTranslation(language, key, page = "common") {
    const translations = this.getTranslations(language, page);
    return (
      this.getNestedValue(translations, key) ||
      this.getNestedValue(this.getFallbackTranslations(page), key) ||
      key
    );
  }

  // Helper method to get nested object values
  getNestedValue(obj, path) {
    return path.split(".").reduce((current, key) => current?.[key], obj);
  }
}

export default new TranslationService();
