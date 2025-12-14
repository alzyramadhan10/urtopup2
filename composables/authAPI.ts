// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class authAPI {
  public static async login(email: string, password: string) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/auth/login?web=true', {
      method: 'post',
      body: { email, password },
    })

    return req
  }

  public static async register(formData: FormData) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/auth/register', {
      method: 'post',
      body: formData,
    })

    return req
  }

  public static async whoami() {
    const path = '/api/v1/auth/whoami'
    return useOurFetch(path)
  }

  public static async forgotPassword(email: string) {
    const { $api } = useNuxtApp()

    const req = $api('/api/v1/auth/forgot-password/' + email, {
      method: 'post',
    })

    return req
  }
}
