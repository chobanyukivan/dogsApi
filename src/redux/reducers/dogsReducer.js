import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAIL,
  FETCH_BREED_REQUEST,
  FETCH_BREED_SUCCESS,
  FETCH_BREED_FAIL,
} from '../Actions/dogs';

const initialState = {
  isFetching: {
    List: false,
    Photos: false,
  },
  breed: {
    List: '',
    Photos: '',
  },
  error: {
    List: '',
    Photos: '',
  },
};

const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        isFetching: { ...state.isFetching, List: true },
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        isFetching: { ...state.isFetching, List: false },
        breed: { ...state.breed, List: action.payload },
      };
    case FETCH_LIST_FAIL:
      return {
        ...state,
        isFetching: { ...state.isFetching, List: false },
        error: { ...state.error, List: action.payload },
      };
    case FETCH_BREED_REQUEST:
      return {
        ...state,
        breed: { ...state.breed, Photos: '' },
        isFetching: { ...state.isFetching, Photos: true },
      };
    case FETCH_BREED_SUCCESS:
      return {
        ...state,
        breed: { ...state.breed, Photos: action.payload },
        isFetching: { ...state.isFetching, Photos: false },
      };
    case FETCH_BREED_FAIL:
      return {
        ...state,
        isFetching: { ...state.isFetching, Photos: false },
        error: { ...state.error, Photos: action.payload },
      };
    default:
      return {
        ...state,
      };
  }
};

export default dogsReducer;
