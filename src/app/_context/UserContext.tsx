"use client";
import { signIn } from "@/actions/signin";
import { UserType } from "@/server/utils";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { signup } from "@/actions/signup";
import axios from "axios";
import { setLocal } from "../utils/handle-local";
import { Loader } from "../(auth)/auth/_compoments/Loader";

type UserContextType = {
  user?: UserType | null | undefined;
  login: (email: string, password: string) => Promise<void>;

  createUser: (user: UserType) => Promise<void>;
  logout: () => void;
};

const defaultContext: UserContextType = {
  user: null,
  logout: () => {},

  createUser: async () => {
    throw new Error("Auth context not initialized");
  },
  login: async () => {
    throw new Error("Auth context not initialized");
  },
};

const UserContext = createContext<UserContextType>(defaultContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [isReady, setIsReady] = useState(false);
  const navigateToPath = (path: string) => push(path);

  const login = async (email: string, password: string) => {
    try {
      setIsReady(false);
      const data = await signIn(email, password);
      setUser(data.data);
      setLocal("id", data.data.user._id);
      toast.success(data.data.message);
      return navigateToPath("/");
    } catch (error: unknown) {
      toast.error(axios.isAxiosError(error).toString());
      console.log("error in context", error);
    } finally {
      setIsReady(true);
    }
  };

  const createUser = async (user: UserType) => {
    try {
      const { data } = await signup(user);

      setLocal("id", data.data.id);
      setUser(data.data);

      toast.success(data.message);

      navigateToPath("/auth");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Sorry failed to sign up");
    }
  };

  const logout = () => {
    router.push("/auth");
    localStorage.removeItem("id");
    setUser(null);
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const accessid = localStorage.getItem("id");
        const parsedId = JSON.parse(accessid as string);

        if (!parsedId) return;

        const { data } = await axios.get(`/api/signin/${accessid}`);
        console.log("user", data);
        setUser(data.user);
        // navigateToPath("/");
      } catch {
        localStorage.removeItem("id");
        toast.error("Your session has expired. Please login again.");
      } finally {
        setIsReady(true);
      }
    };
    loadUser();
  }, []);

  // useEffect(() => {
  //   const AUTH_PATHS = ["/auth"];

  //   if (AUTH_PATHS.includes(pathname)) return;

  //   if (!isReady) return;

  //   if (!user) navigateToPath("/auth");
  // }, [pathname, user, isReady]);

  if (!isReady)
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Loader />
      </div>
    );

  return (
    <UserContext.Provider value={{ user, login, createUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
