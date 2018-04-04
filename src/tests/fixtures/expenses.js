import moment from 'moment';

export default [{
  id: '1',
  description: 'text one',
  note: '',
  amount: 100,
  createdAt: 0
},{
  id: '2',
  description: 'text two',
  note: '',
  amount: 20,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id: '3',
  description: 'text three',
  note: '',
  amount: 1000,
  createdAt: moment(0).add(4, 'days').valueOf()
},{
  id: '4',
  description: 'text four',
  note: '',
  amount: 300,
  createdAt: moment(0).add(2, 'days').valueOf()
}]
