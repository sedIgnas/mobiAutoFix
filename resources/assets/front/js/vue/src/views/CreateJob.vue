<template>
    <ContainerLayout>
        <h1>Create Job request</h1>
        <div>
            <b-form @submit="handleSubmit" v-if="show">
                <b-form-group id="input-group-2" label="Your name" label-for="input-2">
                    <b-form-input
                        id="input-1"
                        v-model="form.poster"
                        placeholder="Input full name"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Description: "
                    label-for="input-1"
                    description="Describe the problem that you are facing
                    in as much detail as you can.
                    Add ways to contact you, e.g: phone number.">

                    <b-form-textarea
                        id="input-2"
                        v-model="form.description"
                        type="text"
                        placeholder="Request description"
                        required
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group id="input-group-2" label="Request location" label-for="input-2">
                    <b-form-input
                        id="input-3"
                        v-model="form.location"
                        placeholder="Detail location as much as possible"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Phone number" label-for="input-2">
                    <b-form-input
                        id="input-4"
                        v-model="form.phone"
                        placeholder="Input your contact phone number"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Vehicle:" label-for="input-3">
                    <b-form-select v-model="form.vehicle_id">
                        <option v-for="vehicle in this.vehicles" :key="vehicle.id" :value="vehicle.id">
                            {{ vehicle.make.name }}
                            {{ vehicle.model.name }}
                        </option>
                    </b-form-select>
                </b-form-group>
                <a @click="$router.go(-1)" class="mt-3 btn btn-outline-dark">Back</a>
                <b-button type="submit" class="float-right" variant="primary">Submit</b-button>
            </b-form>
        </div>
    </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import {mapActions, mapGetters} from "vuex";
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter

export default {
    components: {
        ContainerLayout,
    },
    data() {
        return {
            form: {
                user_id: 3,
                poster: '',
                description: '',
                location: '',
                phone: '',
                vehicle_id: ''
            },
            show: true
        }
    },
    methods: {
        ...mapActions('vehicles', ['getVehicles']),
        ...mapActions('jobs', ['createJob']),
        handleSubmit() {
            this.createJob({
                user_id: this.form.user_id,
                poster: this.form.poster,
                description: this.form.description,
                location: this.form.location,
                phone: this.form.phone,
                vehicle_id: this.form.vehicle_id,
            });
        },
        logConsole() {
            console.log(this.vehicles);
        },
    },
    computed: {
        ...mapGetters('vehicles', {
            vehicles: 'getVehicles',
        }),
    },
    created() {
        this.$store.dispatch('vehicles/getVehicles');
    }
}
</script>
