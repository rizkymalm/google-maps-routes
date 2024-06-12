import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}

export function formatCurrency(amount, currencyCode, locale = 'id-ID') {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  });

  return formatter.format(amount);
}

export function formatPercent(value, base) {
  var count = (value / base) * 100;
  var values = count.toFixed(2);
  var result;
  if (value > 0) {
    if (result % 1 !== 0) {
      result = parseFloat(values);
    } else {
      result = values;
    }
  } else {
    result = 0;
  }
  return result;
}
