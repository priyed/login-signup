import React from "react";
import { useForm } from "react-hook-form";
import content from "../static/loginField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("your firstname is required!!!"),
  password: yup.string().required().min(5),
});

function Loginform({ match, isLoggedIn, handleLogin }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="form-container">
      <h1>LOGIN</h1>
      <p>Welcome back</p>
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
        <Link to="/dashboard">
          <button className="submit">Login</button>{" "}
        </Link>
      </form>
      <p>
        Don't have an account? <Link to="/signUp">Sign up</Link>
      </p>
    </div>
  );
}

export default Loginform;
