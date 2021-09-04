import React from 'react';
import bs from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ getNewPage }) => {
  return (
    <button
      className={bs.Button}
      type="button"
      data-action="load-more"
      onClick={getNewPage}
    >
      Show more
    </button>
  );
};
Button.propTypes = {
  getNewPage: PropTypes.func.isRequired,
};
export default Button;
