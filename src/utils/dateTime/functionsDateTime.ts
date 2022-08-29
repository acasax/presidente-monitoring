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
    case 'MONTH2': {
      return [
        date?.year,
        padTo2Digits(date?.month?.number),
      ].join('-');
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

export function getMountsArray(date: string, status = true) {
  let arr = [];
  if (status) {
    arr = date.split('.');
  } else {
    arr = date.split('-');
  }
  const cDate = new Date(Number(arr[0]), 1, 1);
  let i = 0;
  const res = [];
  while (i < 12) {
    if (status) {
      res.push(`${padTo2Digits(i + 1)}.${cDate.getFullYear()}`);
    } else {
      res.push(`${cDate.getFullYear()}-${padTo2Digits(i + 1)}`);
    }
    i += 1;
  }
  return res;
}

export function translateDayName(day: string) {
  switch (day) {
    case 'Monday':
      return 'Ponedeljak';
    case 'Tuesday':
      return 'Utorak';
    case 'Wednesday':
      return 'Sreda';
    case 'Thursday':
      return 'Cetvrtak';
    case 'Friday':
      return 'Petak';
    case 'Saturday':
      return 'Subota';
    case 'Sunday':
      return 'Nedelja';
    default:
      return '';
  }
}

export function translateMountName(mount: string) {
  switch (mount) {
    case 'January':
      return 'Januar';
    case 'February':
      return 'Februar';
    case 'March':
      return 'Mart';
    case 'April':
      return 'April';
    case 'May':
      return 'Maj';
    case 'June':
      return 'Jun';
    case 'July':
      return 'Jul';
    case 'August':
      return 'Avgust';
    case 'September':
      return 'Septembar';
    case 'October':
      return 'Oktobar';
    case 'November':
      return 'Novembar';
    case 'December':
      return 'Decembar';
    default:
      return mount;
  }
}
