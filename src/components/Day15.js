import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  ChakraProvider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const [news, setNews] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // Make an API request to fetch news articles
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=c65ade5e1b864061ad7ad09396eb3232"
      )
      .then((response) => {
        const articles = response.data.articles;
        setNews(articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <ChakraProvider>
      <Box p={4}>
        <Slider {...settings}>
          {news.map((article, index) => (
            <Card
              key={index}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              className="d-flex"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "400px" }}
                src={article.urlToImage}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{article.title}</Heading>

                  <Text py="2">{article.description}</Text>
                  <Text>Source: {article.source?.name || "Unknown"}</Text>
                  <Text>
                    Published at:{" "}
                    {new Date(article.publishedAt).toLocaleString()}
                  </Text>
                </CardBody>

                <CardFooter>
                  <a className="btn btn-primary" href={article.url} variant="solid" colorScheme="blue">
                    Read More
                  </a>
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </Slider>
      </Box>
    </ChakraProvider>
  );
};

export default CarouselComponent;
