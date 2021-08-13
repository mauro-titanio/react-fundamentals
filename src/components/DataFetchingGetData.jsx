/*

import axios from "axios";
import { useEffect, useState } from "react";
*/
export default function DataFetchingGetData() {
/*
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        console.log(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };
    fetchPost();
  }, []);
*/
  return (
    <div>
       <h1>Data Fetching - Get Data</h1>
       <small>toggle comment</small>
     { /*
      {loading && "Loading..."}
      {error && "Oooops, could not fetch post, please try again later"}
      {data &&
        data.map((post) => {
          const { id, title, body } = post;
          return (
            <article key={id} className="text-start">
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
            </article>
          );
        })}
        */}
    </div>
  );
}
