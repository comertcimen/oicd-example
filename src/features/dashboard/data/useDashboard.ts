import { fetchDashboard } from "../services"

const QUERY_KEYS = {
  DASHBOARD: ["dashboard"],
}

export const useDashboard = () => {
  const dashboardQuery = () =>
    useQuery({
      queryKey: QUERY_KEYS.DASHBOARD,
      queryFn: fetchDashboard,
    })

  return {
    dashboardQuery,
  }
}
