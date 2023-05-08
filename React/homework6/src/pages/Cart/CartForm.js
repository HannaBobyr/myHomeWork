import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { handleArrayCart } from "store/actions/handleCards";
const Schema = yup.object().shape({
  name: yup.string().required().min(3),
  surname: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer()
    .max(100, "Are you sure this is your age?"),
  address: yup.string().required(),
  tel: yup
    .number()
    .typeError("telephone must be a `number` type")
    .positive()
    .integer()
    .required(),
});

const SignupForm = () => {
  const dispatch = useDispatch();
  const { arrayCart } = useSelector((state) => state.handleCards);
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        age: "",
        address: "",
        tel: "",
      }}
      validationSchema={Schema}
      onSubmit={(values) => {
        console.log(
          `id of bedroom/s that you have bought: ${arrayCart}. Your details: ${JSON.stringify(
            values,
            null,
            2
          )} `
        );
        localStorage.setItem("arrayCart", []);
        dispatch(handleArrayCart([]));
      }}
    >
      <Form className="form-cart">
        <p className="form-header">Buy Bedroom</p>
        <Field
          placeholder="Your Name"
          name="name"
          type="text"
          className="form-input"
        />
        <ErrorMessage className="errorMessage" name="name" />
        <Field
          placeholder="Your Surname"
          name="surname"
          type="text"
          className="form-input"
        />
        <ErrorMessage className="errorMessage" name="surname" />
        <Field
          placeholder=" Your Age"
          name="age"
          type="number"
          className="form-input"
        />
        <ErrorMessage className="errorMessage" name="age" />
        <Field
          placeholder=" Your Address"
          name="address"
          type="text"
          className="form-input"
        />
        <ErrorMessage className="errorMessage" name="address" />
        <Field
          placeholder="Your Telephone"
          name="tel"
          type="tel"
          className="form-input"
        />
        <ErrorMessage className="errorMessage" name="tel" />
        <button className="btn--form" type="submit">
          Checkout
        </button>
      </Form>
    </Formik>
  );
};
export default SignupForm;
