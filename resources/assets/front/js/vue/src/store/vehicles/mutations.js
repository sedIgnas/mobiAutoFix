export default {
    ADD_VEHICLE(state, item) {
        state.vehicles.push(item);
    },

    SET_EDITED_VEHICLE(state, id) {
        state.editedVehicleId = id;
    },

    SAVE_VEHICLES(state, vehicles) {
        state.vehicles = vehicles;
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
