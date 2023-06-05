// import { ChangeEvent, useState } from "react";
// import createPost from "./instagram";

// const InstagramModal = () => {
//   const [inputText, setInputText] = useState("");
//   const [modal, setModal] = useState<boolean>();

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputText(e.target.value);
//   };
//   return (
//     <>
//       {modal ? (
//         <div className="modal-instagram" onClick={setModal(false)}>
//           <h4>Dodaj novi post</h4>
//           <form id="form" method="post">
//             <input
//               type="text"
//               id="name"
//               placeholder="title"
//               value={inputText}
//               onChange={handleChange}
//             ></input>
//             <br></br>
//             <input
//               type="text"
//               id="desc"
//               placeholder="description"
//               value={inputText}
//               onChange={handleChange}
//             ></input>
//             <br></br>
//             <input
//               type="text"
//               id="hashtags"
//               placeholder="hashtags"
//               value={inputText}
//               onChange={handleChange}
//             ></input>
//             <br></br>
//             <input
//               type="text"
//               id="url"
//               placeholder="img url"
//               value={inputText}
//               onChange={handleChange}
//             ></input>
//             <br></br>
//           </form>
//           <button onClick={createPosts()}></button>
//           <div>
//             <h3>The data is successfully posted.</h3>
//           </div>
//         </div>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };

// export default InstagramModal;
