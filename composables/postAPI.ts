import type { ApiResponseType } from './api'

export type postType = {
  id?: string
  img: string
  title: string
  description: string
}

export const postAPI = {
  async get(search: string) {
    console.log('search', search)

    const req = useOurFetch<ApiResponseType<postType[]>>('/api/v1/posts')

    return req
  },

  async store(data: postType) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/posts', {
      method: 'POST',
      body: data,
    }) as Promise<ApiResponseType<postType>>

    return handleWithTryCatch(req)
  },

  async update(data: postType) {
    const { $api } = useNuxtApp()

    const req = $api(`/api/v1/posts/${data.id}`, {
      method: 'PUT',
      body: data,
    }) as Promise<ApiResponseType<tagType>>

    return handleWithTryCatch(req)
  },

  async destroy(data: postType) {
    const { $api } = useNuxtApp()

    const req = $api(`/api/v1/posts/${data.id}`, {
      method: 'DELETE',
      body: data,
    }) as Promise<ApiResponseType<postType>>

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
