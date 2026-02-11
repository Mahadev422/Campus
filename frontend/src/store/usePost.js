import toast from "react-hot-toast";
import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const usePost = create((set, get) => ({
  loading: false,

  post: {},

  uploadPost: async (data) => {
    console.log(data);
    try {
      const res = await fetch(`${url}/user/post`, {
        method: 'POST',
       headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data)
      });

      const resData = await res.json();

      if(!resData.ok) {
        toast.error(resData.msg);
      }
      else toast.success('Uploaded successfully.');
      return resData.ok;
    } catch (err) {
      toast.error(err.message);
      return false
    }
  }
}))