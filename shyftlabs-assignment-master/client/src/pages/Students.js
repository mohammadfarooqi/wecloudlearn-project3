import { useState, useEffect } from 'react';
import { students as StudentsApi } from '../services';
import { Table, Button } from 'flowbite-react';
import moment from 'moment';

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchStudents(ignore);

    return () => {
      ignore = true;
    };
  }, []);

  const fetchStudents = async (ignore = false) => {
    setLoading(true);

    try {
      const { data: response } = await StudentsApi.getAll();

      if (ignore) return;

      setStudents(response.students);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (studentId) => {
    setLoading(true);

    try {
      const { data: response } = await StudentsApi.del(studentId);

      await fetchStudents();
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="mb-5 text-3xl dark:text-white">Students List</h1>

      {loading ? (
        <p className="dark:text-white">Loading...</p>
      ) : error ? (
        <p className="dark:text-white">Error: {error}</p>
      ) : (
        <Table>
          <Table.Head>
            <Table.HeadCell>Name & Family Name</Table.HeadCell>
            <Table.HeadCell>DOB</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {students.map((student) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={student.id}
              >
                <Table.Cell>
                  {`${student.first_name} ${student.last_name}`}
                </Table.Cell>
                <Table.Cell>{`${moment(student.date_of_birth).format(
                  'MM/DD/YYYY'
                )}`}</Table.Cell>
                <Table.Cell>{`${student.email}`}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="failure"
                    size="sm"
                    onClick={() => {
                      deleteStudent(student.id);
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

export default Students;
