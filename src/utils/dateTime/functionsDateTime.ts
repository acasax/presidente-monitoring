export function padTo2Digits(num) {
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

export function getDaysArray(date: string) {
  const arr = date.split('.');
  const cDate = new Date(Number(arr[1]), Number(arr[0]), 1);
  const mountIndex = Number(arr[0]);
  const res = [];
  while (cDate.getMonth() === mountIndex) {
    res.push(`${padTo2Digits(cDate.getDate())}.${padTo2Digits(cDate.getMonth())}.${cDate.getFullYear()}`);
    cDate.setDate(cDate.getDate() + 1);
  }
  return res;
}
