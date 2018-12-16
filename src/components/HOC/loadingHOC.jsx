import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './loadingHOC.css';

const isTrue = prop => (
  prop === true
);

const LoadingHOC = loadingProp => WrappedComponent =>
  class LoadingHOC extends Component {
    render() {
      const { error } = this.props;
      return (isTrue(this.props[loadingProp]))
        ? <div className="loader" />
        : (error)
          ? <p> Чтото пошло не так. Ошибка: {error.message}</p>
          : <WrappedComponent {...this.props} />;
    }
  };

LoadingHOC.propTypes = {
  loadingProp: PropTypes.bool.isRequired,
  WrappedComponent: PropTypes.element.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default LoadingHOC;
