import API from '../../api';

export default {
  async getJobs({ commit }) {
    try {
      const jobs = await API.getJobs();
        console.log(jobs);
      commit('SAVE_JOBS', jobs);
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

    editJob({ commit, state }, id) {
    const cancelJobEditing = state.editedJobId === id;
    if (cancelJobEditing) {
      commit('SET_EDITED_JOB', null);
    } else {
      commit('SET_EDITED_JOB', id);
    }
  },

  async updateJob({ commit, dispatch, state }, formData) {
    try {
      await API.patchLJob({
        ...formData,
        id: state.editedJobId,
      });
      commit('SET_EDITED_JOB', null);
      dispatch('getJobs');
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },

  async deleteJob({ commit, dispatch }, id) {
    try {
      await API.deleteJob(id);
      dispatch('getJobs');
    } catch (errMsg) {
      commit('SAVE_ERROR', errMsg);
    }
  },
};
