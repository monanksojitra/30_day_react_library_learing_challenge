import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const queryClient = new QueryClient();

const Data = () => {
  const header = {
    Origin: "http://localhost:3000",
    "X-Requested-With": "XMLHttpRequest",
  };

  const fetchData = async (url) => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      headers: header,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const fetchGameData = async () => {
    const [
      gamesListData,
      gamesByPlatformData,
      gamesSortedData,
      gamesByPlatformCategorySortedData,
      filterGamesData,
      gameDetailsData,
    ] = await Promise.all([
      fetchData("https://www.freetogame.com/api/games"),
      fetchData("https://www.freetogame.com/api/games?platform=pc"),
      fetchData("https://www.freetogame.com/api/games?sort-by=alphabetical"),
      fetchData(
        "https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date"
      ),
      fetchData(
        "https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc"
      ),
      fetchData("https://www.freetogame.com/api/game?id=452"),
    ]);

    return {
      gamesListData,
      gamesByPlatformData,
      gamesSortedData,
      gamesByPlatformCategorySortedData,
      filterGamesData,
      gameDetailsData,
    };
  };

  const { data, isLoading, isError } = useQuery("gamesData", fetchGameData);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <h3>Games List</h3>
      <Slider {...settings}>
        {data.gamesListData.map((data, index) => (
          <CardComponent key={index} data={data} />
        ))}
      </Slider>
      {/* <Slider {...settings}>
        {data.gamesByPlatformData.map((data, index) => (
          <CardComponent key={index} data={data} />
        ))}
      </Slider> */}
      <h3>Games by Platform and Category</h3>
      <Slider {...settings}>
        {data.gamesByPlatformCategorySortedData.map((data, index) => (
          <CardComponent key={index} data={data} />
        ))}
      </Slider>
      {/* <Slider {...settings}>
        {data.gamesSortedData.map((data, index) => (
          <CardComponent key={index} data={data} />
        ))}
      </Slider>
      <Slider {...settings}>
        {data.filterGamesData.map((data, index) => (
          <CardComponent key={index} data={data} />
        ))}
      </Slider> */}
    </div>
  );
};

export default function Day17() {
  return (
    <QueryClientProvider client={queryClient}>
      <Data />
    </QueryClientProvider>
  );
}

const CardComponent = ({ key, data }) => {
  return (
    <Card sx={{ maxWidth: 330, marginInline: 2 }} key={key}>
      <CardActionArea href={data.game_url} target="_blank">
        <CardMedia
          component="img"
          height="200"
          image={data.thumbnail}
          alt={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.short_description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Developer: {data.developer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Publisher: {data.publisher}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genre: {data.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Platform: {data.platform}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release Date: {data.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea href={data.freetogame_profile_url} target="_blank">
        <Button size="small" color="primary">
          View on FreeToGame
        </Button>
      </CardActionArea>
    </Card>
  );
};
