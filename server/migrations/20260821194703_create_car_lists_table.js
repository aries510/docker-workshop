/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('car_list', function(table) {
        table.increments('id').primary();
        table.string('manufacturer').notNullable();
        table.string('name').notNullable();
        table.string('chassis_code');
        table.string('years_manufactured');
        table.string('engine');
        table.string('drivetrain');
        table.integer('horsepower');
        table.string('image_url', 2048);
    }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car_list')
};
