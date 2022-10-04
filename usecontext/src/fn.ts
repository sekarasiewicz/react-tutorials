type PatchOneMessageArgs = {
  id: number;
  payload: {
    text: string;
  }
}

export const createPatchService = <
  RequestArgs extends { [key: string]: any, params?: Record<string, any> },
  Response extends any>({url}: { url: (args: Omit<RequestArgs, 'params'>) => string }) => (args: RequestArgs) => {
  const newUrl = url(args)

  return fetch(newUrl, {})
}

export const patchOneMessage = createPatchService<PatchOneMessageArgs, {id: number}[]>({
  url: ({ id }) => `/messages/${id}`,
})

export const result = patchOneMessage({id: 1, payload: {text: 'hello'}})
