import { useEffect, useState } from "react";

const x = "https://tiny-blue-nematode-robe.cyclic.app/";
let { token } = JSON.parse(localStorage.getItem("set_token")) || [];

const Post = () => {
  const [post, setPost] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(`${x}/posts`, {
      headers: { authorization: token },
    })
      .then((data) => data.json())
      .then((data) => {
        setPost(data);
      });
  }

  const PostCard = (item) => {
    return (
      <div className="card">
        <h1>Title:{item.title}</h1>
        <h2>body:{item.body}</h2>
        <h3>Device:{item.device}</h3>
        <h3>No of comments:{item.no_of_comments}</h3>
        <button
          onClick={() => {
            usedeletePost(item);
          }}
        >
          Delete
        </button>
        <a href={`/update/${item._id}`}>
          <button>update</button>
        </a>
      </div>
    );
  };

  const usedeletePost = (user) => {
    console.log(user);
    fetch(`${x}/posts/delete/${user._id}`, {
      method: "DELETE",
      headers: { authorization: token },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        fetchData();
      });
  };

  return !post ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>No of posts:{post.length}</h1>
      <div id="post">
        {post.map((item) => {
          return <PostCard {...item} />;
        })}
      </div>

      <a href="/addpost">
        <button>Add post</button>
      </a>
    </>
  );
};
export default Post;
