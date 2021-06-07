<template>
    <ContainerLayout>
        <h1>Job request id: {{ $route.params.id }} </h1>

    </ContainerLayout>
</template>
<script>

import ContainerLayout from '@/layouts/ContainerLayout.vue';

export default {
    name: 'JobRequest',
    components: {
        ContainerLayout,
    }
}
</script>
