import React from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContainerCurrentBreed from '../CurrentBreed';
import './BreedList.css';

const BreedList = ({ match, breedList }) => (
  <div>
    <div className="breeds-wrap">
      <div className="breeds-wrap-left">
        <h2 className="breeds-title">Породы</h2>
        <div className="breeds__links">
          {Object.keys(breedList).map(item => (
            <div key={item}>
              <Link to={`${match.url}/${item}`}>{item}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="breeds-wrap-right">
        <Route path={`${match.path}/:topicId`} component={ContainerCurrentBreed} />
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
