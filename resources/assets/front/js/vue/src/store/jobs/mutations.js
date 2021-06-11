export default {
    ADD_JOB(state, item) {
        state.jobs.push(item);
    },

    SAVE_JOBS(state, jobs) {
        state.jobs = jobs;
    },

    SAVE_JOB(state, job) {
        state.job = job;
    },

    SAVE_USER_VEHICLE(state, userVehicle) {
        state.userVehicle = userVehicle;
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
