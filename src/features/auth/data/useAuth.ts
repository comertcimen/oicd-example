import { fetchAuth } from "../services"

const QUERY_KEYS = {
  AUTH: ["auth"],
}

export const useAuth = () => {
  const authQuery = () =>
    useQuery({
      queryKey: QUERY_KEYS.AUTH,
      queryFn: fetchAuth,
    })

  return {
    authQuery,
  }
}
