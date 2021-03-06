import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentBreed from './CurrentBreed';
import { getCurrentBreed } from '../../redux/Actions/dogs';


class ContainerCurrentBreed extends Component {
  render() {
    const { getCurrentBreedAction, match } = this.props;
    return (
      <CurrentBreed
        getCurrentBreed={getCurrentBreedAction}
        match={match}
        breed={match.params.topicId}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentBreedAction: (breed) => {
    dispatch(getCurrentBreed(breed));
  },
});

ContainerCurrentBreed.propTypes = {
  getCurrentBreedAction: PropTypes.func.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      topicId: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(() => ({ }), mapDispatchToProps)(ContainerCurrentBreed);
