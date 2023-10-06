import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();
const NewsList = () => {
  const { data, error, isLoading } = useQuery("news", fetchNews);

  async function fetchNews() {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=c65ade5e1b864061ad7ad09396eb3232"
    );
    return response.data.articles;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h4>Latest News</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {data.map((article) => {
          return (
            <div className="col">
              <div className="card mb-3">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                  height={250}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Published at{" "}
                      {new Date(article.publishedAt).toLocaleString()}
                    </small>
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Day29 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsList />
    </QueryClientProvider>
  );
};

export default Day29;
