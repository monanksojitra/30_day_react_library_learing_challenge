import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const Example = () => {
  const gamesListQuery = useQuery("gamesList", async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games",
        {
          headers: {
            // Add the required headers here
            Origin: "http://localhost:3000",
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching gamesList:", error);
      throw error;
    }
  });
  console.log(gamesListQuery);

  const gamesByPlatformQuery = useQuery("gamesByPlatform", () =>
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games?platform=pc"
    ).then((response) => response.json())
  );
  // // const gamesListQuery = useQuery("gamesList", () =>
  // //   axios.get("https://www.freetogame.com/api/games")
  // // );
  // // console.log(gamesListQuery);
  // // const gamesByPlatformQuery = useQuery("gamesByPlatform", () =>
  // //   axios.get("https://www.freetogame.com/api/games?platform=pc")
  // // );
  // // const gamesByCategoryQuery = useQuery("gamesByCategory", () =>
  // //   axios.get("https://www.freetogame.com/api/games?category=shooter")
  // );
  const gamesSortedQuery = useQuery("gamesSorted", () =>
    axios.get("https://www.freetogame.com/api/games?sort-by=alphabetical")
  );

  const gamesByPlatformCategorySortedQuery = useQuery(
    "gamesByPlatformCategorySorted",
    () =>
      axios.get(
        "https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date"
      )
  );

  const filterGamesQuery = useQuery("filterGames", () =>
    axios.get(
      "https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc"
    )
  );

  const gameDetailsQuery = useQuery("gameDetails", () =>
    axios.get("https://www.freetogame.com/api/game?id=452")
  );

  if (
    gamesListQuery.isLoading ||
    gamesByPlatformQuery.isLoading ||
    gamesByCategoryQuery.isLoading ||
    gamesSortedQuery.isLoading ||
    gamesByPlatformCategorySortedQuery.isLoading ||
    filterGamesQuery.isLoading ||
    gameDetailsQuery.isLoading
  ) {
    return <div>Loading...</div>;
  }

  if (
    gamesListQuery.isError ||
    gamesByPlatformQuery.isError ||
    gamesByCategoryQuery.isError ||
    gamesSortedQuery.isError ||
    gamesByPlatformCategorySortedQuery.isError ||
    filterGamesQuery.isError ||
    gameDetailsQuery.isError
  ) {
    return <div>Error loading data</div>;
  }

  const gamesListData = gamesListQuery.data.data;
  const gamesByPlatformData = gamesByPlatformQuery.data.data;
  const gamesByCategoryData = gamesByCategoryQuery.data.data;
  const gamesSortedData = gamesSortedQuery.data.data;
  const gamesByPlatformCategorySortedData =
    gamesByPlatformCategorySortedQuery.data.data;
  const filterGamesData = filterGamesQuery.data.data;
  const gameDetailsData = gameDetailsQuery.data.data;

  return (
    <div className="container">
      <h1>Games List</h1>
      <div className="scrollable-container">
        <div className="row">
          {gamesListData.map((game) => (
            <div className="col-4 mb-4" key={game.id}>
              <div className="card">
                <img
                  src={game.thumbnail}
                  className="card-img-top"
                  alt={game.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-text">{game.description}</p>
                  <a href={game.link} className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
