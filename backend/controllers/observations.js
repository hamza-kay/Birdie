import pool from '../index.js';

export const getObservation = async (req, res) => {
  const query =
    'select payload->"$.id" as id,payload_as_text->"$.event_type" as event, payload->"$.fluid" as fluid, payload->"$.observed" as observed, payload->"$.consumed_volume_ml" as consumed,  payload->"$.timestamp"  as date, payload->"$.task_definition_description" as description,  payload->"$.task_schedule_note" as note FROM events';
  pool.query(query, (error, results) => {
    if (!results) {
      console.log(error);
    } else {
      res.status(200).json(results);
    }
  });
};
