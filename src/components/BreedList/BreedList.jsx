import React from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContainerCurrent from '../Current';
import './BreedList.css';

const BreedList = ({ match, breedList }) => (
  <div>
    <div className="breeds-wrap">
      <div className="breeds-wrap-l">
        <h2 className="title__h2">Породы</h2>
        <div className="breeds__links">
          {Object.keys(breedList).map(item => (
            <div key={item}>
              <Link to={`${match.url}/${item}`}>{item}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="breeds-wrap-r">
        <Route path={`${match.path}/:topicId`} component={ContainerCurrent} />
      </div>
    </div>
  </div>
);

BreedList.propTypes = {
  breedList: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default BreedList;
