import React from "react";
import * as yup from "yup";
import Button from "../common/Button";
import { Form, Formik } from "formik";
import FormInput from "../common/FormInput";
import { MdEmail, MdKey } from "react-icons/md";

const schema = yup.object({
  email: yup.string().email("Invalid email address").required("Required"),
});

const LoginForm: React.FC = () => {
  return (
    <div className="px-8 flex items-center justify-center w-full h-full">
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values", values);
        }}
      >
        <Form className="flex flex-col gap-2 border border-gray shadow rounded px-8 py-[100px]">
          <FormInput
            name="email"
            type="email"
            label="Email"
            icon={MdEmail}
            placeholder="youremail@example.com"
          />
          <FormInput
            icon={MdKey}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password..."
          />

          <div className="flex items-center justify-center py-2">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
