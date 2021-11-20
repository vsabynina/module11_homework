export function countDown(n) {
  if (typeof n !== 'number' || n === NaN) {
    return 'Вы ввели не число';
  } else if (typeof n === 'number') {
    if (n > 1) {
      let result = '';
      for (let i = n; i >= 1; --i) {
        result += `${i} `;
      }
      return result;
    } else {
      return 'Введите число больше 1';
    }
  }
}
