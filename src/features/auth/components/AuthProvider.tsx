import { LoadingOverlay } from "@mantine/core"
import { useAuth } from "oidc-react"
import { PropsWithChildren } from "react"

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { isLoading, userData } = useAuth()

  if (isLoading) return <LoadingOverlay visible overlayProps={{ blur: 2 }} />

  if (!userData) return null

  return <>{children}</>
}
