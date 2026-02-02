import { create } from "zustand";

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
        set({ error: resData.msg });
      } else {
        set({ error: null });
        e.target.reset();
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err.message);
      set({ error: err.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export const useLogout = create((set) => ({
  loading: false,
  error: null,

  handleLogout: async () => {
    set({ loading: true });
    try {
      const res = await fetch(`${url}/auth/logout`, { credentials: "include" });
      const resData = await res.json();
      if (!resData.ok) set({ error: err.message });
      else {
        window.location.href = "/";
      }
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useAuth = create((set, get) => ({
  loading: false,
  user: null,
  error: null,

  checkLogin: async () => {
    try {
      set({ loading: true });
      const res = await fetch(`${url}/auth/me`, {
        credentials: "include",
      });
      const resData = await res.json();
      if (!resData.ok) {
        set({ error: resData.msg, user: null });
      } else set({ user: { ...resData.msg }, error: null });
    } catch (err) {
      set({ error: err.message, user: null });
    } finally {
      set({ loading: false });
    }
  },

  logoutLoading: false,
  success: false,

  handleLogout: async () => {
    set({ logoutLoading: true });
    try {
      const res = await fetch(`${url}/auth/logout`, { credentials: "include" });
      const resData = await res.json();
      if (!resData.ok) set({ error: err.message });
      else {
        set({user: null, success: true});
      }
    } catch (err) {
      set({ error: err.message });
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
