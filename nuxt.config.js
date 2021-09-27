export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'new-proj',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/bootstrap.min.css',
    // '@/assets/bootstrap-icons.css',
    '@/assets/dashboard.css',
  ],

  script: [
    // {
    //     // src: '/js/bootstrap.min.js',
    //     src: "./js/bootstrap.bundle.min.js",
    // },
    // { src: "~/assets/js/bootstrap.bundle.min.js", type: "text/javascript" },
    { 
      src: "@/assets/js/bootstrap.bundle.min.js", 
      src: "@/assets/js/feather.min.js",
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/bootstrap.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
