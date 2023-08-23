import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css"; 
import '../assets/styles/custom.css';


const carouselData = [
    { id: 1, imageUrl: "/images/carousel/slide1.png", altText: "STHIL" },
    { id: 2, imageUrl: "https://i.imgur.com/vlQHqPb.png", altText: "purina beggin available" },
    // Add more slides as needed
  ];

  const Carousel = () => {
    const flickityOptions = {
        draggable: true,
        autoPlay: 3500, 
        wrapAround: true,
        pageDots: false,
        pauseAutoPlayOnHover: false, // Disable pausing on hover
    };
  
    return (
      <div className="carousel-container">
        <Flickity
          className={"carousel"} 
          elementType={"div"} 
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate={true}
        >
          {carouselData.map((slide) => (
            <div className="carousel-cell" key={slide.id}>
              <img src={slide.imageUrl} alt={slide.altText} />
            </div>
          ))}
        </Flickity>
      </div>
    );
  };
  
  export default Carousel;
