import { useState } from "react";
import { sliderItems } from "../data";
import { ArrowBackIos, ArrowForwardIos} from "@mui/icons-material"
import "../styles/SliderStyle/Slider.scss";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : sliderItems.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="slider">
      <div
        className="slider_items"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderItems.map((slide, index) => (
          <div className="slider_items_slide" key={index}>
            <div className="slider_items_slide_img">
              <img src={slide.img} alt={slide.alt} />
            </div>
            <div className="slider_items_slide_text">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <a>SHOP NOW</a>
            </div>
          </div>
        ))}
      </div>

      <button className="slider_button_prev" onClick={handlePrev}>
        <ArrowBackIos />
      </button>
      <button className="slider_button_next" onClick={handleNext}>
        <ArrowForwardIos />
      </button>
    </div>
  );
};

export default Slider;
