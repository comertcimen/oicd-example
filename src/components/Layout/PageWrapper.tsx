import { Container } from "@mantine/core"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Loader } from "./Loader"

export const PageWrapper = () => {
  return (
    <Suspense fallback={<Loader h="100dvh" />}>
      <Container size="responsive">
        <Outlet />
      </Container>
    </Suspense>
  )
}
