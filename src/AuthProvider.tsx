"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { User, Session } from "@supabase/supabase-js"

interface AuthContextType {
    session: Session | null;
    user: User | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    session: null,
    user: null,
    loading: true
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);
    const {user, setUser} = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const supabase = createClient(import.meta.env.NEXT_PUBLIC_SUPABASE_URL!, import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
                const { data, error } = await supabase.auth.getSession();
    
                if(error) {
                    console.error("Error obteniendo la sesión:", error.message);
                    return;
                }
    
                setSession(data.session);
                setUser(data.session?.user ?? null);
            } catch (err) {
                console.error("Error inesperado:", err);
            } finally {
                setLoading(false);
            }
        } 

        fetchSession();
    }, []);

    return (
        <AuthContext.Provider value={{ session, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}