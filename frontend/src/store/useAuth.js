import { create } from "zustand";
import toast from "react-hot-toast";

const url = import.meta.env.VITE_BACKEND;

export const useLogin = create((set, get) => ({
  error: null,
  isLoading: false,

  handleLogin: async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      set({ isLoading: true });
      const res = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      console.log(resData);
      if (!resData.ok) {
        toast.error(resData.msg);
      } else {
        e.target.reset();
        toast.success("Login successfully.");
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    } finally {
      set({ isLoading: false });
    }
  },

  handleGoogleLogin: async (credential) => {
    try {
      const res = await fetch(`${url}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ credential }),
      });

      const resData = await res.json();

      if(!resData.ok) {
        toast.error(resData.msg);
      }
      else {
        toast.success(resData.msg.name);
        window.location.href = '/';
      }
    } catch (err) {
      toast.error(err.message);
    }
  },
}));

export const useAuth = create((set, get) => ({
  loading: false,
  user: null,
  error: null,
  userLoader: false,

  checkLogin: async () => {
    try {
      set({ loading: true, userLoader: true });
      const res = await fetch(`${url}/auth/me`, {
        credentials: "include",
      });
      const resData = await res.json();
      if (!resData.ok) {
        set({ error: resData.msg, user: null });
      } else set({ user: { ...resData.msg } });
    } catch (err) {
      set({ error: err.message, user: null });
    } finally {
      set({ loading: false, userLoader: false });
      setTimeout(() => set({ error: null }), 2000);
    }
  },

  logoutLoading: false,
  success: false,

  handleLogout: async () => {
    set({ logoutLoading: true });
    try {
      const res = await fetch(`${url}/auth/logout`, { credentials: "include" });
      const resData = await res.json();
      if (!resData.ok) toast.error(resData.msg);
      else {
        window.location.href = "/";
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      set({ logoutLoading: false });
    }
  },
}));

export const useForgot = create((set) => ({
  loading: false,
  error: null,

  handleForgot: async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = Object.fromEntries(formData);
    console.log(email);
  },
}));
