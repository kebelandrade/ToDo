// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const options = {
    theme: {
        dark: false,
        themes: {
            light: {
                // primary: colors.lightBlue.base,
                // secondary: colors.orange.base,
                // accent: colors.blue.base,
                // error: colors.red.base,
                // warning: colors.deepOrange.base,
                // info: colors.cyan.base,
                // success: colors.green.base
                primary: '#0A3B59',
                secondary: '#F2B33D',
                accent: '#F2A03D',
                error: colors.red.base,
                warning: colors.deepOrange.base,
                info: '#188FD9',
                success: colors.green.base
            }
        }
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
}

export default new Vuetify(options)


//
// export default new Vuetify({
//     theme: {
//         dark:false,
//         themes: {
//             light: {
//                 // primary: colors.red.darken1, // #E53935
//                 // secondary: colors.red.lighten4, // #FFCDD2
//                 // accent: colors.indigo.base, // #3F51B5
//                 //
//
//                 primary: colors.lightBlue.base,
//                 secondary: colors.orange.base,
//                 accent: colors.blue.base,
//                 error: colors.red.base,
//                 warning: colors.deepOrange.base,
//                 info: colors.cyan.base,
//                 success: colors.green.base
//
//             },
//         },
//     },
//     icons: {
//         iconfont: 'mdi', // default - only for display purposes
//     },
// })
