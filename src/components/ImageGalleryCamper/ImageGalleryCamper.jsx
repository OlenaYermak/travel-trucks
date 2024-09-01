import React, { useState } from "react";
import Modal from "react-modal";
import Image from "../Image/Image.jsx";
import style from "./ImageGalleryCamper.module.css";

Modal.setAppElement("#root");

const ImageGalleryCamper = ({ gallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
    setSelectedImage(
      gallery[(currentIndex - 1 + gallery.length) % gallery.length].original
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(gallery[(currentIndex + 1) % gallery.length].original);
  };

  return (
    <div className={style.gallery}>
      {gallery.map(({ thumb, original }, index) => (
        <div key={index} className={style.thumbnail}>
          <Image
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className={style.image}
            onClick={() => openModal(original, index)}
          />
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={style.modal}
        overlayClassName={style.overlay}
      >
        <button onClick={closeModal} className={style.closeButton}>
          &times;
        </button>
        {selectedImage && (
          <div className={style.modalContent}>
            <button className={style.navButton} onClick={goToPrevious}>
              &lt;
            </button>
            <img
              src={selectedImage}
              alt="Full Size"
              className={style.fullImage}
            />
            <button className={style.navButton} onClick={goToNext}>
              &gt;
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageGalleryCamper;
