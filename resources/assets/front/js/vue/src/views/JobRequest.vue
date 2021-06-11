<template>
    <ContainerLayout>

        <!--        TESTING TESTING TESTING -->
        <!--        <b-button variant="outline-dark" @click="logConsole"></b-button>-->
        <!--        TESTING TESTING TESTING -->

        <h1>Job request id: {{ $route.params.id }}</h1>
        <div v-if="!isFetching">
            <b-card :title="this.job[0].poster" sub-title="Job poster">
                <b-card-text>
                    <hr>
                    <strong>Description</strong>: <br> {{ this.job[0].description }}
                </b-card-text>
                <b-card-text>
                    <strong>Location</strong>: <br> {{ this.job[0].location }}
                    <hr>
                </b-card-text>
                <b-card-text v-if="this.job[0].phone">
                    <strong>Phone</strong>: <br> {{ this.job[0].phone }}
                    <hr>
                </b-card-text>
                <b-card-text v-else>
                    <strong>Phone</strong>: <br> User did not specify
                    <hr>
                </b-card-text>
                <b-card-text>
                    <strong>Vehicle</strong>: {{ this.userVehicle[0].make.name }} {{ this.userVehicle[0].model.name }}
                    <hr>
                </b-card-text>
            </b-card>
        </div>
        <div v-else class="text-center">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
                <a @click="$router.go(-1)" class="mt-3 btn btn-outline-dark">Back to Jobs</a>
    </ContainerLayout>
</template>
<script>

import ContainerLayout from '@/layouts/ContainerLayout.vue';
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'JobRequest',
    components: {
        ContainerLayout,
    },
    data() {
      return {
          isFetching: true,
      };
    },
    methods: {
        ...mapActions('jobs', ['getJob']),
        ...mapActions('vehicles', ['getUserVehicle']),
        logConsole() {
            console.log(this.isFetching);
            this.isFetching = false;
        },
    },

    computed: {
        ...mapGetters('jobs', {
            job: 'getJob',
        }),
        ...mapGetters('vehicles', {
            userVehicle: 'getUserVehicle',
        }),
    },
    created() {
        this.$store.dispatch('jobs/getJob', this.$route.params.id).then(() => {
            this.$store.dispatch('vehicles/getUserVehicle', this.job[0].vehicle_id).then(() => {
                this.isFetching = false;
            });
        });
    },
}
</script>
