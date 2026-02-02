import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const useCreateEvent = create((set) => ({
  loading: false,
  error: null,
  success: false,
  handleCreateEvent: async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    set({ loading: true });
    try {
      const res = await fetch(`${url}/event/create-event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (!resData.ok) {
        console.log(resData.msg);
        set({ error: resData.msg });
        return;
      } else {
        e.target.reset();
        set({ error: false, success: true });
        window.location.href = "/events";
        console.log("Event is sent for review to admin.", resData.msg);
      }
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useGetAllEvent = create((set) => ({
  loading: false,
  error: null,
  events: [],

  getEvents: async () => {
    set({ loading: true });
    try {
      const res = await fetch(`${url}/event/get-events`);
      const resData = await res.json();
      if (!resData.ok) set({ error: resData.msg });
      else set({ events: [...resData.msg], error: null });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export const useGetEventById = create((set) => ({
  loading: false,
  error: null,
  eventData: {},
  event: {},

  getEventById: async (eventId) => {
    set({ loading: true });
    try {
      const res = await fetch(`${url}/event/get-event/${eventId}`);
      const resData = await res.json();
      if (!resData.ok) set({ error: resData.msg });
      else
        set({
          error: null,
          eventData: { ...resData.msg },
          event: { ...resData.msg },
        });
    } catch (err) {
      console.log(err.message);
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));
