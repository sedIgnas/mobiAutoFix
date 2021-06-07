import API from '../../api';

export default {
  async getVehicles({ commit }) {
    try {
      const vehicles = await API.getVehicles();
      commit('SAVE_VEHICLES', vehicles);
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

  async createJob({ commit }, title) {
    try {
      await API.postJob(title);
      const jobs = await API.getJobs();
      commit('SAVE_JOBS', jobs);
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

    editVehicle({ commit, state }, id) {
    const cancelJobEditing = state.editedJobId === id;
    if (cancelJobEditing) {
      commit('SET_EDITED_JOB', null);
    } else {
      commit('SET_EDITED_JOB', id);
    }
  },

  async updateJob({ commit, dispatch, state }, formData) {
    try {
      await API.patchJob({
        ...formData,
        id: state.editedJobId,
      });
      commit('SET_EDITED_JOB', null);
      dispatch('getJobs');
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

  async deleteVehicle({ commit, dispatch }, id) {
    try {
      await API.deleteJob(id);
      dispatch('getJobs');
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },
};
