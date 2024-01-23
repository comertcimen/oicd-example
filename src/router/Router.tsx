import { Layout, ProtectedRoute } from "@/components"
import { ContactRouter } from "@/features/contacts"
import { DashboardRouter } from "@/features/dashboard"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>404 not found</div>,
  },
  {
    path: "/",
    errorElement: <div>Error page</div>,
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [DashboardRouter, ContactRouter],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
