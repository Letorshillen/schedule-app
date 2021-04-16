import React from "react";

const LogIn = (props) => {
  return props.pending ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <h1>Log In</h1>
      <button onClick={props.login}>mit Google einloggen</button>
    </div>
  );
};

export default LogIn;
