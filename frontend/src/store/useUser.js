import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const useUser = create((set, get) => ({
  loading: false,
  userData: {},
  user: {},
  getMyData: async () => {
    try {
      set({ loading: true });
      const res = await fetch(`${url}/user/my-details`, {
        credentials: "include",
      });
      const resData = await res.json();
      if (!resData.ok) {
        set({ error: resData.msg });
        window.location.href = "/login";
      } else set({ userData: { ...resData.msg }, user: { ...resData.msg } });
    } catch (err) {
    } finally {
      set({ loading: false });
    }
  },
}));
