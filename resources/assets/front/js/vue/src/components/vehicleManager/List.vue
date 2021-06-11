<template>
    <div>
        <ul id="example-1">
            <li v-for="vehicle in this.vehicles" :key="vehicle.id">
                {{ vehicle.make.name }} {{ vehicle.model.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { dateStr2yyyymmdd } from '@/helpers/dateTime';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Table',
  data() {
    return {};
  },
  methods: {
    dateStr2yyyymmdd,
    ...mapActions('vehicles', ['deleteVehicle', 'editVehicle']),
      // logConsole() {
      //     console.log(this.vehicles);
      // },
  },
  computed: {
    ...mapGetters('vehicles', {
      vehicles: 'getVehicles',
        state: 'getState',
    }),
  },
};
</script>
