import { Maybe } from '@/core/types'
import * as SecureStore from 'expo-secure-store'

const TOKEN_KEY = 'jwt-token-key'

export const saveToken = async (token: string): Promise<void> => {
  await SecureStore.setItemAsync(TOKEN_KEY, token)
}

export const getToken = async (): Promise<Maybe<string>> => {
  return await SecureStore.getItemAsync(TOKEN_KEY)
}

export const deleteToken = async (): Promise<void> => {
  await SecureStore.deleteItemAsync(TOKEN_KEY)
}
