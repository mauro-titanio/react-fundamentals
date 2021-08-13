import { useState } from "react";

export default function Forms() {

    const defaultFormData = {
        title: "",
        body: ""
    }
  const [formData, setFormData] = useState(defaultFormData);

  const { title, body } = formData;
  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

  const onSumbit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData)
  };

  return (
    <div>
      <h1>Forms</h1>
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
    </div>
  );
}
