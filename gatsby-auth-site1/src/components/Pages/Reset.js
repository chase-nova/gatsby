import React, { useState } from "react";
import { Link } from "gatsby";
import { navigate } from "@reach/router";
import { Auth } from "aws-amplify";

import { AuthForm, Email, Password, ConfirmationCode } from "../Forms";

const initialState = {
  email: ``,
  auth_code: ``,
  password: ``,
  error: ``,
};

const Reset = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(0);

  const handleUpdate = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
      error: "",
    });
  };

  const reset = async (e) => {
    e.preventDefault();
    const { email } = formValues;
    try {
      setLoading(true);
      await Auth.forgotPassword(email);
      console.log("forgotPassword");
      setLoading(false);
      setStage(1);
    } catch (err) {
      setFormValues({ ...formValues, error: err });
      setLoading(false);
      console.log("error...: ", err);
    }
  };

  const confirmReset = async (e) => {
    e.preventDefault();
    const { email, auth_code, password } = formValues;
    setLoading(true);
    Auth.forgotPasswordSubmit(email, auth_code, password)
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .then(() => navigate("/signin"))
      .catch((err) => {
        console.log(err);
        setFormValues({ ...formValues, error: err });
        setLoading(false);
        });
  };

  if (stage === 0) {
    return (
      <AuthForm title="Reset your password" error={formValues.error}>
        <Email
          handleUpdate={handleUpdate}
          email={formValues.email}
          autoComplete="on"
        />
        <button
          onClick={(e) => reset(e)}
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading ? null : "Send Code"}
          {loading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </button>
        <p style={{ marginTop: 40 }} className="text-center">
          <Link to="/signin">Back to Sign In</Link>
        </p>
      </AuthForm>
    );
  }

  return (
    <>
      <AuthForm title="Confirm Password Update" error={formValues.error}>
        <Email
          handleUpdate={handleUpdate}
          email={formValues.email}
          autoComplete="on"
        />
        <ConfirmationCode
          handleUpdate={handleUpdate}
          email={formValues.auth_code}
          autoComplete="off"
        />
        <Password
          handleUpdate={handleUpdate}
          password={formValues.password}
          autoComplete="on"
        />
        <p style={{ marginTop: 40 }} className="text-center">
          <Link to="/signin">Back to Sign In</Link>
        </p>
        <button
          onClick={(e) => confirmReset(e)}
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading ? null : "Confirm Reset"}
          {loading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </button>
      </AuthForm>
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
          onClick={(e) => reset(e)}
          disabled={loading}
        >
          Resend Code
        </button>
      </div>
    </>
  );
};

export default Reset;
