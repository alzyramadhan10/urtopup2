import type { ApiResponseType } from './api'

export type transactionType = {
  id?: string
  name?: string
  email?: string
  phone?: string
  customer?: string
  game_id?: number
  item_id?: number
  reseller_id?: number
  price?: number
  price_capital?: number
  price_cell?: number
  price_reseller?: number
  status: string
}

export const transactionAPI = {
  async get(search: string) {
    console.log('search', search)

    const req = useOurFetch<ApiResponseType<transactionType[]>>('/api/v1/transactions')

    return req
  },

  async cekTransaction(id: string) {
    const req = useOurFetch<ApiResponseType<transactionType>>(() => `/api/v1/public/transactions/${id}`)

    return req
  },

  async store(data: transactionType) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/transactions', {
      method: 'POST',
      body: data,
    }) as Promise<ApiResponseType<transactionType>>

    return handleWithTryCatch(req)
  },

  async update(data: transactionType) {
    const { $api } = useNuxtApp()

    const req = $api(`/api/v1/transactions/${data.id}`, {
      method: 'PUT',
      body: data,
    }) as Promise<ApiResponseType<transactionType>>

    return handleWithTryCatch(req)
  },

}
