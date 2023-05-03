import React, { useContext } from "react";
import { AppContext } from "../App";

const FileForm = () => {
  const { latestPost, setLatestPost } = useContext(AppContext);

  const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData()

        data.append('post[title]', event.target.title.value)
        data.append('post[body]', event.target.body.value)
        data.append('post[image]', event.target.image.files[0])
        submitToApi(data)
  }

  function submitToApi(data){
    fetch('http://localhost:3000/posts',{
        method: "POST",
        body: data
    }).then(r => r.json())
    .then(data => {
        setLatestPost(data.image_url)
    })
    .catch((error)=>console.error(error) )
  }
  return (
    <div>
      <h1>File Form</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="body">Body</label>
        <input type="text" name="body" id="body" />
        <br />
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default FileForm;
