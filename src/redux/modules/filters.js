const SET_TEXT_FILTER = 'budget-app/filters/set-text-filter';
const SORT_BY_AMOUNT = 'budget-app/filters/sort-by-amount';
const SORT_BY_DATE = 'budget-app/filters/sort-by-date';
const SET_START_DATE = 'budget-app/filters/set-start-date';
const SET_END_DATE = 'budget-app/filters/set-end-date';

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text,
});

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT,
});

export const sortByDate = () => ({
  type: SORT_BY_DATE,
});

export const setStartDate = (startDate = null) => ({
  type: SET_START_DATE,
  startDate,
});

export const setEndDate = (endDate = null) => ({
  type: SET_END_DATE,
  endDate,
});

const initialState = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return { ...state, text: action.text };
    case SORT_BY_AMOUNT:
      return { ...state, sortBy: 'amount' };
    case SORT_BY_DATE:
      return { ...state, sortBy: 'date' };
    case SET_START_DATE:
      return { ...state, startDate: action.startDate };
    case SET_END_DATE:
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
}
