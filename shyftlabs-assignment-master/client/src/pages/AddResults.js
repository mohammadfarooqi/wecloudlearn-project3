import React, { useState, useEffect } from 'react';
import { Button, Label, TextInput, Select } from 'flowbite-react';
import { courses as CoursesApi } from '../services';
import { students as StudentsApi } from '../services';
import { results as ResultsApi } from '../services';

const initialValues = {
  student_id: null,
  course_id: null,
  grade: null,
};

const initialLoading = {
  students: false,
  courses: false,
};

const GRADES = ['A', 'B', 'C', 'D', 'E', 'F'];

function AddResults() {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(initialLoading);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetchCourses();
    fetchStudents();
  }, []);

  const fetchCourses = async () => {
    setLoading({ ...loading, courses: true });

    try {
      const { data: response } = await CoursesApi.getAll();

      setCourses(response.courses);
    } catch (error) {
      console.error('Error:', error);
      setErrors([...errors, error.message]);
    } finally {
      setLoading({ ...loading, courses: false });
    }
  };

  const fetchStudents = async () => {
    setLoading({ ...loading, students: true });

    try {
      const { data: response } = await StudentsApi.getAll();

      setStudents(response.students);
    } catch (error) {
      console.error('Error:', error);
      setErrors([...errors, error.message]);
    } finally {
      setLoading({ ...loading, students: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('handleSubmit', e);

    let result = {
      student_id: values.student_id,
      course_id: values.course_id,
      grade: values.grade,
    };

    try {
      await ResultsApi.create(result);
      setValues({ ...initialValues });
      alert(`Result has been successfully added.`);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const onChangeValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log('vaues', values);

  return (
    <>
      <h1 className="mb-5 text-3xl dark:text-white">Add Results</h1>

      {loading.students || loading.courses ? (
        <p className="dark:text-white">Loading...</p>
      ) : errors.length > 0 ? (
        <p className="dark:text-white">Error: {errors}</p>
      ) : (
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div className="max-w-md" id="selectCourse">
            <div className="mb-2 block">
              <Label htmlFor="courses" value="Select course" />
            </div>
            <Select
              id="courses"
              name="course_id"
              required
              onChange={onChangeValue}
              defaultValue={values.course_id}
            >
              <option
                key="empty"
                value={null}
                selected={values.course_id == null}
              ></option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="max-w-md" id="selectStudent">
            <div className="mb-2 block">
              <Label htmlFor="students" value="Select student" />
            </div>
            <Select
              id="students"
              name="student_id"
              required
              onChange={onChangeValue}
              defaultValue={values.student_id}
            >
              <option
                key="empty"
                value={null}
                selected={values.student_id == null}
              ></option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.first_name} {student.last_name}
                </option>
              ))}
            </Select>
          </div>
          <div className="max-w-md" id="selectGrade">
            <div className="mb-2 block">
              <Label htmlFor="grades" value="Select grade" />
            </div>
            <Select
              id="grades"
              name="grade"
              required
              onChange={onChangeValue}
              defaultValue={values.grade}
            >
              <option
                key="empty"
                value={null}
                selected={values.grade == null}
              ></option>
              {GRADES.map((grade, idx) => (
                <option key={idx} value={grade}>
                  {grade}
                </option>
              ))}
            </Select>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      )}
    </>
  );
}

export default AddResults;
