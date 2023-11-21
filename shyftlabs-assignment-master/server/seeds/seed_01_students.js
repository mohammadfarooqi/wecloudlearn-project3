import { faker } from '@faker-js/faker';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = function (knex) {
  return knex('students')
    .del()
    .then(function () {
      const students = new Array(10).fill('').map(() => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        return {
          first_name: firstName,
          last_name: lastName,
          date_of_birth: faker.date.birthdate({
            mode: 'age',
            min: 10,
            max: 22,
          }),
          email: faker.internet.email({
            firstName,
            lastName,
          }),
        };
      });
      return knex('students').insert(students);
    });
};
