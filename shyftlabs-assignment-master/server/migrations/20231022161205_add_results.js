/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('results', function (table) {
    table.increments('id').primary();

    table
      .integer('student_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('students')
      .onDelete('CASCADE');

    table
      .integer('course_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('courses')
      .onDelete('CASCADE');

    table.enum('grade', ['A', 'B', 'C', 'D', 'E', 'F']).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('results');
};
