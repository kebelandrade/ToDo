

import {App,plugin} from '@inertiajs/inertia-vue'
import VueMeta from 'vue-meta'
import vuetify from '@/plugins/vuetify'
import Vue from 'vue'
import Vuetify from 'vuetify'


Vue.use(plugin);


require('vuetify/lib/util/colors')
require('@/plugins/registerComponents')
require('@/plugins/vuetify')


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

Vue.use(Vuetify);
Vue.use(VueMeta);
Vue.mixin({ methods: { route: window.route } })

const app = document.getElementById('app')

window.eventBus = new Vue()

window.App = new Vue({
    vuetify,
    metaInfo: {
        title: 'Loading...',
        titleTemplate: '%s • ToDo',
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
