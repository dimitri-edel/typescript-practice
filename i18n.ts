/* Internationalization (i18n) */

// Interface for a Dictionary of parameters 
export interface I18nParams {
    [key: string]: string | number | boolean;
    }   

// Function to translate a key with optional parameters
export function i18n(locale: string, key: string, params?: I18nParams): string {
    // Example translations for demonstration purposes
    const translations: { [key: string]: { [key: string]: string } } = {
        en: {
            greeting: "Hello, {name}!",
            welcome: "Welcome to our application.",
            ageInfo: "You are {age} years old.",
        },
        es: {
            greeting: "¡Hola, {name}!",
            welcome: "Bienvenido a nuestra aplicación.",
            ageInfo: "Tienes {age} años.",
        },
    };

    // Get the translation for the specified locale and key
    let translation = translations[locale]?.[key] || key;

    // Replace parameters in the translation string
    if (params) {
        Object.keys(params).forEach((param) => {
            translation = translation.replace(`{${param}}`, String(params[param]));
        });
    }

    return translation;
}
