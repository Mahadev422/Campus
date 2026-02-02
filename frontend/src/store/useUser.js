import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const useUser = create((set, get) => ({
  user: {},
  loading: false,
  userData: {},

  getMyData: async () => {
    try {
      set({ loading: true });
      const res = await fetch(`${url}/user/my-details`, {
        credentials: "include",
      });
      const resData = await res.json();
      if (!resData.ok) {
        set({ error: resData.msg });
        window.location.href = '/login';
      }
      else set({ user: { ...resData.msg }, userData: { ...resData.msg } });
    } catch (err) {
    } finally {
      set({ loading: false });
    }
  },
}));
