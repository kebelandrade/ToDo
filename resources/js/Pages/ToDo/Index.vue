<template>
    <v-row>
        <v-card width="50%" style="padding-left: 15px">

            <v-col cols="12" md="6">
                <v-row class="pa-5">
                    <v-text-field
                        v-model="tarea"
                        label="Tarea"
                    />
                    <v-btn color="primary" dark class="mb-2"
                           link @click="agregar()">
                        Agregar Tarea
                    </v-btn>
                </v-row>
            </v-col>

        </v-card>

        <v-card width="50%">
            <v-card-title>
                Lista de QueHaceres
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle>
                <v-spacer></v-spacer>
            </v-card-subtitle>
            <v-col

            >
                <template v-if="!tareas.length">
                    No tiene ningún QueHacer Pendiente
                </template>
                <template v-else>
                    <v-simple-table
                        fixed-header
                        style="width: 100%"
                    >
                        <thead>
                        <tr>
                            <th>Tarea</th>
                            <th>Completado</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="t in tareas">


                            <td>
                                {{ t.todo }}
                            </td>

                            <td>
                                <v-checkbox
                                    v-model="t.complete"

                                    v-on:click="completado(t.id, t.complete)"
                                ></v-checkbox>
                            </td>
                        </tr>

                        </tbody>
                    </v-simple-table>

                    <v-btn color="primary" dark class="mb-2"
                           link @click="actualizar()">
                        Actualizar
                    </v-btn>

                    <v-btn color="primary" dark class="mb-2"
                           link @click="eliminar()">
                        Eliminar Seleccionado
                    </v-btn>

                    <v-btn color="primary" dark class="mb-2"
                           link @click="eliminarTodo()">
                        Eliminar Todo
                    </v-btn>

                </template>
            </v-col>
        </v-card>


    </v-row>
</template>

<script>
import Layout from "@shared/Layout"

export default {
    name: "Index",
    components: {Layout},
    layout: (h, page) => h(Layout, [page]),

    props: {
        tareas: Array
    },

    metaInfo: {
        title: 'ToDo',
    },

    data: () => ({


        tarea: '',
        selection: [],
        tareasCompletadas: {},
        tareasSeleccionada: {}


    }),

    methods: {

        // Este método sirve para añadir los items a un objeto
        agregar() {

            // Creamos un arreglo para poder añadir los items más especifico que deseamos
            let tarea = {}

            tarea.nombre = this.tarea
            tarea.seleccionado = 0
            tarea.completado = false


            // Dejamos en blanco el input para añadir otro item
            this.tarea = ''

            // Aquí mandamos los datos al controller para que guarde el item
            this.$inertia.post(this.route('todo.store'), tarea)

        },


        completado(id, complete) {

            this.tareasCompletadas = {}

            this.tareasCompletadas.id = id
            this.tareasCompletadas.completado = 1


        },

        actualizar() {

            this.$inertia.put(this.route('todo.update', this.tareasCompletadas.id), this.tareasCompletadas,
                {onSuccess: () => alert('Actualizado!')
            })

        },


        eliminar() {

            this.$inertia.post(this.route('todo.select'), this.tareas)

        },


        eliminarTodo() {

            this.$inertia.delete(this.route('todo.all'), this.tareas)

        },

    }

}


</script>

<style scoped>

</style>
