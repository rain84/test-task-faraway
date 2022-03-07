import { generatePath } from 'react-router-dom'

export const API_URL = 'https://swapi.dev/api'

const defaultParams = { id: '' }

// prettier-ignore
export const endpoint = {
  people(params = defaultParams) {
    return generatePath(`${API_URL}/people/:id`, params)
  }
}
