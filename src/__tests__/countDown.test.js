import { countDown } from '../utils/countDown';
describe('tests for countDown function', () => {
  it('should count numbers', () => {
    expect(countDown(3)).toBe('3 2 1 ');
  });
  it('should check if number bigger than 1', () => {
    expect(countDown(0)).toBe('Введите число больше 1');
  });
  it('should check if value is number', () => {
    expect(countDown('abc')).toBe('Вы ввели не число');
  });
});
