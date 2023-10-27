
import en from "vee-validate/dist/locale/en.json";
import ar from "vee-validate/dist/locale/ar.json";
import fr from "vee-validate/dist/locale/fr.json";
import { setupI18n } from "@lingui/core";
import VueI18n from "vue-i18n";

/*
// https://lingui.js.org/ref/core.html
const i18n = setupI18n({
    language: "fr",
    catalogs: {

        en: {
            messages: {
                "validation.required": en.messages.required,
                "validation.email": en.messages.email,
                "validation.min": en.messages.min,
                "validation.max": en.messages.max,
                "validation.integer": en.messages.integer,
                "fields.password":"password",
                "fields.email":"E-mail",

            },


        }  ,

        fr: {
            messages: {
                "validation.required": fr.messages.required,
                "validation.email": fr.messages.email,
                "validation.min": fr.messages.min,
                "validation.max": fr.messages.max,
                "validation.integer": fr.messages.integer,
                "fields.password":"Mot de passe",
                "fields.email":"E-mail",

            },

        }
    }
});

export { i18n };
*/



const i18n = new VueI18n({
    locale: "fr",
    messages: {
        ar: {
            fields: {
                email: "البريد الاليكتروني",
                password: "كلمة السر"
            },
            validation: ar.messages
        },
        en: {
            fields: {
                email: "E-mail",
                password: "Password"
            },
            validation: en.messages
        }
        ,
        fr: {
            fields: {
                email: "E-mail",
                password: "Password"
            },
            validation: fr.messages
        }
    }
});

export { i18n };
