const importCss = require('postcss-import'), cssNesting = require('postcss-nesting'),
    mix = require('laravel-mix'),
    path = require('path'),
    VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .alias({
        '@': 'resources/js',
        '@shared': path.resolve('resources/js/components/Shared'),
    })
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
