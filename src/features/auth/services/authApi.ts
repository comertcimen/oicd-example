import { AuthProviderProps } from "oidc-react"

export const fetchAuth = async (): Promise<Partial<AuthProviderProps>> => {
  return {
    authority: import.meta.env.VITE_AUTHORITY,
    clientId: import.meta.env.VITE_CLIENT_ID,
    responseType: "code",
    redirectUri: import.meta.env.VITE_REDIRECT_URI,
    scope: "openid profile email",
  }
}
