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

export type { IFile, ITransaction, ITransactionItem };

export type TMainPageContext = {
  values: any,
  setValues: (b: any) => void,
  handleChoseDate: () => void,
};
