// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../utils/supabaseClient';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoggedIn: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica si hay una sesión activa al cargar la aplicación
    const checkSession = async () => {
      try{
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);}
       finally{
        setLoading(false);
       }
    };

    checkSession();

    // Suscríbete a los cambios en el estado de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Limpia la suscripción al desmontar el componente
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Función para registrar un nuevo usuario
  const signUp = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
    } catch (error) {
      console.log('Error al registrar usuario:', error);
      throw error; // Re-throw para que el componente que lo llama pueda manejarlo
    }
  };

  // Función para iniciar sesión
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error) {
      console.log('Error al iniciar sesión:', error);
      throw error; // Re-throw para que el componente que lo llama pueda manejarlo
    }
  };

  // Función para cerrar sesión
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };
  const isLoggedIn = !!user;
  return (
    <AuthContext.Provider 
    value={{ 
      user, 
      signUp, 
      signIn, 
      signOut,
      isLoggedIn,
      loading 
      }}
      >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
