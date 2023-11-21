import React, { useState } from 'react';
import { Button, Label, TextInput, Datepicker } from 'flowbite-react';
import { subtractFromDate } from '../utils';
import moment from 'moment';
import { students as StudentsApi } from '../services';

const initialValues = {
  fname: '',
  lname: '',
  dob: subtractFromDate(new Date(), { years: 10 }),
  email: '',
};

function AddStudents() {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let student = {
      first_name: values.fname,
      last_name: values.lname,
      date_of_birth: values.dob,
      email: values.email,
    };

    try {
      await StudentsApi.create(student);
      setValues(initialValues);
      alert(
        `${student.first_name} ${student.last_name} has been successfully added.`
      );
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const onChangeValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSelectedDateChanged = (date) => {
    setValues({ ...values, dob: moment(date).utc(true).format() });
  };

  return (
    <>
      <h1 className="mb-5 text-3xl dark:text-white">Add Students</h1>

      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fname" value="First Name" />
          </div>
          <TextInput
            id="fname"
            name="fname"
            placeholder="John"
            required
            type="text"
            value={values.fname}
            onChange={onChangeValue}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lname" value="Last Name" />
          </div>
          <TextInput
            id="lname"
            name="lname"
            placeholder="Smith"
            required
            type="text"
            value={values.lname}
            onChange={onChangeValue}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="dob" value="Date of Birth" />
          </div>
          <Datepicker
            id="dob"
            name="dob"
            maxDate={initialValues.dob}
            onSelectedDateChanged={onSelectedDateChanged}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            name="email"
            placeholder="name@email.com"
            required
            type="email"
            value={values.email}
            onChange={onChangeValue}
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default AddStudents;
