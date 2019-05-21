import moment from 'moment';
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
} from '../../../state/actions/filters';
import * as types from '../../../state/actions/actionTypes';

describe('Filters action generators', () => {
  it('should generate action object for set text filter', () => {
    const action = setTextFilter('foo');

    expect(action).toEqual({
      type: types.SET_TEXT_FILTER,
      text: 'foo',
    });
  });

  it('should generate action object for set text filter with default value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
      type: types.SET_TEXT_FILTER,
      text: '',
    });
  });

  it('should generate action object for set start date filter', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
      type: types.SET_START_DATE,
      startDate: moment(0),
    });
  });

  it('should generate action object for set end date filter', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
      type: types.SET_END_DATE,
      endDate: moment(0),
    });
  });

  it('should generate action object for sort by amount filter', () => {
    expect(sortByAmount()).toEqual({ type: types.SORT_BY_AMOUNT });
  });

  it('should generate action object for sort by date filter', () => {
    expect(sortByDate()).toEqual({ type: types.SORT_BY_DATE });
  });
});
