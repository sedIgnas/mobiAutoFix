<template>
    <div>
        <ul id="example-1">
            <li v-for="vehicle in this.vehicles" :key="vehicle.id">
                {{ vehicle.make.name }} {{ vehicle.model.name }}
            </li>
        </ul>
    </div>

<!--  <b-table-->
<!--    small-->
<!--    :fields="fields"-->
<!--    :items="vehicles"-->
<!--    striped-->
<!--    head-variant="dark"-->
<!--  >-->
<!--    <template #cell()="data">-->
<!--      {{ data.value }}-->
<!--    </template>-->

<!--    <template #cell(createdAt)="data">-->
<!--      {{ dateStr2yyyymmdd(data.value) }}-->
<!--    </template>-->

<!--    <template #cell(updatedAt)="data">-->
<!--      {{ dateStr2yyyymmdd(data.value) }}-->
<!--    </template>-->

<!--    <template #cell(actions)="data">-->
<!--      <b-button-->
<!--        :variant="-->
<!--          isVehicleEdited(data.item.id) ? 'outline-warning' : 'warning'-->
<!--        "-->
<!--        @click="editVehicle(data.item.id)"-->
<!--      >-->
<!--        {{ isVehicleEdited(data.item.id) ? "Cancel" : "Edit" }}-->
<!--      </b-button>-->
<!--      <span class="mr-1"></span>-->
<!--      <b-button-->
<!--        variant="danger"-->
<!--        :disabled="isVehicleEdited(data.item.id)"-->
<!--        @click="logConsole()"-->
<!--      >-->
<!--        Delete-->
<!--      </b-button>-->
<!--    </template>-->
<!--  </b-table>-->
</template>

<script>
import { dateStr2yyyymmdd } from '@/helpers/dateTime';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Table',
  data() {
    return {
      fields: [
        'Vehicle',
        { key: 'createdAt', label: 'Created At' },
        { key: 'updatedAt', label: 'Updated At' },
        { key: 'actions', label: 'Actions' },
      ],
    };
  },
  methods: {
    dateStr2yyyymmdd,
    ...mapActions('vehicles', ['deleteVehicle', 'editVehicle']),
      isVehicleEdited(vehicleId) {
      return !!this.editedVehicleId && vehicleId === this.editedVehicleId;
    },
      logConsole() {
          console.log(this.vehicles);
      },
  },
  computed: {
    ...mapGetters('vehicles', {
        editedVehicleId: 'getEditedVehicleId',
      vehicles: 'getVehicles',
        state: 'getState',
    }),
  },
};
</script>
