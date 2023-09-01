'use client'
import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";

interface UserType {
    idUsuario: string;
    email: string;
    acessToken: string;
    roles: string;
}

interface UserStoreType {
    user: UserType | null;
    addUser: (user: UserType) => void;
}

const useUserStore = create<UserStoreType>()(
    persist(
        (set) => ({
            user: null,
        
            addUser: (user : UserType) => set({ user }),
        }),
        {
            name: 'user', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
          }
    )
);

export default useUserStore;