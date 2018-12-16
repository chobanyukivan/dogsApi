import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentContent from './CurrentContent.jsx';
import LoadingHOC from '../../HOC/loadingHOC';
import { getCurrentBreed } from '../../../redux/Actions/dogs';

const AppComponent = LoadingHOC('isFetchingPhotos')(CurrentContent);

class ContainerCurrentContent extends Component {
    state = {
      path: '',
    };

    componentDidMount() {
      const { getCurrentBreedAction, breed } = this.props;
      getCurrentBreedAction(breed);
      this.setState({ path: breed });
    }

    componentDidUpdate() {
      const { getCurrentBreedAction, breed } = this.props;
      const { path } = this.state;
      if (path !== breed) {
        this.setState({
          path: breed,
        });
        getCurrentBreedAction(breed);
      }
    }

    render() {
      const { breedPhotos, isFetchingPhotos, errorPhotos } = this.props;
      return (
        <AppComponent
          isFetchingPhotos={isFetchingPhotos}
          error={errorPhotos}
          breedPhotos={breedPhotos}
        />
      );
    }
}

const mapStoreToProps = store => ({
  isFetchingPhotos: store.dogsReducer.isFetching.Photos,
  breedPhotos: store.dogsReducer.breed.Photos,
  errorPhotos: store.dogsReducer.error.Photos,
});

const mapDispatchToProps = dispatch => ({
  getCurrentBreedAction: (breed) => {
    dispatch(getCurrentBreed(breed));
  },
});

ContainerCurrentContent.propTypes = {
  getCurrentBreedAction: PropTypes.func.isRequired,
  isFetchingPhotos: PropTypes.bool.isRequired,
  breed: PropTypes.string.isRequired,
  errorPhotos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  breedPhotos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStoreToProps, mapDispatchToProps)(ContainerCurrentContent);
