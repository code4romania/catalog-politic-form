import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          firstName: { 
            label: 'First Name', 
            placeholder: ''
          },
          lastName: { 
            label: 'Last Name', 
            placeholder: ''
          },
        }
      },
      ro: {
        translation: {
          firstName: { 
            label: 'Prenume', 
          },
          lastName: { 
            label: 'Nume', 
          },
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;