import { PropsWithChildren } from "react"
import { Loader } from "./Loader"

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const isLoading = false
  const isLoggedIn = true

  if (isLoading) return <Loader h="100dvh" />

  if (!isLoading && !isLoggedIn) return <div>Not logged in</div>

  return children
}
