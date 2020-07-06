import React, { useState } from 'react';
import Modal from 'react-barebones-modal'
import './src/index.css'

const Slider = ({
  images: _images,
  minHeight
}) => {
  const [images, setImages] = useState(_images || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [showModal, setShowModal] = useState(false);

  if (showModal) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

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

  const Slide = ({ image, onClickHandler, applyMinHeight }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%',
      height: 'auto',
      width: '100%'
    }

    if (applyMinHeight && minHeight) styles['minHeight'] = minHeight;
    return <div className="slide" style={{ width: '100%', position: 'relative' }}>
      <div onClick={onClickHandler ? onClickHandler : null} style={styles}>
        <img src={image} style={{ visibility: 'hidden', width: '100%' }} />
      </div>
    </div>
    // return <div style={styles}><img onClick={onClickHandler ? onClickHandler : null} src={image} /></div>
    // return <></>
    // return <div className="slide" onClick={onClickHandler ? onClickHandler : null} style={styles} />
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
        customClassName={`w80% mawa bgc-t t50 posa ofh`}
        show={showModal}>
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            images.map((image, i) => (
              <Slide applyMinHeight key={`modal-${i}`} image={image} />
            ))
          }
        </div>
      </Modal>
      <div className="slider-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
        {
          images.map((image, i) => (
            <Slide onClickHandler={() => setShowModal(true)} key={i} image={image} />
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