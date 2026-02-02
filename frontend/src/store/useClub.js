import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const useClub = create((set, get) => ({
  clubData: {},
  loading: false,
  error: null,
  clubs: [],

  getAllClubs: async () => {
    set({loading: true});
    try {
      const res = await fetch(`${url}/club/get-all`,{credentials: "include"});
      const resData = await res.json();
      if (!resData.ok) set({ error: resData.msg });
      else set({ clubs: [...resData.msg], error: null });
    } catch (err) {
      set({error: err.message});
    } finally {
      set({loading: false});
    }
  },
}));

export const useClubById = create((set, get) => ({
  loading: false,
  error: null,
  clubData: {},
  members: [],
  coordinator: [],

  getClubById: async (clubId) => {
    set({ loading: true });
    try {
      const res = await fetch(`${url}/club/${clubId}`, {credentials: "include"});
      const resData = await res.json();
      if (!resData.ok) set({ error: resData.msg, loading: false });
      else {
        const data = resData.msg;
        set({
          clubData: data,
          members: [...data.members, ...data.coordinator],
          coordinator: [...data.coordinator],
          error: null,
          loading: false,
        });
      }
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
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
      const res = await fetch(`${url}/event/get-club-events/${clubId}`, {credentials: "include"});
      const resData = await res.json();

      if (!resData.ok) set({ clubEventsError: resData.msg });
      else {
        set({
          clubEvents: resData.msg,
          clubEventsLoading: false,
          clubEventsError: null,
          id: clubId,
        });
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      set({ clubEventsLoading: false });
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
