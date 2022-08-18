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
                <template v-if="!selection.length">
                    No tiene ningún QueHacer Pendiente
                </template>
                <template v-else>
                    <v-simple-table
                        fixed-header
                        style="width: 100%"
                    >
                        <thead>
                        <tr>
                            <th></th>
                            <th>Tarea</th>
                            <th>Completado</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="t in selection">

                            <td>
                                <v-checkbox
                                    v-model="t.seleccionado"
                                    v-on:click="seleccionado(t.nombre, t.indice)"
                                ></v-checkbox>
                            </td>

                            <td>
                                {{ t.nombre }}
                            </td>

                            <td>
                                <v-checkbox
                                    v-model="t.completado"
                                ></v-checkbox>
                            </td>
                        </tr>

                        </tbody>
                    </v-simple-table>

                    <v-btn color="primary" dark class="mb-2"
                           link @click="guardar()">
                        Guardar
                    </v-btn>
                    <v-btn color="primary" dark class="mb-2"
                           link @click="actualizar()">
                        Actualizar
                    </v-btn>

                    <v-btn color="primary" dark class="mb-2"
                           link @click="eliminar()">
                        Eliminar Seleccionado
                    </v-btn>

                    <v-btn color="primary" dark class="mb-2"
                           link @click="eliminar()">
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

    metaInfo: {
        title: 'ToDo',
    },

    data: () => ({


        tarea: '',
        selection: []


    }),

    methods: {

        // Este método sirve para añadir los items a un objeto
        agregar(){

            // Creamos un arreglo para poder añadir los items más especifico que deseamos
            let tarea = {}

            tarea.nombre = this.tarea
            tarea.seleccionado = 0
            tarea.completado = false

            // Aquí indicamos que el índice nos servirá para referencia del item para la eliminación
            if (!this.selection.length) {
                tarea.indice = 0
            } else {
                tarea.indice = this.selection.length
            }

            // Aquí añadimos el arreglo al objeto
            this.selection.push(tarea)

            // Dejamos en blanco el input para añadir otro item
            this.tarea = ''

        },

        // Esta función es para hacer selección del item que queremos eliminar
        seleccionado(nombre, indice){

              //Aquí realizamos un foreach del objeto selection que contiene los items agregado
                this.selection.forEach(t => {

                    // Aquí comprobamos si es el item que seleccionamos para añadir un indicador
                    if (t.indice === indice){

                        // Verificamos si el checkbox fue seleccionado
                        if (t.seleccionado === true){

                           // Añadimos este 1 para tomar referencia que está disponible para eliminarlo
                           t.seleccionado = 1

                        } else if (t.seleccionado === false){

                            // El 0 para tomar en cuenta que no está disponible para eliminarlo
                            t.seleccionado = 0
                        }
                    }
                })

            }

    }

}




</script>

<style scoped>

</style>
