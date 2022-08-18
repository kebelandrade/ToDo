<template>
    <v-simple-table>
        <thead>
        <tr>
            <th class="text-left">
                Tarea
            </th>
            <th class="text-left">
                Estado
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="t in tareasCompletadas">
            <td> {{ t.todo }}</td>
            <td v-if="t.complete === 1"> Completado</td>
        </tr>
        </tbody>
    </v-simple-table>
</template>

<script>
import Layout from "@shared/Layout"

export default {
    name: "Complete",
    components: {Layout},
    layout: (h, page) => h(Layout, [page]),

    props: {
        tareasCompletadas: Array
    },

    metaInfo: {
        title: 'ToDo',
    },


}
</script>

<style scoped>

</style>
