import type { UseFetchOptions } from 'nuxt/app'

export function useOurFetch<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}
