<template>
    <ContainerLayout>
        <h1>All available job requests</h1>
        <div>
            <ul>
                <li v-for="job in this.jobs" :key="job.id">
                    <router-link :to="{ name: 'JobRequest', params: { id: job.id }}">{{ job.user.first_name }}</router-link>
                    {{ job.location }}
                </li>
            </ul>
        </div>
    </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import {mapActions, mapGetters} from "vuex";

export default {
    components: {
        ContainerLayout,
    },
    // data() {
    //     return {
    //         jobId: ,
    //
    //         // locationFilters: this.$store.getters['locations/getLocations'].map((loc) => ({
    //         //     ...loc,
    //         //     checked: true,
    //         // })),
    //     };
    // },
    methods: {
        ...mapActions('jobs', ['deleteJob', 'editJob', 'getJobs']),
        isVehicleEdited(jobId) {
            return !!this.editedJobId && jobId === this.editedJobId;
        },
        logConsole() {
            console.log(this.jobs);
        },

    },
    computed: {
        ...mapGetters('jobs', {
            editedJobId: 'getEditedJobId',
            jobs: 'getJobs',
        }),
    },
    created() {
        this.getJobs();
        // this.$store.dispatch('jobs/getJobs');
    }
}
</script>
