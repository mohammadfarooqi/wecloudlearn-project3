/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = function (knex) {
  return knex('courses')
    .del()
    .then(function () {
      const courses = [
        'Calculus',
        'Algebra',
        'Fine Arts',
        'Digital Design',
        'Software Engineering',
        'Controls',
        'Computer Organization',
        'Intro to Microprocessors',
      ].map((course) => ({
        name: course,
      }));
      return knex('courses').insert(courses);
    });
};
