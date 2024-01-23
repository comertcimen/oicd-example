const Dashboard = lazy(() => import("../views/dashboard"))

export const DashboardRouter = {
  index: true,
  element: <Dashboard />,
}
