import moment from 'moment';

export const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null,
};

export const filters = {
  text: 'foo',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days'),
};
