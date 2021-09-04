import React from 'react';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ elem, getImgForModal }) => {
  const { webformatURL, tags } = elem;

  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.image}
        onClick={() => getImgForModal({ elem })}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  elem: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  getImgForModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
