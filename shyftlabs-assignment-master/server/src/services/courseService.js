import db from '../../config/database.js';

class CourseService {
  async get() {
    try {
      const courses = await db('courses').select();

      return {
        courses,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      const { name } = data;

      const [newCourse] = await db('courses')
        .insert({
          name,
        })
        .returning('*');

      return newCourse;
    } catch (error) {
      throw error;
    }
  }

  async del(courseId) {
    try {
      const result = await db('courses').where({ id: courseId }).del();

      if (result === 0) {
        throw new Error('Course not found');
      }

      return 'Course deleted successfully';
    } catch (error) {
      throw error;
    }
  }
}

export default new CourseService();
