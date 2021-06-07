<template>
  <b-card
    :class="{
      shadow: true,
      'border-success': !isEdited,
      'border-warning': isEdited,
    }"
  >
    <h2 class="h4">{{ formAction }}</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label="Vehicle" label-for="vehicle">
        <b-form-input
          id="vehicle"
          v-model="vehicleTitle"
          type="text"
          placeholder="Lexus"
          required
        />
      </b-form-group>
      <div class="text-center">
        <b-button type="submit" :variant="isEdited ? 'warning' : 'success'">
          {{ formAction }}
        </b-button>
      </div>
    </b-form>
  </b-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Form',
  data() {
    return {
      vehicleTitle: '',
    };
  },
  watch: {
    editedLocation(newEditedVehicle) {
      if (newEditedVehicle) {
        this.vehicleTitle = newEditedVehicle.title;
      } else {
        this.vehicleTitle = '';
      }
    },
  },
  methods: {
    handleSubmit() {
      if (this.isEdited) {
        this.updateVehicle({ title: this.vehicleTitle });
      } else this.createVehicle(this.vehicleTitle);
    },
    ...mapActions('vehicle', ['updateVehicle', 'createVehicle']),
  },
  computed: {
    ...mapGetters('vehicle', {
      isEdited: 'getVehicleIsEdited',
      editedVehicle: 'getEditedVehicle',
    }),
    formAction() {
      return `${this.isEdited ? 'Update' : 'Create'} Vehicle`;
    },
  },
};
</script>
