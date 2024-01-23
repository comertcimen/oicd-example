import { LoadingOverlay } from "@mantine/core"
import { AuthProvider as OICDAuthProvider } from "oidc-react"
import { PropsWithChildren } from "react"
import { useAuth } from "../data"

export const OicdProvider = ({ children }: PropsWithChildren) => {
  const { authQuery } = useAuth()
  const { data: authData, isPending, isError } = authQuery()

  const oidcConfig = {
    onSignIn: async () => {
      // alert("You logged in :" + response.profile.given_name + " " + response.profile.family_name)
      window.location.hash = ""
    },
    ...authData,
  }

  if (isPending) return <LoadingOverlay visible overlayProps={{ blur: 2 }} />

  if (isError) return <div>Something went wrong</div>

  if (!authData) return <div>Not authenticated</div>

  return <OICDAuthProvider {...oidcConfig}>{children}</OICDAuthProvider>
}
