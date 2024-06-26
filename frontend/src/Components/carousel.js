import React, { useEffect, useRef, useState } from 'react';
import '../Components/carousel.css';

const Carousel = () => {
  const carouselRef = useRef(null);
  const cellCount = 9;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cellCount);
    }, 2500);

    return () => clearInterval(interval);
  }, [cellCount]);

  useEffect(() => {
    const angle = currentIndex / cellCount * -360;
    carouselRef.current.style.transform = `translateZ(288px) rotateY(${angle}deg)`;
  }, [currentIndex, cellCount]);

  return (
    <div className="wrapper">
      <div className="carousel" ref={carouselRef}>
        <div className="cell"><img src="https://www.airport-technology.com/wp-content/uploads/sites/14/2022/01/shutterstock_758602234-min-scaled-e1641297696653.jpg" alt="image1" /></div>
        <div className="cell"><img src="https://www.indextap.com/blog/wp-content/uploads/2024/04/Pune-Airport-International.jpeg" alt="image2" /></div>
        <div className="cell"><img src="https://housing.com/news/wp-content/uploads/2023/11/vellore-airport-f-compressed-686x400.jpg" alt="image3" /></div>
        <div className="cell"><img src="https://www.airport-technology.com/wp-content/uploads/sites/14/2022/01/shutterstock_758602234-min-scaled-e1641297696653.jpg" alt="image4" /></div>
        <div className="cell"><img src="https://www.indextap.com/blog/wp-content/uploads/2024/04/Pune-Airport-International.jpeg" alt="image5" /></div>
        <div className="cell"><img src="https://housing.com/news/wp-content/uploads/2023/11/vellore-airport-f-compressed-686x400.jpg" alt="image6" /></div>
        <div className="cell"><img src="https://www.airport-technology.com/wp-content/uploads/sites/14/2022/01/shutterstock_758602234-min-scaled-e1641297696653.jpg" alt="image7" /></div>
        <div className="cell"><img src="https://www.indextap.com/blog/wp-content/uploads/2024/04/Pune-Airport-International.jpeg" alt="image8" /></div>
        <div className="cell"><img src="https://housing.com/news/wp-content/uploads/2023/11/vellore-airport-f-compressed-686x400.jpg" alt="image9" /></div>
      </div>
    </div>
  );
}

export default Carousel;
