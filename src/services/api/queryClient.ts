import { QueryCache, QueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"

export interface QueryMeta {
  disableErrorNotification?: boolean
  errorMessage?: string
  silenceNotificationFor?: number[]
}

export interface QueryOptions {
  enabled?: boolean
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: false, // default: true
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      const meta = query.meta as QueryMeta
      if (meta?.disableErrorNotification) {
        return
      }

      const err = error as AxiosError<{ message?: string }>

      if (
        meta?.silenceNotificationFor &&
        meta?.silenceNotificationFor.includes(err.response?.status ?? 0)
      ) {
        return
      }

      toast.error(
        (query.meta?.errorMessage as string) ||
          err?.response?.data?.message ||
          "Etwas ist schief gelaufen",
      )
    },
  }),
})
