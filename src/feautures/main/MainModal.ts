interface IFile {
  file: any
}

interface ITransactionInfo {
  sum?: number,
  date: string
}

interface ITransactionItem {
  id?: number,
  address?: string,
  locationName?: string,
  attendances?: ITransactionInfo[],
}

interface ITransaction {
  data?: ITransactionItem[]
  message?: string,
  statusCode?: string
}

interface IAverageAndSumByDateItem {
  total?: string,
  average?: string,
  date?: string,
}

interface IAverageAndSumByDate {
  data?: IAverageAndSumByDateItem[],
  message?: string,
  statusCode?: string
}

interface IMachineTransactionItem {
  orderNumber?: string,
  typeOfGame?: string,
  transactions: ITransactionInfo[]
}

interface IMachineTransaction {
  data?: IMachineTransactionItem[],
  message?: string,
  statusCode?: string
}

interface ITransactionByLocationChartInfo {
  id: string,
  sid: string,
  address: string,
  locationName: string
}

interface ITransactionByLocationChartItem {
  date: string,
  locations: ITransactionByLocationChartInfo[]
}

interface ITransactionByLocationChart {
  data?: ITransactionByLocationChartItem[],
  message?: string,
  statusCode?: string
}

interface IBestAndWorstDayOfAllTimeItem {
  day: string,
  month: string,
  date: string
}

interface IBestAndWorstDayOfAllTime {
  data?: IBestAndWorstDayOfAllTimeItem[],
  message?: string,
  statusCode?: string
}

interface IWeekAnalyticsItem {
  week: number,
  startDateOfWeek: string,
  endDateOfWeek: string,
  day?: string,
  dateInWeek?: string,
  weekSum?: number
}

interface IWeekAnalytics {
  data?: IWeekAnalyticsItem[],
  message?: string,
  statusCode?: string
}

interface ILocationSelect {
  id: number,
  sid: string,
  locationName: string
}

interface ILocationSelectPromise {
  data?: ILocationSelect[],
  message?: string
}

export type {
  IFile,
  ITransaction,
  ITransactionItem,
  IAverageAndSumByDate,
  IAverageAndSumByDateItem,
  IMachineTransaction,
  IMachineTransactionItem,
  IBestAndWorstDayOfAllTime,
  IBestAndWorstDayOfAllTimeItem,
  ITransactionByLocationChart,
  IWeekAnalytics,
  ILocationSelectPromise,
  ILocationSelect,
};

export type TMainPageContext = {
  values: any,
  setValues: (b: any) => void,
  handleChoseDate: () => void,
  bestAndWorstDayValues: any,
  setBestAndWorstDayValues: (b: any) => void,
  handleChoseBestAndWorstDayDate: () => void,
};

export type TAppContext = {
  width: any
};
