import { useState, useEffect } from "react";
import "../../styles/components/fonctionnalities/carousel.scss";

export default function Carousel({ picture }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % picture.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [picture.length]);

  return (
    <div className="carousel">
      <img src={picture[index]} alt={`Numéro ${index + 1}`} />
    </div>
  );
}
