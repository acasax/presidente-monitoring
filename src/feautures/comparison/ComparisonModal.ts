interface IComparisonAllTimeDataItem {
  profit?: number,
  idLocation?: number,
  locationName?: string,
  address?: string,
}

interface IComparisonDataInfo {
  sum?: number,
  date: string
}

interface IComparisonDataItem {
  id?: number,
  address?: string,
  locationName?: string,
  transactions?: IComparisonDataInfo[],
}

interface IComparisonData {
  data?: IComparisonDataItem[]
  message?: string,
  statusCode?: string
}

interface IComparisonAllTimeData {
  data?: IComparisonAllTimeDataItem[]
  message?: string,
  statusCode?: string
}

export type {
  IComparisonAllTimeData,
  IComparisonAllTimeDataItem,
  IComparisonDataItem,
  IComparisonData,
};

export type TComparisonPageContext = {
  comparisonValues: any,
  setComparisonValues: (b: any) => void,
  handleChoseDateComparison: () => void,
};
