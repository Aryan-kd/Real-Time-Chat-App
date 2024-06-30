import React, { useState } from "react";
import { Button, Input } from "../../components";
import { Link, useNavigate } from "react-router-dom";

const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });

  const handleOnSubmit = () => {
    console.log(data);
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white w-[500px] h-[550px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-3xl font-extrabold">
          Welcome {isSignInPage && "Back"}
        </div>
        <div className="text-base font-light mb-4">
          {isSignInPage ? "Sign Up" : "Sign In"} now to get started
        </div>
        <form
          className="w-full flex flex-col justify-center items-center"
          onSubmit={() => handleOnSubmit}
        >
          {isSignInPage && (
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your Full Name"
              className="mb-4"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="mb-4"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="mb-10"
            autoComplete="new-password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={isSignInPage ? "Sign Up" : "Sign In"}
            className="w-1/2 mb-1"
            type="submit"
          />
        </form>
        <div>
          Already have an account?{" "}
          <span
            className="text-primary cursor-pointer underline"
            onClick={() =>
              navigate(`/users/${isSignInPage ? "sign_in" : "sign_up"}`)
            }
          >
            {isSignInPage ? "Sign In" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
