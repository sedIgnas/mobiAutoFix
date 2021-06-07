export default {
  getVehicleTitles: (state) => (vehicles) => vehicles
    .map((vehicle) => state.vehicles.find((stateVehicle) => stateVehicle.id === vehicle.id).title),

    getEditedVehicleId: (state) => state.editedLocationId ?? false,

  getLocationIsEdited: (state) => !!state.editedLocationId,

  getEditedLocation: (state) => state.locations
    .find(({ id }) => id === state.editedLocationId) ?? false,

  getVehicles: (state) => state.vehicles,

    getState: (state) => state,

  getLocationTitlesAndIds: (state) => state.locations.map(({ id, title }) => ({ id, title })),
};
