import moment from 'moment';

export default [
  {
    id: '1',
    description: 'foo',
    note: '',
    amount: 20,
    createdAt: moment(0).valueOf(),
  },
  {
    id: '2',
    description: 'bar',
    note: '',
    amount: 30,
    createdAt: moment(0)
      .subtract(3, 'days')
      .valueOf(),
  },
  {
    id: '3',
    description: 'baz',
    note: '',
    amount: 10,
    createdAt: moment(0)
      .add(3, 'days')
      .valueOf(),
  },
];
