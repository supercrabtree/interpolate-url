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
