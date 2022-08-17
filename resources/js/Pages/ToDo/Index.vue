<template>
    <h1>PRUEBA DE ESTO</h1>
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
}


</script>

<style scoped>

</style>
