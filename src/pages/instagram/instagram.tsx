import { ChangeEvent, useEffect, useState } from "react";
import { PostType } from "./types";

const Instagram = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [inputText, setInputText] = useState("");
  const [modal, setModal] = useState<boolean>();

  const getPosts = () => {
    fetch("http://localhost:3000/instagram")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  };

  const createPosts = (obj: PostType) => {
    fetch("http://localhost:3000/instagram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        getPosts();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <>
      <h1>Instagram</h1>
      <div>
        <div className="">
          <h3>Create post</h3>
          <button className="instagram-btn">
            {/* onClick={setModal(true)} */}+
          </button>
          {/* {modal ? ( */}
          <div className="modal-instagram">
            {/* onClick={setModal(false)} */}
            <h4>Dodaj novi post</h4>
            <form id="form" method="post">
              <input
                type="text"
                id="name"
                placeholder="title"
                value={inputText}
                onChange={handleChange}
              ></input>
              <br></br>
              <input
                type="text"
                id="desc"
                placeholder="description"
                value={inputText}
                onChange={handleChange}
              ></input>
              <br></br>
              <input
                type="text"
                id="hashtags"
                placeholder="hashtags"
                value={inputText}
                onChange={handleChange}
              ></input>
              <br></br>
              <input
                type="text"
                id="url"
                placeholder="img url"
                value={inputText}
                onChange={handleChange}
              ></input>
              <br></br>
            </form>
            {/* <button onClick={createPosts({ inputText })}></button> */}
            <div>
              <h3>The data is successfully posted.</h3>
            </div>
          </div>
          {/* ) : (
            <></>
          )} */}
        </div>
      </div>
      {posts.map((post: PostType) => {
        return (
          <>
            <div className="picture-container">
              <div className="picture-container__header">
                <img src=""></img>
                <h4 className="picture-container__header__title">
                  {post.title}
                </h4>
                <h4 className="picture-container__header__title">
                  {post.description}
                </h4>
              </div>
              <div className="picture-container__article">
                <img src={post.img_url}></img>
              </div>
              <div className="picture-container__footer">
                <h3>{post.hashtags}</h3>
                <h3>Tu ću staviti srce ikonu</h3>
              </div>
            </div>
            {/* <button onClick={createPosts()}>Post</button> */}
          </>
        );
      })}
    </>
  );
};

export default Instagram;
