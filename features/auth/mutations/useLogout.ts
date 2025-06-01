import { useAuthStore } from "@/core/stores"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "expo-router"
import { deleteToken } from "../utils/secure-store"
import { fetch } from 'expo/fetch'
import { USERS_API_BASE_URL } from "@/core/constants"

export const useLogout = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const reset = useAuthStore((state) => state.reset)

  return useMutation({
    mutationFn: async () => {
      const url = `${USERS_API_BASE_URL}/logout`

      const response = await fetch(url, {
        method: 'DELETE',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        const error: unknown = await response.json()

        throw new Error(error.title)
      }
    },
    onSuccess: async () => {
      reset()

      queryClient.setQueryData(['current-user'], () => null)

      await queryClient.resetQueries()

      await deleteToken()

      router.replace('/onboarding')
    }
  })
}