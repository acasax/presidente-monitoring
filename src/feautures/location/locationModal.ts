interface ILocationSelect {
  id: number,
  sid: string,
  locationName: string
}

interface ILocationSelectPromise {
  data?: ILocationSelect[],
  message?: string
}

export type { ILocationSelectPromise, ILocationSelect };
