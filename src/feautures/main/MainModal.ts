interface IFile {
  file: any
}

interface ITransactionInfo {
  profit?: number,
  date: string
}

interface ITransactionItem {
  sid?: string,
  address?: string,
  locationName?: string,
  transactions?: ITransactionInfo[],
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
  stickerNumber?: number,
  transactions: ITransactionInfo[]
}

interface IMachineTransaction {
  data?: IMachineTransactionItem[],
  message?: string,
  statusCode?: string
}

export type {
  IFile,
  ITransaction,
  ITransactionItem,
  IAverageAndSumByDate,
  IAverageAndSumByDateItem,
  IMachineTransaction,
  IMachineTransactionItem,
};

export type TMainPageContext = {
  values: any,
  setValues: (b: any) => void,
  handleChoseDate: () => void,
};
