import { useState, useEffect } from 'react';
import { courses as CoursesApi } from '../services';
import { Table, Button } from 'flowbite-react';
import moment from 'moment';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchCourses(ignore);

    return () => {
      ignore = true;
    };
  }, []);

  const fetchCourses = async (ignore = false) => {
    setLoading(true);

    try {
      const { data: response } = await CoursesApi.getAll();

      if (ignore) return;

      setCourses(response.courses);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteCourse = async (courseId) => {
    setLoading(true);

    try {
      const { data: response } = await CoursesApi.del(courseId);

      await fetchCourses();
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="mb-5 text-3xl dark:text-white">Courses List</h1>

      {loading ? (
        <p className="dark:text-white">Loading...</p>
      ) : error ? (
        <p className="dark:text-white">Error: {error}</p>
      ) : (
        <Table>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {courses.map((course) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={course.id}
              >
                <Table.Cell>{`${course.name}`}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="failure"
                    size="sm"
                    onClick={() => {
                      deleteCourse(course.id);
                    }}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
}

export default Courses;
