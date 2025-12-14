export default defineNuxtPlugin((nuxtApp) => {
  // const { session } = useUserSession()
  const config = useRuntimeConfig()
  const headers = useRequestHeaders(['cookie'])

  const baseURL = typeof config.public.apiBase === 'string' ? config.public.apiBase : ''

  // set to state
  const baseURLState = useState('baseURLState')
  baseURLState.value = baseURL

  const api = $fetch.create({
    baseURL: baseURL,
    headers: headers,
    credentials: 'include',
    // onRequest({ request, options, error }) {
    // if (session.value?.token) {
    //   const headers = options.headers ||= {}
    //   if (Array.isArray(headers)) {
    //     headers.push(['Authorization', `Bearer ${session.value?.token}`])
    //   } else if (headers instanceof Headers) {
    //     headers.set('Authorization', `Bearer ${session.value?.token}`)
    //   } else {
    //     headers.Authorization = `Bearer ${session.value?.token}`
    //   }
    // }
    // },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})
