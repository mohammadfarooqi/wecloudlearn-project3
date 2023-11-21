import db from '../../config/database.js';

class ResultService {
  async get() {
    try {
      const results = await db('results as r')
        .select(
          'r.id',
          'r.grade',
          's.first_name as student_first_name',
          's.last_name as student_last_name',
          'c.name as course_name'
        )
        .join('students as s', 'r.student_id', 's.id')
        .join('courses as c', 'r.course_id', 'c.id');

      return {
        results,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      const { student_id, course_id, grade } = data;

      const [newResult] = await db('results')
        .insert({
          student_id,
          course_id,
          grade,
        })
        .returning('*');

      return newResult;
    } catch (error) {
      throw error;
    }
  }
}

export default new ResultService();
