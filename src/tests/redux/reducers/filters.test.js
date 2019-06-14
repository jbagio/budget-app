import moment from 'moment';
import filtersReducer from '../../../redux/reducers/filters';
import * as types from '../../../redux/actions/actionTypes';

describe('Filters reducer', () => {
  it('should setup default filters state', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    });
  });

  it('should set text filter', () => {
    const state = filtersReducer(undefined, {
      type: types.SET_TEXT_FILTER,
      text: 'foo',
    });

    expect(state.text).toBe('foo');
  });

  it('should set start date filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, {
      type: types.SET_START_DATE,
      startDate,
    });

    expect(state.startDate).toEqual(startDate);
  });

  it('should set end date filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, {
      type: types.SET_END_DATE,
      endDate,
    });

    expect(state.endDate).toEqual(endDate);
  });

  it('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: types.SORT_BY_AMOUNT });

    expect(state.sortBy).toBe('amount');
  });

  it('should set sortBy to date', () => {
    const prevState = {
      text: '',
      startDate: 10,
      endDate: 20,
      sortBy: 'amount',
    };

    const state = filtersReducer(prevState, { type: types.SORT_BY_DATE });

    expect(state).toEqual({ ...prevState, sortBy: 'date' });
  });
});
