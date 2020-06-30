import React, { useState } from 'react';
import './index.css'

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
      console.log(slideWidth() * images.length)
      setTranslateValue(-(slideWidth() * (images.length - 1)));
      return;
    }

    // this.setState(prevState => ({
    //   currentIndex: prevState.currentIndex - 1,
    //   translateValue: prevState.translateValue + this.slideWidth()
    // }))
    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue - 1 + slideWidth());
  }

  const goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (currentIndex === images.length - 1) {
      // return this.setState({
      //   currentIndex: 0,
      //   translateValue: 0
      // })
      console.log(translateValue);
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
  console.log('logging images', images)
  return (
    <div className="slider">

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