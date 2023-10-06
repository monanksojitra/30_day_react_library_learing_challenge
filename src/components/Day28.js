import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Day28 = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new ApolloClient({
          uri: "http://localhost:4000/graphql", // Replace with your GraphQL API endpoint
          cache: new InMemoryCache(),
        });

        // Query to fetch all posts
        const postQuery = gql`
          query {
            getAllPosts {
              id
              title
              body
              author {
                id
                username
                email
              }
            }
          }
        `;

        const postResponse = await client.query({ query: postQuery });

        setPostData(postResponse.data.getAllPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-2">
      {/* Display Post Data as Bootstrap Cards */}
      <h2>Post Data</h2>
      <div className="row">
        {postData &&
          postData.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <p className="card-text">Author: {post.author.username}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Day28;
