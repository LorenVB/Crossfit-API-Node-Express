const DB = require("./db.json");

const getRecordsForWorkout = (workoutId) => {
  try {
    const records = DB.records.filter((record) => record.workout === workoutId);
    if (!records) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return records;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getRecordsForWorkout };
