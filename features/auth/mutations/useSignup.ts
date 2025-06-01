import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { SignupValues } from "../schemas"
import { useAuthStore } from "@/core/stores"
import { useRouter } from "expo-router"
import { currentUserOptions } from '../queries'
import { parseCookie } from "../utils/cookie"
import { saveToken } from "../utils/secure-store"
import { USERS_API_BASE_URL } from "@/core/constants"
import { fetch } from 'expo/fetch'

export const useSignup = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const setUser = useAuthStore((state) => state.setUser)
  
  return useMutation({
    mutationFn: async ({ confirmPassword, ...data}: SignupValues) => {
      const url = `${USERS_API_BASE_URL}/signup`

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })

      if (!response.ok) {
        const error: unknown = await response.json()

        throw new Error(error.title)
      }

      const cookies = response.headers.get('Set-Cookie')

      const token = parseCookie(cookies)

      if (!token) {
        throw new Error()
      }

      return token
    },
    onSuccess: async (data) => {
      const value = data.split('=')[1]

      await saveToken(value)

      const user = await queryClient.fetchQuery(currentUserOptions())

      setUser(user)

      router.navigate('/(protected)/(tabs)')
    }
  })
}
