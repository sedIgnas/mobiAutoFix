export default {
    SAVE_VEHICLES(state, vehicles) {
        state.vehicles = vehicles;
    },
    SAVE_USER_VEHICLE(state, userVehicle) {
        state.userVehicle = userVehicle;
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
