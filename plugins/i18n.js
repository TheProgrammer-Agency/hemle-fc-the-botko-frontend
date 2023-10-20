import en from "vee-validate/dist/locale/en.json";
import ar from "vee-validate/dist/locale/ar.json";
import fr from "vee-validate/dist/locale/fr.json";
import { setupI18n } from "@lingui/core";

// https://lingui.js.org/ref/core.html
const i18n = setupI18n({
    language: "fr",
    catalogs: {
        ar: {
            messages: {
                "validation.required": ar.messages.required,
                "validation.email": ar.messages.email,
                "validation.min": ar.messages.min,

            }
        },
        en: {
            messages: {
                "validation.required": en.messages.required,
                "validation.email": en.messages.email,
                "validation.min": en.messages.min,
                "validation.max": en.messages.max,
                "validation.integer": en.messages.integer,

            }
        }  ,

        fr: {
            messages: {
                "validation.required": fr.messages.required,
                "validation.email": fr.messages.email,
                "validation.min": fr.messages.min,
                "validation.max": fr.messages.max,
                "validation.integer": fr.messages.integer,

            }
        }
    }
});

export { i18n };
