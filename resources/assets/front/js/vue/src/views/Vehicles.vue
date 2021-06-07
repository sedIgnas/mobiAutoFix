<template>
    <ContainerLayout>
        <h1>Vehicles</h1>
        <span class="h5">Here is the list of servicable vehicles, by current workers: </span>
        <b-row class="my-4">
            <b-col cols="9"><Table /></b-col>
            <b-col cols="3"><Form /></b-col>
        </b-row>
    </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import Form from '@/components/vehicleManager/Form.vue';
import Table from '@/components/vehicleManager/Table.vue';

export default {
    name: 'Vehicles',
    components: {
        ContainerLayout,
        Form,
        Table,
    },
    created() {
        this.$store.dispatch('vehicles/getVehicles');
    },
};
</script>
