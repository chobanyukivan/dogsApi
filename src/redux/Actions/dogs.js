export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAIL = 'FETCH_LIST_FAIL';
export const FETCH_BREED_REQUEST = 'FETCH_BREED_REQUEST';
export const FETCH_BREED_SUCCESS = 'FETCH_BREED_SUCCESS';
export const FETCH_BREED_FAIL = 'FETCH_BREED_FAIL';


export const getBreeds = () => (dispatch) => {
  dispatch({
    type: FETCH_LIST_REQUEST,
  });
  window.fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then((result) => {
      if (result.status === 'success') {
        dispatch({
          type: FETCH_LIST_SUCCESS,
          payload: result.message,
        });
      } else {
        dispatch({
          type: FETCH_LIST_FAIL,
          payload: result,
        });
      }
    })
    .catch((e) => {
      dispatch({
        type: FETCH_LIST_FAIL,
        payload: e,
      });
    });
};
export const getCurrentBreed = breed => (dispatch) => {
  dispatch({
    type: FETCH_BREED_REQUEST,
  });
  window.fetch(`https://dog.ceo/api/breed/${breed}/images/random/2`)
    .then(response => response.json())
    .then((result) => {
      if (result.status === 'success') {
        dispatch({
          type: FETCH_BREED_SUCCESS,
          payload: result.message,
        });
      } else {
        dispatch({
          type: FETCH_BREED_FAIL,
          payload: result,
        });
      }
    })
    .catch((e) => {
      dispatch({
        type: FETCH_BREED_FAIL,
        payload: e,
      });
    });
};
