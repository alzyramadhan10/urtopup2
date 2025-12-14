import type { ApiResponseType } from './api'

export type itemType = {
  id?: string
  game_name?: string
  game_id: string
  name: string
  price: string
  price_capital: string
  price_sell: string
  price_reseller: string
}

export const itemAPI = {
  async get(search: string) {
    console.log('search', search)

    const req = useOurFetch<ApiResponseType<itemType[]>>('/api/v1/items')

    return req
  },

  async store(data: itemType) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/items', {
      method: 'POST',
      body: data,
    }) as Promise<ApiResponseType<itemType>>

    return handleWithTryCatch(req)
  },

  async update(data: itemType) {
    const { $api } = useNuxtApp()

    const req = $api(`/api/v1/items/${data.id}`, {
      method: 'PUT',
      body: data,
    }) as Promise<ApiResponseType<itemType>>

    return handleWithTryCatch(req)
  },

  async destroy(data: itemType) {
    const { $api } = useNuxtApp()

    const req = $api(`/api/v1/items/${data.id}`, {
      method: 'DELETE',
      body: data,
    }) as Promise<ApiResponseType<itemType>>

    return handleWithTryCatch(req)
  },

  digiflazzSync(data: { digiflazz_price_sell: string, digiflazz_price_reseller: string }) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/cron', {
      method: 'POST',
      body: data,
    }) as Promise<ApiResponseType<itemType>>

    return handleWithTryCatch(req)
  },
}
