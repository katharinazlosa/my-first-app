import { ChangeEvent, useEffect, useState } from "react";
import { PostType } from "./types";
import { v4 as uuidv4 } from "uuid";

const newPostObj: PostType = {
  id: "2",
  title: "Swiss",
  description: "Ovo je moje predobro putovanje u Švicarsku, bilo je odlično!",
  hashtags: ["swiss", "travel", "hollidays", "influensanje"],
  img_url:
    "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
};

const Instagram = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [inputText, setInputText] = useState("");
  const [modal, setModal] = useState<boolean>();
  const [like, setLike] = useState(false);

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
        setModal(false);
      })
      .catch((err) => console.log(err));
  };

  const handlePost = () => {
    const titleValue = document.querySelector("#title") as HTMLInputElement;
    const descValue = document.querySelector("#desc") as HTMLTextAreaElement;
    const imgValue = document.querySelector("#url") as HTMLInputElement;
    const hashValue = document.querySelector("#hash") as HTMLInputElement;

    const newPost: PostType = {
      id: uuidv4(),
      title: titleValue.value,
      description: descValue.value,
      hashtags: [hashValue.value],
      img_url: imgValue.value,
    };

    createPosts(newPost);
    setModal(false);
  };

  const deletePost = (id: string) => {
    fetch("http://localhost:3000/instagram/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        getPosts();
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div>
      <div className="main-title">
        <h1>Instagram</h1>
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/nolan/64/instagram-new.png"
          alt="instagram-new"
        />
      </div>
      <div className="close" onClick={() => setModal(false)}></div>
      <div className="modal-container">
        {modal ? (
          <>
            <div className="modal-instagram">
              <div className="input-header">
                <h4>Creating new post...</h4>
                <button className="modal-close" onClick={() => setModal(false)}>
                  X
                </button>
              </div>
              <div className="input-field">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" placeholder="title"></input>
              </div>
              <div className="input-field">
                <label htmlFor="title">Description:</label>
                <input type="text" id="desc" placeholder="description"></input>
              </div>
              <div className="input-field">
                <label htmlFor="title">Hashtags:</label>
                <input type="text" id="hash" placeholder="hashtag"></input>
              </div>
              <div className="input-field">
                <label htmlFor="title">Image url:</label>
                <input type="text" id="url" placeholder="img url"></input>
              </div>
              <button className="input-field__btn" onClick={() => handlePost()}>
                Post
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="instagram-container">
        <div>
          <div className="create-post">
            <h3>Create new post</h3>
            <button className="create-post__btn" onClick={() => setModal(true)}>
              Add new post
            </button>
          </div>
        </div>
        {posts.map((post: PostType) => {
          return (
            <>
              <div className="picture-container" key={post.id}>
                <div className="picture-container__header">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="picture-container__header__img"
                  ></img>
                  <h4 className="picture-container__header__title">
                    {post.title}
                  </h4>
                  <img
                    className="picture-container__header__bin-img"
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios/50/delete--v1.png"
                    alt="delete--v1"
                    onClick={() => deletePost(post.id)}
                  />
                </div>
                <div className="picture-container__article">
                  <img src={post.img_url}></img>
                </div>
                <div className="picture-container__footer">
                  <div>
                    {" "}
                    {like ? (
                      <img
                        className="
                picture-container__footer__img"
                        onClick={handleLike}
                        width="50"
                        height="50"
                        src="https://img.icons8.com/emoji/48/heart-suit.png"
                        alt="like--v1"
                      />
                    ) : (
                      <img
                        className="
                      picture-container__footer__img"
                        onClick={handleLike}
                        width="48"
                        height="48"
                        src="https://img.icons8.com/ios/50/000000/like--v1.png"
                        alt="heart-suit"
                      />
                    )}
                  </div>

                  <h3>{"#" + post.hashtags}</h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Instagram;
