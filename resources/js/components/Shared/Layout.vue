<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            app>
            <v-list
                nav
                dense
            >

                <v-list-item-group v-model="group" active-class="primary--text text--accent-4">


                    <v-list-item-content>
                        <v-list-item link @click="$inertia.visit(route('todo.index'))" >
                            <v-list-item-icon>
                                <v-icon>mdi-text-box-plus</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Agregar una nueva Tarea</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-content>


                    <v-list-item-content>
                        <v-list-item link @click="$inertia.visit(route('todo.index'))" >
                            <v-list-item-icon>
                                <v-icon>mdi-text-box-check</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Tareas Completadas</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-content>

                </v-list-item-group>
            </v-list>
            <v-list slot="append">
                <v-list-item-content>
                    <v-list-item>
                        {{ new Date().getFullYear() }} — <strong>Demo ToDo</strong>
                    </v-list-item>
                </v-list-item-content>
            </v-list>

        </v-navigation-drawer>
        <v-app-bar
            height="90px"
            color="dark accent-4"
            dense
            dark
            app>


            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
                <template v-if="$root.goBack">
                    <inertia-link class="secondary--text btn btn-primary" :href="route($root.goBack.url)" style="text-decoration: none">
                        {{ $root.goBack.title }}
                    </inertia-link>
                    /
                </template>
                {{ $root.appTitle }}
            </v-toolbar-title>

            <v-spacer></v-spacer>


            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list
                    dense
                    nav
                >

                </v-list>
            </v-menu>
        </v-app-bar>

        <v-main>

            <slot></slot>

        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'Layout',

    data: () => ({
        drawer: true,
        group: null,
    }),
    watch: {
        group() {
            this.drawer = true
        },
    },
}
</script>
