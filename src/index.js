module.exports = function toReadable (number) {
  const num = number;
  const str = number.toString();
  const hundred = 'hundred';
  let result = '';

  let objectUnits = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
  };

  let objectTens = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
  };

  // числа от 0 до 19

  if (num >= 0 && num < 20) {
    result = objectUnits[num];
  }

  // числа 20, 30, 40, 50, 60, 70, 80, 90

  if (str.length === 2 && num > 19 && str.charAt(1) === '0') {
    result = objectTens[str.charAt(0)];
  }

  // двузначные числа больше 19, кроме круглых десятков (23, 59 и пр)

  if (str.length === 2 && num > 19 && str.charAt(1) !== '0') {
    result = `${objectTens[str.charAt(0)]} ${objectUnits[str.charAt(1)]}`;
  }

  // круглые сотни - 100, 700 и пр

  if (str.length === 3 && num > 99 && str.charAt(1) === '0' && str.charAt(2) === '0') {
      result = `${objectUnits[str.charAt(0)]} ${hundred}`;
  }


  // трехзначные числа с круглыми десятками - 570, 990 и пр

  if (str.length === 3 && num > 99 && str.charAt(1) !== '0' && str.charAt(2) === '0' && str.charAt(1) !== '1') {
    result = `${objectUnits[str.charAt(0)]} ${hundred} ${objectTens[str.charAt(1)]}`;
  }

  // трехзначные числа где второе число ноль - 108, 705 и пр

  if (str.length === 3 && num > 99 && str.charAt(1) === '0' && str.charAt(2) !== '0') {
    result = `${objectUnits[str.charAt(0)]} ${hundred} ${objectUnits[str.charAt(2)]}`;
  }

  // трехзначные числа где второе и третье число это числа от 10 до 19

  if (str.length === 3 && num > 99 && str.charAt(1) === '1') {
    result = `${objectUnits[str.charAt(0)]} ${hundred} ${objectUnits[str.substr(1)]}`;
  }

  //  остальные трехзначные числа

  if (str.length === 3 && num > 99 && str.charAt(1) !== '1' && str.charAt(1) !== '0' && str.charAt(2) !== '0') {
    result = `${objectUnits[str.charAt(0)]} ${hundred} ${objectTens[str.charAt(1)]} ${objectUnits[str.substr(2)]}`;
  }

  return result;
}
