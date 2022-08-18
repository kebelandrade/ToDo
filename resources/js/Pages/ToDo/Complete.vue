<template>
    <v-simple-table>
        <template>
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
            <tr>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import Layout from "@shared/Layout"

export default {
    name: "Complete",
    components: {Layout},
    layout: (h, page) => h(Layout, [page]),

    metaInfo: {
        title: 'ToDo',
    },


}
</script>

<style scoped>

</style>
