import { useState, useEffect } from "react";

const x = "https://tiny-blue-nematode-robe.cyclic.app/";

const useLogin = (email, password) => {
  let data = { email, password };
  fetch(`${x}/users/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((user) => {
      alert(user.msg);
      localStorage.setItem("set_token", JSON.stringify(user));
    });
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div id="signup">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={() => useLogin(email, password)}>Login</button>
      </div>
    </>
  );
};
export default Login;
