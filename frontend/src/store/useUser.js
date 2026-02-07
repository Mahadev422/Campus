import toast from "react-hot-toast";
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

  error: null,
  changeCoverImage: (image, close) => {
    get().changeProfile("coverImage", image, close);
  },

  changeProfilePic: (image, close) => {
    get().changeProfile("profilePic", image, close);
  },

  changeBio: (text, close) => {
    get().changeProfile('bio', text, close);
  },
  changeProfile: async (key, value, close) => {
    if (!key || !value) return;

    try {
      const res = await fetch(`${url}/user/change`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ key, value }),
      });

      const resData = await res.json();
      if (!resData.ok) {
        toast.error(resData.msg);
      } else {
        set({ userData: resData.msg });
        toast.success("Updated Successfully.");
        close(false);
      }
    } catch (err) {
      toast.error(err.message);
    }
  },
}));
