function padTo2Digits(num) {
  return num?.toString()?.padStart(2, '0');
}

export function formatDate(date, mode) {
  switch (mode[0]) {
    case 'YEAR': {
      return [
        date?.year,
      ].join('.');
    }
    case 'MONTH': {
      return [
        padTo2Digits(date?.month?.number),
        date?.year,
      ].join('.');
    }
    default: {
      return [
        padTo2Digits(date?.day),
        padTo2Digits(date?.month?.number),
        date?.year,
      ].join('.');
    }
  }
}
