interface IFile {
  file: any
}

export type { IFile };

export type TMainPageContext = {
  values: any,
  setValues: (b: any) => void,
  handleChoseDate: () => void,
};
