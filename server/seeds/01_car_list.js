/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {manufacturer: 'Nissan', name: 'Fairlady Z (350Z)', chassis_code: 'Z33', years_manufactured: '2002-2008', engine: '3.5L V6 (VQ35)', drivetrain: 'Rear-Wheel Drive (RWD)', horsepower: 287, image_url: '/images/350z.jpg' },
    {manufacturer: 'Nissan', name: 'Silvia Spec-R', chassis_code: 'S15', years_manufactured: '1999-2002', engine: '2.0L I4 (SR20)', drivetrain: 'Rear-Wheel Drive (RWD)', horsepower: 250, image_url: '/images/silvia-spec-r.jpg' },
    {manufacturer: 'Nissan', name: 'rowValue3', chassis_code: 'value', years_manufactured: 'value', engine: 'value', drivetrain: ' value', horsepower: '123', image_url: 'url' },
    {manufacturer: 'Nissan', name: 'rowValue3', chassis_code: 'value', years_manufactured: 'value', engine: 'value', drivetrain: ' value', horsepower: '123', image_url: 'url' }
  ]);
};
