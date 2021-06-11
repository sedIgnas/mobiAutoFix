import API from '../../api';

export default {
    async getJobs({commit}) {
        try {
            const jobs = await API.getJobs();
            commit('SAVE_JOBS', jobs);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    async getJob({commit}, id) {
        try {
            const job = await API.getJob(id);
            commit('SAVE_JOB', job);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    async getUserVehicle({commit}, id) {
        try {
            const userVehicle = await API.getUserVehicle(id);
            commit('SAVE_USER_VEHICLE', userVehicle);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    async createJob({ commit, dispatch }, jobData) {
        try {
            await API.postJob(jobData);
            dispatch('getJobs');
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },
};
