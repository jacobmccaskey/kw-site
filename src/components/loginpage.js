import React, { useState, useEffect } from "react";
import Tutorials from "./tutorials";

const useForm = () => {
  const [effectValue, setValue] = useState(null);

  const [value, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    fetch("https://api.kwtctech.com/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((data) => {
        data.access === "granted" ? setValue(true) : setValue(false);
      });
    // value.password === "password" ? setValue(true) : setValue(null);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((value) => ({
      ...value,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleChange,
    handleSubmit,
    value,
    effectValue,
  };
};

export default function TutorialLogin() {
  const { handleChange, handleSubmit, effectValue } = useForm();
  const [showTutorials, setShow] = useState(false);

  //uses conditional so setShow is not changed on initial render of page. More robust, secure way. Still hackable with DevTools. Free information for all!!!
  useEffect(() => {
    if (effectValue === false && showTutorials === false) {
      return setShow(false);
    }
    if (effectValue === true && showTutorials === false) {
      return setShow(true);
    }
  }, [effectValue, showTutorials]);

  return (
    <React.Fragment>
      <div
        className="loginpage"
        style={
          showTutorials !== true ? { display: "relative" } : { display: "none" }
        }
      >
        <div className="mt-4 container border p-4 rounded login-form-bg">
          <form name="login" onSubmit={handleSubmit}>
            <label>
              Password:
              <br />
              <input
                type="password"
                name="password"
                className="rounded"
                onChange={handleChange}
              />
            </label>
            <div className="container-sm">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="container"
        style={
          showTutorials === true ? { display: "block" } : { display: "none" }
        }
      >
        <Tutorials />
      </div>
    </React.Fragment>
  );
}
