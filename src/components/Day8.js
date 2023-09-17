import React from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

const imageCarouselState = atom({
  key: "imageCarouselState",
  default: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTXZ1pCUzxSN2DBzXCHoR-HWNQ7s2w9WP5SLssipiyaMHS0XS49ICOW3JLfjJbcrlSkA&usqp=CAU",
    "https://www.freecodecamp.org/news/content/images/2022/02/fcc-recoil-article.png",
    "https://i.ytimg.com/vi/1Ver_JWEWoQ/maxresdefault.jpg",
    "https://res.cloudinary.com/practicaldev/image/fetch/s--GvywxuYA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/3487nww4xesn8cjrj1tt.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlY5iXtlxzhMrZHOaQUuPFB7FHxnMQNByhdxBlsjUtr5txs2ZePkqEjUzvOsHpFSt6lKs&usqp=CAU",
  ],
});

function ImageCarousel() {
  const [images] = useRecoilState(imageCarouselState);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="mx-auto w-50 h-75">
      <Carousel
        activeIndex={currentIndex}
        onSelect={() => {}}
        interval={null} // Disable automatic sliding
      >
        {images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <Card>
              <Card.Img variant="top" src={imageUrl} alt={`Image ${index}`} />
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="mt-3 d-flex justify-content-evenly">
        <Button variant="secondary" onClick={previousImage}>
          Previous
        </Button>
        <Button variant="primary" onClick={nextImage}>
          Next
        </Button>
      </div>
    </div>
  );
}

function Day8() {
  return (
    <RecoilRoot>
      <ImageCarousel />
    </RecoilRoot>
  );
}

export default Day8;
