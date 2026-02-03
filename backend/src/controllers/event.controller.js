import Event from "../models/event.model.js";
import User from "../models/user.model.js";
import Club from "../models/club.model.js";
import { stringToArray } from "../utils/helper.js";
import mongoose from "mongoose";

export const createEvent = async (req, res) => {
  const body = req.body;
  if (!body)
    return res.status(400).json({ ok: false, msg: "Data is required" });
  const userId = req.userId;
  const user = await User.findById(userId).select("name academic.semester");

  const club = await Club.findById(body.clubId).select("clubName");
  if (!club)
    return res
      .status(404)
      .json({ ok: false, msg: "Club not find with that clubId" });

  const event = {
    ...body,
    highlights: stringToArray(body.highlights),
    from: {
      date: body.fromDate,
      time: body.fromTime,
    },
    to: {
      time: body.toTime,
      date: body.toDate,
    },
    createdBy: {
      userId,
      name: user.name,
      semester: user.academic.semester,
    },
    organizedBy: {
      clubId: club._id,
      clubName: club.clubName,
    },
    registrationDetail: { fee: body.fee },
  };
  const newEvent = await Event.create({ ...event });
  res.status(201).json({ ok: true, msg: newEvent });
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.aggregate([
      {
        $project: {
          _id: 1,
          title: 1,
          logo: 1,
          seats: 1,
          to: 1,
          from: 1,
          eventType: 1,
          status: 1,
          fee: "$registrationDetail.fee",
          participantsCount: { $size: { $ifNull: ["$participants", []] } },
        },
      },
      { $sort: { from: -1 } },
    ]);

    res.status(200).json({ ok: true, msg: events });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

export const getEventsByClubId = async (req, res) => {
  const { clubId } = req.params;
  try {
    const clubEvents = await Event.aggregate([
      {
        $match: {
          "organizedBy.clubId": new mongoose.Types.ObjectId(clubId),
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          eventType: 1,
          from: 1,
          to: 1,
          status: 1,
          seats: 1,
          participantsCount: {
            $size: { $ifNull: ["$participants", []] },
          },
        },
      },
    ]);

    res.status(200).json({ ok: true, msg: clubEvents });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: false, msg: err.message });
  }
};

export const getEventById = async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findById(eventId);
    res.status(200).json({ ok: true, msg: event });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ ok: false, msg: err.message });
  }
};

export const addParticipant = async (req, res) => {
  if (!req.body || !req.body.eventId) {
    return res.status(400).json({ ok: false, msg: "Event Id is required" });
  }
  try {
    const { eventId } = req.body;
    const userId = req.userId;

    const event = await Event.findByIdAndUpdate(
      eventId,
      { $addToSet: { participants: userId } },
      { new: true },
    );

    if (!event) {
      return res.status(404).json({ ok: false, msg: "Event not found" });
    }
    res.status(201).json({ ok: true, msg: event });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ ok: err.message });
  }
};

export const cancelParticipant = async (req, res) => {
  if (!req.body || !req.body.eventId) {
    return res.status(400).json({ ok: false, msg: "Event Id is required" });
  }
  try {
    const { eventId } = req.body;
    const userId = req.userId;

    const event = await Event.findByIdAndUpdate(
      eventId,
      { $pull: { participants: userId } },
      { new: true },
    );

    if (!event) {
      return res.status(404).json({ ok: false, msg: "Event not found" });
    }
    res.status(201).json({ ok: true, msg: event });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ ok: err.message });
  }
};

export const getParticipants = async (req, res) => {
  if (!req.body || !req.body.eventId) {
    return res.status(400).json({ ok: false, msg: "Event Id is required" });
  }

  try {
    const event = await Event.findById(req.body.eventId).populate({
      path: "participants",
      select: "_id name profilePic",
    });

    if(!event) {
      return res.status(404).json({ok: false, msg: 'Event not found'});
    }
    res.status(200).json({ok: true, msg: event.participants});
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ok: false, msg: err.message});
  }
};
