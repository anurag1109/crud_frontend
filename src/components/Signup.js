import { useState, useEffect } from "react";

const x = "https://tiny-blue-nematode-robe.cyclic.app/";

const useSignup = (name, email, age, gender, city, password) => {
  let data = { name, email, age, gender, city, password };
  console.log(email);
  fetch(`${x}/users/register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => alert(data.msg));
};

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setcity] = useState("");

  return (
    <>
      <form id="signup">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {console.log(email)}
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
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
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
      </form>
      <div>
        <button
          onClick={() => useSignup(name, email, age, gender, city, password)}
        >
          Signup
        </button>
      </div>
    </>
  );
};
export default Signup;
