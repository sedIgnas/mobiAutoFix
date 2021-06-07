export default {
    ADD_JOB(state, item) {
        state.jobs.push(item);
    },

    SET_EDITED_ADD_JOB(state, id) {
        state.editedJobId = id;
    },

    SAVE_JOBS(state, jobs) {
        state.jobs = jobs;
        console.log(state.jobs);
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
