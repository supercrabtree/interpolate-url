import test from 'ava';
import interpolateUrl from './';

test('it should error when passed an incorrect type', t => {
  t.throws(() => interpolateUrl(90));
  t.throws(() => interpolateUrl(/hat/));
});

test('it should return empty string when passed null or undefined', t => {
  t.is(interpolateUrl(null), '');
  t.is(interpolateUrl(undefined), '');
});

test('it should do simple url interpolation', t => {
  t.is(
    interpolateUrl('http://googs.com/:id', {id: 6}),
    'http://googs.com/6'
  );
});

test('it should do multiple param url interpolation', t => {
  t.is(
    interpolateUrl('http://googs.com/:house/:id', {id: 6, house: 'burn'}),
    'http://googs.com/burn/6'
  );
});

test('with a missing param it should return a half interpolated url', t => {
  t.is(
    interpolateUrl('http://googs.com/:house/:id/:action', {action: 'delete', house: 'burn'}),
    'http://googs.com/burn/:id/delete'
  );
});

// test('it should understand ? as a delimiter', t => {
//   t.is(
//     interpolateUrl('http://googs.com/:id?boogers=tree', {id: 6}),
//     'http://googs.com/6?boogers=tree'
//   );
// });

// test('it should be able to interpolate query string params', t => {
//   t.is(
//     interpolateUrl('http://googs.com?boogers=:tree', {id: 6}),
//     'http://googs.com/6?boogers=tree'
//   );
// });
