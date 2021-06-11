<template>
    <ContainerLayout>
        <h1>Vehicles</h1>
        <span class="h5">Here is the list of servicable vehicles, by current workers: </span>
        <b-row class="my-4">
            <b-col cols="9"><List /></b-col>
        </b-row>
    </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import List from '@/components/vehicleManager/List.vue';

export default {
    name: 'Vehicles',
    components: {
        ContainerLayout,
        List,
    },
    created() {
        this.$store.dispatch('vehicles/getVehicles');
    },
};
</script>
