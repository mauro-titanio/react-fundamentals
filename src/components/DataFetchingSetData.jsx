import axios from "axios";
import { useState } from "react";

export default function DataFetchingSetData() {
  const defaultFormData = {
    title: "",
    body: "",
    userId: 1,
  };
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

  const onSumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log(response);
      setSucces(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setFormData(defaultFormData);
  };

  return (
    <div>
      <h1>Data Fetching - Set Data</h1>
      <p>Create a post</p>
      <form onSubmit={onSumbit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <button type="submit">Upload post</button>
      </form>
      {error && <p>Oops, could not upload the post</p>}
      {succes && <p>Post upload has succeeded</p>}
    </div>
  );
}
