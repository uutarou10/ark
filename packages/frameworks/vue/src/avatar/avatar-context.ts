import { createContext } from '../context'
import { type UseAvatarReturn } from './use-avatar'

export interface AvatarContext extends UseAvatarReturn {}
export const [AvatarProvider, useAvatarContext] = createContext<AvatarContext>('AvatarContext')
