import { generatePath, Params } from 'react-router-dom'

export const API_URL = 'https://swapi.dev/api'

type Args = { params?: Params; query?: Params }
const defaultArgs = { params: { id: '' }, query: { page: '1' } }

const constructUrl = (template: string, { params, query }: Args) => {
  params ??= defaultArgs.params
  query ??= defaultArgs.query

  const path = generatePath(template, params)
  let search = new URLSearchParams(
    query as unknown as URLSearchParams
  ).toString()

  search &&= `?${search}`
  const url = `${path}${search}`

  return url
}

// prettier-ignore
export const endpoint = {
  
  people(id?: number, page?: number) {
    const args: Args = {}

    if (id) args.params = { id: (id).toString()}
    if (page) args.query = {page: page.toString()}

    return constructUrl(`${API_URL}/people/:id`, args)
  }
}
