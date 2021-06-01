import React from "react";
import { useForm } from "react-hook-form";
import content from "../static/registerFields";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  firstname: yup.string().required("your firstname is required!!!"),
  lastname: yup.string().required("your lastname is required!!!"),
  email: yup.string().required().min(5),
});

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="form-container">
      <h1>REGISTER</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
          return (
            <div key={key}>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                ref={register}
              />
              <p style={{ marginTop: "-10px" }}>
                {errors[input.name]?.message}
              </p>
            </div>
          );
        })}
        <button className="submit">Subscribe</button>
      </form>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
