import { PublicUser } from "@/core/types"
import { queryOptions } from "@tanstack/react-query"
import { fetch } from 'expo/fetch'
import { getToken } from "../utils/secure-store"
import { USERS_API_BASE_URL } from "@/core/constants"

export const currentUserOptions = () => {
  return queryOptions({
    queryKey: ['me'],
    queryFn: async () => {
      const url = `${USERS_API_BASE_URL}/me`

      const token = await getToken()

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (!response.ok) {

        return null
      }

      const data: PublicUser = await response.json()

      console.log(data)

      return data
    }
  })
}
