import {create} from "zustand";
import {persist, createJSONSStorage} from "zustand/middleware";
import { AsyncStorage } from "react-native-async-storage/async-storage";
import {Session, User} from "@suoabase/supabase-js";

interface UserStore {
    user: User | null;
    setUser: (user: User | null) => void
    session: Session | null
    setSession: (session: Session | null) => void
    isLoggedIn:Boolean;
    SetIsLoggedIn:(isLoggedIn: Boolean) => void
}

export const useUserStore = create(
    persist<UserStore>(
        (set) => ({
            user: null,
            session: null,
            isLoggedIn: false,
            IsOnboarded: false,
            setUser: (user: User | null) => set((state)=> ({user})),
            setIsLoggedIn: (isLoggedIn: Boolean) => set((state)=> ({isLoggedIn})),
            setSession:(session Session | null) => set((state) => ({session})),
        }),
        {
            name: "fintechcrypto-store",
            storage: createJSONSStorage(()=> AsyncStorage),
        }
    )
)