import type { ApiResponseType } from './api'

export type gameType = {
  id?: string
  // tag_name?: string
  tags: string
  name: string
  img: string
  description: string
}

export type buyType = {
  id?: string
  name: string
  customer: string
  email: string
  phone: string
  payment: string
  item_id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extra?: any
  status?: string
}

export const gameAPI = {
  async get(search: string) {
    console.log('search', search)

    const req = useOurFetch<ApiResponseType<gameType[]>>('/api/v1/games')

    return req
  },

  async store(data: gameType) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/games', {
      method: 'POST',
      body: data,
    }) as Promise<ApiResponseType<gameType>>

    return handleWithTryCatch(req)
  },

  async update(data: gameType) {
    const { $api } = useNuxtApp()

    const req = $api(`/api/v1/games/${data.id}`, {
      method: 'PUT',
      body: data,
    }) as Promise<ApiResponseType<gameType>>

    return handleWithTryCatch(req)
  },

  async destroy(data: gameType) {
    const { $api } = useNuxtApp()

    const req = $api(`/api/v1/games/${data.id}`, {
      method: 'DELETE',
      body: data,
    }) as Promise<ApiResponseType<gameType>>

    return handleWithTryCatch(req)
  },

  async buy(data: buyType) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/public/buy', {
      method: 'POST',
      body: data,
    }) as Promise<ApiResponseType<buyType>>

    return handleWithTryCatch(req) as Promise<ApiResponseType<buyType>>
  },

}
