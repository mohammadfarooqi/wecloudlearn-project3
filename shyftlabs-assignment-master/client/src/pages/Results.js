import { useState, useEffect } from 'react';
import { results as ResultsApi } from '../services';
import { Table } from 'flowbite-react';

function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchResults(ignore);

    return () => {
      ignore = true;
    };
  }, []);

  const fetchResults = async (ignore = false) => {
    setLoading(true);

    try {
      const { data: response } = await ResultsApi.getAll();

      if (ignore) return;

      setResults(response.results);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="mb-5 text-3xl dark:text-white">Results List</h1>

      {loading ? (
        <p className="dark:text-white">Loading...</p>
      ) : error ? (
        <p className="dark:text-white">Error: {error}</p>
      ) : (
        <Table>
          <Table.Head>
            <Table.HeadCell>Course</Table.HeadCell>
            <Table.HeadCell>Student</Table.HeadCell>
            <Table.HeadCell>Grade</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {results.map((result) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={result.id}
              >
                <Table.Cell>{`${result.course_name}`}</Table.Cell>
                <Table.Cell>{`${result.student_first_name} ${result.student_last_name}`}</Table.Cell>
                <Table.Cell>{`${result.grade}`}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
}

export default Results;
