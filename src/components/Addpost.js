import { useState, useEffect } from "react";
const x = "https://tiny-blue-nematode-robe.cyclic.app/";
let { token } = JSON.parse(localStorage.getItem("set_token")) || [];

const useAdd = (title, body, device, no_of_comments) => {
  let data = { title, body, device, no_of_comments };
  console.log(data);
  fetch(`${x}/posts/add`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: token },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => {
      alert(data.msg);
    });
};

const Addpost = () => {
  const [title, settitle] = useState("");
  const [body, setBody] = useState("");
  const [device, setDevice] = useState("");
  const [no_of_comments, setNo_of_comments] = useState("");

  return (
    <>
      <div id="add">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setDevice(e.target.value);
          }}
        >
          <option value="">select device</option>
          <option value="mobile">mobile</option>
          <option value="laptop">laptop</option>
          <option value="pc">pc</option>
        </select>
        <input
          type="number"
          placeholder="no_of_comments"
          value={no_of_comments}
          onChange={(e) => {
            setNo_of_comments(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={() => useAdd(title, body, device, no_of_comments)}>
          Add post
        </button>
      </div>
    </>
  );
};
export default Addpost;
