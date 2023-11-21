import { faker } from '@faker-js/faker';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = function (knex) {
  return knex('results')
    .del()
    .then(function () {
      const grades = ['A', 'B', 'C', 'D', 'E', 'F'];
      const existingCombinations = new Set(); // To track existing combinations
      const toInsert = [];

      while (existingCombinations.size <= 5) {
        const studentId = faker.number.int({ min: 1, max: 10 }); // Assuming 10 students
        const courseId = faker.number.int({ min: 1, max: 8 }); // Assuming 8 courses
        const grade = faker.helpers.arrayElement(grades);

        const combination = `${studentId}-${courseId}`;

        if (!existingCombinations.has(combination)) {
          toInsert.push({
            student_id: studentId,
            course_id: courseId,
            grade: grade,
          });

          existingCombinations.add(combination);
        }
      }

      return knex('results').insert(toInsert);
    });
};
