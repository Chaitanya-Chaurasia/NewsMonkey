import React from "react";

function LoginPage(props) {
  function validateForm(e) {
    // prevent default submition of form
    e.preventDefault();
    console.log("Method called");

    // set password,email as a state
    const email = document.getElementById("exampleInputEmail1");
    const password = document.getElementById("exampleInputPassword1");

    if (email.value === "1@g.com" && password.value === "1234") {
      console.log("credential validated!!");
      props.setLogin(true);
      props.setUrl("login-true");
      email.value = "";
      password.value = "";
    } else {
      console.log("credential not validated");
      props.setLogin(false);
      props.setUrl("/");
    }
  }

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />

        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={validateForm}>
        Submit
      </button>
    </div>
  );
}

export default LoginPage;
