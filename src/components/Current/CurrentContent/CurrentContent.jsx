import React from 'react';
import PropTypes from 'prop-types';

const CurrentContent = ({ breedPhotos }) => {
  if (breedPhotos) {
    return (
      breedPhotos.map((item) => {
        const key = item.slice(item.lastIndexOf('/') + 1, item.lastIndexOf('.'));
        return (
          <div key={key} className="current-content-item-wrap">
            <img
              className="current-content__item"
              src={item}
              alt=""
            />
          </div>
        );
      })
    );
  }
  return false;
};

CurrentContent.propTypes = {
  breedPhotos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};
export default CurrentContent;
