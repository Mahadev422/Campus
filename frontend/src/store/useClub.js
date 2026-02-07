import { create } from "zustand";
import toast from "react-hot-toast";
const url = import.meta.env.VITE_BACKEND;

export const useClub = create((set, get) => ({
  loading: false,
  error: null,
  clubs: [],

  getAllClubs: async () => {
    set({ loading: true });
    try {
      const res = await fetch(`${url}/club/get-all`, {
        credentials: "include",
      });
      const resData = await res.json();
      if (!resData.ok) set({ error: resData.msg });
      else set({ clubs: [...resData.msg], error: null });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useClubById = create((set, get) => ({
  loading: false,
  error: null,
  clubData: {},

  getClubById: async (clubId) => {
    set({ loading: true });
    try {
      const res = await fetch(`${url}/club/${clubId}`, {
        credentials: "include",
      });
      const resData = await res.json();
      if (!resData.ok) set({ error: resData.msg, loading: false });
      else {
        const data = resData.msg;
        set({
          clubData: data,
          error: null,
          loading: false,
        });
      }
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
      setTimeout(() => set({ error: null }), 2000);
    }
  },

  clubEvents: [],
  clubEventsLoading: false,
  clubEventsError: null,
  id: null,
  getCLubEvents: async (clubId) => {
    const id = get().id;
    if (id && id == clubId) return;
    set({ clubEventsLoading: true });
    try {
      const res = await fetch(`${url}/event/get-club-events/${clubId}`, {
        credentials: "include",
      });
      const resData = await res.json();

      if (!resData.ok) set({ clubEventsError: resData.msg });
      else {
        set({
          clubEvents: resData.msg,
          id: clubId,
        });
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      set({ clubEventsLoading: false });
      setTimeout(() => set({ clubEventsError: null }), 2000);
    }
  },

  joinLoading: false,

  joinClub: async (clubId) => {
    set({ joinLoading: true });
    try {
      const res = await fetch(`${url}/club/join-request`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ clubId }),
      });
      const resData = await res.json();

      if (!resData.ok) {
        toast.error(resData.msg);
      } else {
        set({ clubData: resData.msg });
        toast.success("Joined Successfully.");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      set({ joinLoading: false });
    }
  },

  changeClubCoverImage: (image, close) => {
    const clubId = get().clubData._id;
    get().changeClub('coverImage', image, clubId, close);
  },

  changeClubLogo: (image, close) => {
    const clubId = get().clubData._id;
    get().changeClub('logo', image, clubId, close);
  },

  changeClubDescription: (text, close) => {
    const clubId = get().clubData._id;
    get().changeClub('description', text, clubId, close);
  },

  changeClub: async (key, value, clubId, close) => {
    if (!value || !key || !clubId) return;
    try {
      const res = await fetch(`${url}/club/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ key, value, clubId }),
      });

      const resData = await res.json();
      
      if (!resData.ok) {
        toast.error(resData.msg);
      } else {
        set({ clubData: resData.msg });
        close(false);
        toast.success("Updated successfully.");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      set({ imageLoader: false });
    }
  },
}));

export const useClubMembers = create((set) => ({
  loading: false,
  members: [],
  requests: [],

  getRequestForJoin: async (clubId) => {
    set({ loading: true });
    try {
      const res = await fetch(`${url}/club/member-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ clubId }),
      });
      const resData = await res.json();
      if (!resData.ok) set({ error: resData.msg });
      else set({ requests: [...resData.msg] });
    } catch (err) {
      console.log(err.message);
      set({ error: err.message });
    } finally {
      set({ loading: false });
      setTimeout(() => set({ error: null }), 2000);
    }
  },
}));

export const useCreateClub = create((set) => ({
  loading: false,
  error: null,

  handleCreateClub: async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);

    try {
      set({ loading: true });
      const res = await fetch(`${url}/club/create-club`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formValues),
      });
      const resData = await res.json();
      console.log(resData);
      if (!resData.ok) {
        set({ error: resData.msg });
      } else {
        set({ error: null });
        e.target.reset();
        window.location.href = "/clubs";
      }
    } catch (err) {
      console.log(err.message);
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));
