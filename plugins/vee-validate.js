import Vue from 'vue';
import { ValidationProvider, extend,ValidationObserver } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import {
    configure,setInteractionMode
} from 'vee-validate'
import { i18n } from "./i18n";

import { localize } from 'vee-validate';
import VueI18n from 'vue-i18n';

import en from 'vee-validate/dist/locale/en.json';
import fr from 'vee-validate/dist/locale/fr.json';
import validationMessagesEn from 'vee-validate/dist/locale/en.json';
import validationMessagesFr from 'vee-validate/dist/locale/fr.json';
import { required, email, min,integer,max,alpha } from "vee-validate/dist/rules";

/*

let i18n = new VueI18n({
    locale: 'fr',
    messages: {
        en: {
            validations: validationMessagesEn
        },

        fr:{
            validations: validationMessagesFr


        }
    }
});

extend('required', {
    ...required,
    // the values param is the placeholders values
    message: (_, values) => i18n.t('validations.messages.required', values)
});

extend('min', {
    ...required,
    // the values param is the placeholders values
    message: (_, values) => i18n.t('validations.messages.min', values)
});

extend('max', {
    ...required,
    // the values param is the placeholders values
    message: (_, values) => i18n.t('validations.messages.max', values)
});
extend('email', {
    ...required,
    // the values param is the placeholders values
    message: (_, values) => i18n.t('validations.messages.email', values)
});
extend('confirmed', {
    ...required,
    // the values param is the placeholders values
    message: (_, values) => i18n.t('validations.messages.confirmed', values)
});



configure({
    // Use custom default message handler.
    defaultMessage: (field, values) => {
        values._field_ = i18n._(`fields.${field}`);

        return i18n._(`validation.${values._rule_}`, values);
    }
});

// Install required rule and message.
extend("required", required);

// Install email rule and message.
extend("email", email);

// Install min rule and message.
extend("min", min);

// other services is needed
configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
        dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
        // ...
    },
    defaultMessage: (field, values) => {
        values._field_ = i18n.t(`fields.${field}`);
        return i18n.t(`validations.messages.${values._rule_}`, values);
    }

})


/!*defaultMessage: (field, values) => {
    values._field_ = VueI18n.t(`fields.${field}`);
    return VueI18n.t(`validations.messages.${values._rule_}`, values);
}*!/

*/


configure({
    // Use custom default message handler.
    defaultMessage: (field, values) => {
        values._field_ = i18n._(`${field}`);

        return i18n._(`validation.${values._rule_}`, values);
    }
});
extend("required", required);

extend("email", email);
extend("min", min);
extend("integer", integer);
extend("max", max);
extend("alpha", alpha);


// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);