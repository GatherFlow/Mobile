type Language = 'en' | 'uk'
type Role = 'user' | 'admin' | 'supervisor'

type Maybe<T> = T | undefined | null

interface BaseUser {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  bio?: string
  role: Role
  isVerified: boolean
  avatar: string
}

interface PublicUser extends BaseUser {
  dateOfBirth: Date | null
  language: Language
}

interface AuthState {
  user: Maybe<PublicUser>
  isAuthorized: boolean
  isAdmin: boolean
}

interface AuthActions {
  reset: () => void
  setUser: (user: AuthState['user']) => void
  setVerified: () => void
}

type AuthContext = AuthState & AuthActions

export type { AuthContext, Maybe, PublicUser }
