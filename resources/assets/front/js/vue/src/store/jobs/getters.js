export default {
  getJobTitles: (state) => (jobs) => jobs
    .map((job) => state.jobs.find((stateJob) => stateJob.id === job.id).title),

    getEditedJobId: (state) => state.editedJobId ?? false,

  getJobIsEdited: (state) => !!state.editedJobId,

  getEditedJob: (state) => state.jobs
    .find(({ id }) => id === state.editedJobId) ?? false,

  getJobs: (state) => state.jobs,

  getJobTitlesAndIds: (state) => state.job.map(({ id, title }) => ({ id, title })),
};
