import type { ApiResponseType } from './api'

export type tagType = {
  id?: string
  name: string
  description: string
}

export const tagAPI = {
  async get(search: string) {
    console.log('search', search)

    const req = useOurFetch<ApiResponseType<tagType[]>>('/api/v1/tags')

    return req
  },

  async store(data: tagType) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/tags', {
      method: 'POST',
      body: data,
    }) as Promise<ApiResponseType<tagType>>

    return handleWithTryCatch(req)
  },

  async update(data: tagType) {
    const { $api } = useNuxtApp()

    const req = $api(`/api/v1/tags/${data.id}`, {
      method: 'PUT',
      body: data,
    }) as Promise<ApiResponseType<tagType>>

    return handleWithTryCatch(req)
  },

  async destroy(data: tagType) {
    const { $api } = useNuxtApp()

    const req = $api(`/api/v1/tags/${data.id}`, {
      method: 'DELETE',
      body: data,
    }) as Promise<ApiResponseType<tagType>>

    return handleWithTryCatch(req)
  },

  async buy(data: {
    customer_id: string
    email: string
    phone: string
    payment: string
    item_id: string
  }) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/public/buy', {
      method: 'POST',
      body: data,
    }) as Promise<ApiResponseType<buyType>>

    return handleWithTryCatch(req)
  },

}
