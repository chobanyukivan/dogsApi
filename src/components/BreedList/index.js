import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BreedList from './BreedList';
import { getBreeds } from '../../redux/Actions/dogs';
import LoadingHOC from '../HOC/loadingHOC';

const AppComponent = LoadingHOC('isFetchingList')(BreedList);

class ContainerBreedList extends Component {
  componentDidMount() {
    const { getBreedsAction } = this.props;
    getBreedsAction();
  }

  render() {
    const { isFetchingList, errorList } = this.props;
    return (
      <AppComponent
        isFetchingList={isFetchingList}
        error={errorList}
        {...this.props}
      />
    );
  }
}

const mapStoreToProps = store => ({
  breedList: store.dogsReducer.breed.List,
  isFetchingList: store.dogsReducer.isFetching.List,
  errorList: store.dogsReducer.error.List,
});

const mapDispatchToProps = dispatch => ({
  getBreedsAction: () => {
    dispatch(getBreeds());
  },
});

ContainerBreedList.propTypes = {
  getBreedsAction: PropTypes.func.isRequired,
  isFetchingList: PropTypes.bool.isRequired,
  errorList: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
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

export default connect(mapStoreToProps, mapDispatchToProps)(ContainerBreedList);
