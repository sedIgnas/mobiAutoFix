<template>
    <ContainerLayout>
        <h1>All available job requests</h1>
        <div v-if="!isFetching">
            <a @click="$router.go(-1)" class="mt-3 btn btn-outline-dark">Back</a>
            <ul>
                <li class="rounded p-3 my-2 list-unstyled bg-grad" v-for="job in this.jobs" :key="job.id">
                    <div class="d-inline-block borderRounded shadow-lg ">
                        <div class="p-2">
                            <p><strong>Job poster</strong>: {{ job.poster }}</p>
                            {{ job.location }}
                        </div>

                    </div>
                        <router-link class="text-light job-link float-right btn btn-outline-dark" :to="{ name: 'JobRequest', params: { id: job.id }}">Details</router-link>
                </li>
            </ul>
            <a @click="$router.go(-1)" class="mt-3 btn btn-outline-dark">Back</a>
        </div>
        <div v-else class="text-center">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
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
    data(){
        return{
            isFetching: true,
        };
    },
    methods: {
        ...mapActions('jobs', ['getJobs']),
        logConsole() {
            console.log(this.job);
        },
    },
    computed: {
        ...mapGetters('jobs', {
            jobs: 'getJobs',
        }),
    },
    created() {
        this.getJobs().then(() => {
            this.isFetching = false;
        });
    }
}

</script>
<style lang="scss" scoped>
.bg-grad{
    background: rgb(233,243,254);
    background: linear-gradient(29deg, rgba(233,243,254,1) 0%, rgba(150,178,218,1) 100%);
    border: 2px solid lightslategrey;
}
.borderRounded{
    border-radius: 10px;
}
</style>
