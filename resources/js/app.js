/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import {App,plugin} from '@inertiajs/inertia-vue'
import VueMeta from 'vue-meta'
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import Vuetify from 'vuetify'
require('./bootstrap');

require('vuetify/lib/util/colors')
require('@/plugins/registerComponents')
require('@/plugins/vuetify')
//window.Vue = require('vue');

Vue.use(plugins)

Vue.use(Vuetify);

import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: '#29d',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: false,
})

Vue.use(VueMeta);
Vue.mixin({ methods: { route: window.route } })

const app = document.getElementById('app')

window.eventBus = new Vue()

window.App = new Vue({
    vuetify,
    metaInfo: {
        title: 'Loading...',
        titleTemplate: 'ToDo',
        changed(info){
            window.App.goBack = info.goBack
            window.App.appTitle = info.titleChunk;
        }
    },
    data: vm => ({
        appTitle: 'Loading...',
        goBack: null,
        sideDrawer: null,

    }),

    render: h => h(App, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        },
    }),
}).$mount(app)


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

