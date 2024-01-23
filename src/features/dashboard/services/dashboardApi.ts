import { ApiService } from "@/services/axios"

const ENDPOINTS = {
  DASHBOARD: "/dashboard",
}

export const fetchDashboard = () => {
  return ApiService.get<any>(ENDPOINTS.DASHBOARD)
}
