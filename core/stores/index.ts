import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { AuthContext } from '../types'

export const useAuthStore = create<AuthContext>()(
  persist(
    (set) => ({
      user: null,
      isAuthorized: false,
      isAdmin: false,
      reset: () =>
        set(() => ({
          user: null,
          isAuthorized: false,
          isAdmin: false,
        })),
      setUser: (user) =>
        set(() => ({
          user,
          isAuthorized: true,
          isAdmin: user?.role === 'admin' || user?.role === 'supervisor',
        })),
        setVerified: () =>
          set(({ user, isAdmin, isAuthorized }) => ({
            user: {
              ...user!,
              isVerified: true,
            },
            isAdmin,
            isAuthorized,
          }))
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() =>  AsyncStorage),
    }
  )
)
