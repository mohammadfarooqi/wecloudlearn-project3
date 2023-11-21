import db from '../../config/database.js';

class StudentService {
  async get() {
    try {
      const students = await db('students').select();

      return {
        students,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      const { first_name, last_name, date_of_birth, email } = data;

      const [newStudent] = await db('students')
        .insert({
          first_name,
          last_name,
          date_of_birth,
          email,
        })
        .returning('*');

      return newStudent;
    } catch (error) {
      throw error;
    }
  }

  async del(studentId) {
    try {
      const result = await db('students').where({ id: studentId }).del();

      if (result === 0) {
        throw new Error('Student not found');
      }

      return 'Student deleted successfully';
    } catch (error) {
      throw error;
    }
  }
}

export default new StudentService();
