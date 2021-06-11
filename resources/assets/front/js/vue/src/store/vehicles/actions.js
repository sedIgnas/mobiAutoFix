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

    async getUserVehicle({ commit }, id) {
        try {
            const userVehicle = await API.getUserVehicle(id);
            commit('SAVE_USER_VEHICLE', userVehicle);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

};
