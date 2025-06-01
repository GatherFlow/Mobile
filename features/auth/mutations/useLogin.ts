import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from "@/core/stores"
import { USERS_API_BASE_URL } from '@/core/constants'
import { fetch } from 'expo/fetch'
import { currentUserOptions } from '../queries'
import { useRouter } from 'expo-router'
import { parseCookie } from '../utils/cookie'
import { saveToken } from '../utils/secure-store'
import { LoginValues } from '../schemas'

export const useLogin = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const setUser = useAuthStore((select) => select.setUser)

  return useMutation({
    mutationFn: async (data: LoginValues) => {
      const url = `${USERS_API_BASE_URL}/login`

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        throw new Error()
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

      console.log(user)

      setUser(user)

      router.replace('/(protected)/(tabs)')
    }
  })
}
