import { Drawer } from "@mantine/core"
import { Suspense } from "react"
import { Loader } from "./Loader"

export const SidePanelContainer = () => {
  const { panel } = usePanelStore()
  return (
    <Drawer
      opened={!!panel}
      position="right"
      size={panel?.size ?? "lg"}
      withCloseButton={false}
      onClose={() => null}
      styles={{ body: { height: "100%", padding: 0 } }}
      withOverlay={!panel?.hideOverlay}
    >
      <Suspense fallback={<Loader />}>{panel?.component}</Suspense>
    </Drawer>
  )
}
