require('dotenv').config()
export default {

    target: 'server',
    loading: '~/components/global/LoadingBar.vue',

    generate: {
        fallback: true
    },

    /*
    /*
    ** Headers of the page
    */
    head() {

        const i18nHead = this.$nuxtI18nHead({addSeoAttributes: true});

        return {

            title: 'Hemlè',
            titleTemplate: 'Hemlè || %s',
            htmlAttrs:{
                ...i18nHead.htmlAttrs
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
            ],
            ...i18nHead.meta,

            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'preconnect',href: '/favicon.ico'},
                {rel: 'preconnect',  href: 'https://fonts.gstatic.com' ,crossOrigin:true},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap' ,crossOrigin:true}
            ],
            ...i18nHead.link,

            script: [



                {
                    src: "/js/moment.js"
                },

                {
                    src: "/js/error.js"
                },

            ]
        }
    },

    /*
    ** Global CSS
    */
    css: [
        'assets/scss/style.scss',
    ],

    router: {

        middleware: ['auth'],


        linkExactActiveClass: 'active-link',
    },
    components: {
        dirs: [
            '~/components',
            '~/components/sections',

        ]
    },

    auth: {

        redirect: {
            login: '/',
            logout: '/',
            callback: '/',
            home: '/user'
        },
        strategies: {

            social: {
                scheme: 'oauth2',
                endpoints: {
                    authorization: 'https://accounts.google.com/o/oauth2/auth',
                    token:  process.env.baseUrlSimple+'api/auth/login/google/callback',
                    userInfo: process.env.baseUrlSimple+'api/user/me',
                },
                token: {
                    property: 'access_token',
                    type: 'Bearer',
                    maxAge: 1800
                },
                refreshToken: {
                    property: 'refresh_token',
                    maxAge: 60 * 60 * 24 * 30
                },
                responseType: 'code',
                grantType: 'authorization_code',
                accessType: undefined,
                redirectUri: undefined,
                logoutRedirectUri: undefined,
                clientId:  process.env.CLIENT_ID,
                scope: ['openid', 'profile', 'email'],
                state: 'UNIQUE_AND_NON_GUESSABLE',
                codeChallengeMethod: '',
                responseMode: '',
                acrValues: '',
                // autoLogout: false
            },
            facebook: {
                endpoints: {
                    userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
                },
                clientId: process.env.CLIENT_ID_FACEBOOK,
                scope: ['public_profile', 'email']
            },
            google: {
                clientId: process.env.CLIENT_ID,
                codeChallengeMethod: '',
                responseType: 'token',
                endpoints: {
                    token: process.env.baseUrlSimple+'api/auth/login/google/callback', // your backend url to resolve your auth with google and give you the token back
                    userInfo: process.env.baseUrlSimple+'api/user/me'
                },
            },
            local: {

                token: {
                    property: 'token',
                    global: true,
                    required: true,
                    maxAge: 500000,
                    type: 'Bearer'
                },
                user: {
                    propertyName: 'data',
                    autoFetch: true,
                    global: true,

                },
                endpoints: {
                    login: {url: '/auth/login', method: 'post'},
                    logout: {url: '/auth/logout', method: 'post'},
                    user: {url: '/user/me', method: 'get'}

                },
                autoFetchUser: true

            }

        },
        cookie: {

            options:{

                path:'/',
                expires:50000,
                maxAge:50000
            }
        }
    },


    proxy: {
        '/api': {
            target: process.env.baseUrl,
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        }
    },

    buildModules: [
        ['@nuxtjs/dotenv', {filename: '.env'}],


    ],
    /*
    ** Plugins to load before mounting the App
    */
    slugify: {
        globals: {
            lower: true,
            strict: true
        },
    },
    plugins: [
        '~/plugins/axios',
        '~/plugins/api',

        "~/plugins/tools",

        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/vue2-google-maps.js',
        "~/plugins/mixins/global",

        '~/plugins/vue-masonry-css.js',
        '~/plugins/Mixitup.client.js',
        '~/plugins/vee-validate.js',
        '~/plugins/vue-country-code.js',


        '~/plugins/vee-validate.js',
        '~/plugins/silentbox.js',
        '~/plugins/vue-notification.js',
        {src: '~/plugins/vue-country-code.js', mode:'client'},

        {src: '~/plugins/aos.js', ssr: false},
        {src: '~/plugins/vue-masonry', ssr: false},

    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: process.env.baseUrl,
        browserBaseURL: process.env.baseUrl,
        proxy: true,
        credentials: false
    },

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',


        "@nuxtjs/proxy",

        '@nuxtjs/auth-next',

        '@nuxtjs/i18n',

        // with options
        ['nuxt-clipboard', { autoSetContainer: true }
            ],

    ],

    styleResources: {
        scss: [
            'assets/scss/default/_variables.scss'
        ]
    },

    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        transpile: ["vee-validate/dist/rules",/^vue2-google-maps($|\/)/, 'defu'],

        extend(config, ctx) {

        }
    },
// nuxt.config.js


    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en-US.js',
                name: 'En',
                icon: '/img/en.png',
                colorFlag: '#E2162C',
                iso: 'en-US' //



            },

            {
                code: 'fr',
                file: 'fr-FR.js',
                name: 'Fr',
                icon: '/img/fr.png',
                colorFlag: '#1ABC9C',
                iso: 'fr_FR' //



            }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'fr',
        strategy: 'prefix_except_default',

        baseUrl: process.env.baseUrl


    },




}
