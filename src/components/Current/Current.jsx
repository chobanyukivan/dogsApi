import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CurrentContent from './CurrentContent';
import './Current.css';

class Current extends Component {
    onButtonClick = () => {
      const { getCurrentBreed, breed } = this.props;
      getCurrentBreed(breed);
    };

    render() {
      const { breed, match } = this.props;
      return (
        <Fragment>
          <div className="current-title-wrap">
            <h2 className="title__h2-current">Порода: {breed}</h2>
            <Button variant="contained" color="primary" onClick={this.onButtonClick}>Еще</Button>
          </div>
          <div className="current-content-wrap">
            <CurrentContent breed={breed} match={match} />
          </div>
        </Fragment>
      );
    }
}

Current.propTypes = {
  getCurrentBreed: PropTypes.func.isRequired,
  breed: PropTypes.string.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      topicId: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Current;
