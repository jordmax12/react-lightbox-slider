import React, { useState } from 'react';
import Modal from '@npmpackageschicago/react-barebones-modal'
import './src/index.css'

const Slider = ({
  images: _images
}) => {
  const [images, setImages] = useState(_images || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      setTranslateValue(-(slideWidth() * (images.length - 1)));
      return;
    }

    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue - 1 + slideWidth());
  }

  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -(slideWidth()))
  }

  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
  }


  const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }


  const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div >
    );
  }
  return (
    <div className="slider">
      <Modal
        show={true} />
      <div className="slider-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
        {
          images.map((image, i) => (
            <Slide key={i} image={image} />
          ))
        }
      </div>

      <LeftArrow
        goToPrevSlide={goToPrevSlide}
      />

      <RightArrow
        goToNextSlide={goToNextSlide}
      />
    </div>
  );
}



export default Slider