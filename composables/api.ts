import { FetchError } from 'ofetch'

export type ApiResponseType<T> = {
  data?: T
  message?: string
  errors?: ApiResponseErrorType[]
}

export type ApiResponseErrorType = {
  field: string
  message: string
  rule: string
}

export async function handleWithTryCatch(req: Promise<ApiResponseType<unknown>>) {
  try {
    const response = await req
    return response
  }
  catch (error) {
    const response: ApiResponseType<unknown> = {
      message: '',
    }

    if (error instanceof FetchError) {
      // handle validation error
      if (error.statusCode === 422) {
        response.message = 'Validasi Salah, Cek Kembali Input'
        response.errors = error.data.errors
      }
      else {
        response.message = error.data.message
      }
    }
    else {
      console.error(error)
      response.message = 'Error tidak diketahui, silahkan kontak admin'
    }

    return response
  }
}
