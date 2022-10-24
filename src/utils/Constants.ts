// Variables constants
export const StartWorkTimeOfIKS = '2021-07-11';

// Alert status
export enum AlertStatus {
  Error = 'error',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
}

// Date picker mode status
export enum DataPickerModeStatus {
  YEAR = 'YEAR',
  MONTH = 'MONTH',
  DAY = 'DAY',
}

// Status for best and worst day
export enum BestAndWorstDayStatus {
  BEST = 'Najbolji',
  WORST = 'Najgori',
}

// Best and worst type
export enum BestAndWorstDayType {
  BEST = 'DESC',
  WORST = 'ASC',
}

// Locations for chart
export enum LocationsShortNames {
  KRUSEVAC1 = '1Kruševac',
  KRUSEVAC2 = '2Kruševac',
  ALEKSANDROVAC3 = '3Aleksandrovac',
  BRUS4 = '4Brus',
  PARACIN7 = '7Paraćin',
  KRUSEVAC8 = '8Kruševac',
  KRUSEVAC9 = '9Kruševac',
  KRALJEVO10 = '10Kraljevo',
  KRUSEVAC11 = '11Kruševac',
  BORCA12 = '12Borča',
  KRALJEVO13 = '13Kraljevo',
  KRUSEVAC14 = '14Kruševac',
}

export enum LocationsFullNames {
  KRUSEVAC1 = '01 Kruševac, Trg Despota Stefana 30',
  KRUSEVAC2 = '02 Kruševac, Cara Lazara 193',
  ALEKSANDROVAC3 = '03 Aleksandrovac, 29. Novembra bb',
  BRUS4 = '04 Brus, Kralja Petra I 42',
  PARACIN7 = '07 Paraćin, Vojvode Mišića 8',
  KRUSEVAC8 = '08 Kruševac, Bircaninova 10',
  KRUSEVAC9 = '09 Kruševac, Vidovdanska 233',
  KRALJEVO10 = '10 Kraljevo, Dimitrija Tucovića 40',
  KRUSEVAC11 = '11 Kruševac, Rasinska 101',
  BORCA12 = '12 Borča, Zrenjaninski put 155',
  KRALJEVO13 = '13 Kraljevo, Trg Kralja Petra I Oslobodioca 3/1',
  KRUSEVAC14 = '14 Kruševac, Čolak Antina 17',
}

// Custom button icon submit types
export enum DateTypes {
  TRANSACTION = 'transaction',
  ATTENDANCE = 'attendance',
}

// Request type
export enum RequestDataType {
  TABLE = 'TABLE',
  CHART = 'CHART',
}

// Sort types
export enum SortTypes {
  BEST = 'BEST',
  WORST = 'WORST',
}

// AUTH PAGE CONTROLLERS NAMES
export enum AuthPageControllersNames {
  USERNAME = 'username',
  PASSWORD = 'password',
}
