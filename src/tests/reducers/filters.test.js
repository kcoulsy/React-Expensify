import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', ()=> {
  const state = filtersReducer(undefined, { type: '@@INIT'});

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
})

test('should setup sort by amount filter values', ()=> {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

  expect(state.sortBy).toBe('amount');
})

test('should setup sort by date filter values', ()=> {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });

  expect(state.sortBy).toBe('date');
})

test('should setup set text filter values', ()=> {
  const text = 'this is the filter test'
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);

  expect(state.text).toBe(text);
})

test('should setup set start date values', ()=> {
  const startDate = moment(0);
  const action = {
    type: 'SET_START_DATE',
    date: startDate
  };
  const state = filtersReducer(undefined, action);

  expect(state.startDate).toBe(startDate);
});
test('should setup set end date values', ()=> {
  const endDate = moment(0);
  const action = {
    type: 'SET_END_DATE',
    date: endDate
  };
  const state = filtersReducer(undefined, action);

  expect(state.endDate).toBe(endDate);
});
