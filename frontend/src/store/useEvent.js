import toast from "react-hot-toast";
import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const useCreateEvent = create((set, get) => ({
  loading: false,
  error: null,
  success: false,
  handleCreateEvent: async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data)
    const check = get().checkEventTiming(data.fromDate, data.fromTime, data.toDate, data.toTime);
    if(check) return toast.error('Date and time is invalid.');
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
        toast.error(resData.msg);
        set({ error: resData.msg });
        return;
      } else {
        e.target.reset();
        toast.success('Event created.')
        window.location.href = "/events";
      }
    } catch (err) {
      set({ error: err.message });
      toast.error(err.message);
    } finally {
      set({ loading: false });
      setTimeout(() => set({error: null}), 2000);
    }
  },

  checkEventTiming: (startDate, startTime, endDate, endTime) => {
    const from = get().combineDateTime(startDate, startTime);
    const to = get().combineDateTime(endDate, endTime);
    return to < from;
  },

  combineDateTime: (date, time) => {
    return new Date(`${date}T${time}:00`);
  }
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

export const useGetEventById = create((set, get) => ({
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
  imageLoader: false,
  changeCoverImage: async (image, close) => {
    const eventId = get().event._id;
    if(!eventId || !image) return;
    set({imageLoader: true});
    try {
      const res = await fetch(`${url}/event/change-cover`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({image, eventId})
      });

      const resData = await res.json();
      if(!resData.ok) {
        toast.error(resData.msg);
      }
      else {
        set({event: resData.msg});
        close(false);
        toast.success('Updated successfully.');
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    } finally {
      set({imageLoader: false});
    }
  }
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
