import React, { useState } from "react";
import { navigate } from "@reach/router";
import { Link } from "gatsby";
import { Auth } from "aws-amplify";

import { AuthForm, Email, Password, ConfirmationCode } from "../Forms";

const initialState = {
  username: ``,
  password: ``,
  confirmPassword: ``,  
  email: "",
  auth_code: "",
  error: "",
};

const SignUp = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(0);


  const handleUpdate = (event) => {
    if (event.target.name === "email") {
      setFormValues({
        ...formValues,
        username: event.target.value,
        [event.target.name]: event.target.value,
        error: "",
      });
    } else {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
        error: "",
      });
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    const { username, password, email } = formValues;
    setLoading(true);
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      setLoading(false);
      setStage(1);
    } catch (err) {
      setLoading(false);
      setFormValues({ ...formValues, error: err });
      console.log("error signing up...", err);
    }
  };

  const resendCode = async (e) => {
    e.preventDefault();
    const { email } = formValues;
    setLoading(true);
    try {
      await Auth.resendSignUp(email);
      setLoading(false);
      setStage(1);
    } catch (err) {
      setLoading(false);
      setFormValues({ ...formValues, error: err });
      console.log("error resending code...", err);
    }
  };

  const verify = async (e) => {
    e.preventDefault();
    const { email, auth_code } = formValues;
    setLoading(true);
    try {
      await Auth.verifyCurrentUserAttributeSubmit(email, auth_code);
      setLoading(false);
      navigate("/signin");
    } catch (err) {
      setLoading(false);
      setFormValues({ ...formValues, error: err });
      console.log("error signing up...", err);
    }
  };

  const confirmSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, auth_code } = formValues;
    try {
      await Auth.confirmSignUp(email, auth_code);
      setLoading(false);
      navigate("/signin");
    } catch (err) {
      setLoading(false);
      setFormValues({ ...formValues, error: err });
      console.log("error confirming signing up...", err);
    }
  };

  if (stage === 0) {
    return (
      <AuthForm title="Create a new account" error={formValues.error}>
        <Email
          handleUpdate={handleUpdate}
          email={formValues.email}
          autoComplete="off"
        />
        <Password
          handleUpdate={handleUpdate}
          password={formValues.password}
          autoComplete="off"
        />
        <Password
          handleUpdate={handleUpdate}
          label="Confirm Password"
          name="confirmPassword"
          password={formValues.confirmPassword}
          autoComplete="off"
        />
        <button
          onClick={(e) => signUp(e)}
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading || formValues.password!==formValues.confirmPassword}
        >
          {loading ? null : "Create Account"}
          {loading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </button>
        <p style={{ marginTop: 40 }} className="text-center">
          Have an account? <Link to="/signin">Sign in</Link>
        </p>
      </AuthForm>
    );
  }
  return (
    <AuthForm>
      <Email
        handleUpdate={handleUpdate}
        email={formValues.email}
        autoComplete="off"
      />
      <ConfirmationCode
        handleUpdate={handleUpdate}
        auth_code={formValues.auth_code}
        autoComplete="off"
      />
      <button
        onClick={(e) => confirmSignUp(e)}
        type="submit"
        className="btn btn-primary btn-block"
        disabled={loading}
      >
        {loading ? null : "Confirm"}
        {loading && (
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
        )}
      </button>
      <p style={{ marginTop: 40 }} className="text-center">
        Have an account? <Link to="/signin">Sign in</Link>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ marginTop: 20, marginBottom: 20 }} className="text-center">
          Lost your code?
        </p>
        <button
          className="btn btn-link"
          onClick={(e) => resendCode(e)}
          disabled={loading}
        >
          Resend Code
        </button>
      </div>
    </AuthForm>
  );
};

export default SignUp;
