import {supbase} from "../lib/supabase";
import useUserStore from '../store/useUserStore';

export default function useSupabaseAuth(){
    const {session, setSession, setUser} = useUserStore();
     
    async function signInWithEmail(email:string, password:string) {
     
    
    
    
    
    
    
    
    
    }

    async function signUpWithEmail(email:string, password:string) {  
    
    
    
    
    
    
    
    
    
    }
     
    async function signOut(){










    }

     async function getUserProfile(){












     }
     async function updateUserProfile(
        username: string,
        fullName: string,
        avatarUrl: string,
        website: string,
     ){
        if(!session?.user) throw new Error("No user on the session!");

        const updates = {
            id: session?.user.id,
            username,
            full_name: fullName,
            website:website,
            avatarUrl:avatarUrl,
            updated_at: new Date(),
        };
     }


}