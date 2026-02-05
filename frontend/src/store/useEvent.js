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
  event: {},

  getEventById: async (eventId) => {
    set({ loading: true });
    try {
      const res = await fetch(`${url}/event/get-event/${eventId}`);
      const resData = await res.json();
      if (!resData.ok) set({ error: resData.msg });
      else set({ event: { ...resData.msg } });
    } catch (err) {
      console.log(err.message);
      set({ error: err.message });
    } finally {
      set({ loading: false });
      setTimeout(() => set({ error: null }));
    }
  },

  addParticipantLoader: false,
  addParticipant: async (eventId) => {
    set({ addParticipantLoader: true });
    try {
      const res = await fetch(`${url}/event/add-participant`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
      });

      const resData = await res.json();
      if (!resData.ok) {
        set({ error: resData.msg });
      } else {
        set({ event: resData.msg });
      }
    } catch (err) {
      console.log(err.message);
      set({ error: err.message });
    } finally {
      set({ addParticipantLoader: false });
      setTimeout(() => set({ error: null }), 2000);
    }
  },
  cancelParticipant: async (eventId) => {
    set({ addParticipantLoader: true });
    try {
      const res = await fetch(`${url}/event/cancel-participant`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
      });

      const resData = await res.json();

      if (!resData.ok) {
        set({ error: resData.msg });
      } else {
        set({ event: resData.msg });
      }
    } catch (err) {
      console.log(err.message);
      set({ error: err.message });
    } finally {
      set({ addParticipantLoader: false });
      setTimeout(() => set({ error: null }), 2000);
    }
  },
}));

export const useGetParticipants = create((set) => ({
  participantsLoader: false,
  error: null,
  participants: [],

  getParticipants: async (eventId) => {
    try {
      const res = await fetch(`${url}/event/get-participants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
        credentials: "include",
      });
      const resData = await res.json();
      if (!resData.ok) {
        set({ error: resData.msg });
      } else {
        set({ participants: resData.msg });
      }
    } catch (err) {
      console.log(err.message);
      set({ error: err.message });
    } finally {
      set({ loading: false });
      setTimeout(() => set({ error: null }));
    }
  },
}));
