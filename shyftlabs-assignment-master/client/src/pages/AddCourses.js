import React, { useState } from 'react';
import { Button, Label, TextInput, Datepicker } from 'flowbite-react';
import { courses as CoursesApi } from '../services';

const initialValues = {
  name: '',
};

function AddCourses() {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let course = {
      name: values.name,
    };

    try {
      await CoursesApi.create(course);
      setValues(initialValues);
      alert(`${course.name} has been successfully added.`);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const onChangeValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="mb-5 text-3xl dark:text-white">Add Courses</h1>

      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fname" value="Name" />
          </div>
          <TextInput
            id="name"
            name="name"
            placeholder="Science"
            required
            type="text"
            value={values.name}
            onChange={onChangeValue}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default AddCourses;
