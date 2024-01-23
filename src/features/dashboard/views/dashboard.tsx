import { Shell } from "@/components"
import { Stack } from "@mantine/core"
import { DashboardCharts, DashboardStats } from "../components"

export default function Dashboard() {
  return (
    <Shell title="Dashboard">
      <Stack gap="xl">
        <DashboardStats />
        <DashboardCharts />
      </Stack>
    </Shell>
  )
}
