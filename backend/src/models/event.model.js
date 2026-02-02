import mongoose from "mongoose";

const participant = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
    semester: Number,
  },
  { timestamps: true },
);

const dateTime = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tagline: String,
    description: {
      type: String,
      default: "",
    },
    eventType: {
      type: String,
      enum: {
        values: [
          "conference",
          "workshop",
          "concert",
          "sports",
          "networking",
          "art",
          "hackathon",
          "seminar",
          "webinar",
          "gaming",
          "podcast"
        ],
        message: "Invalid event type",
      },
      lowercase: true,
      trim: true,
      default: "art",
    },
    logo: {
      type: String,
      default:
        "https://images.template.net/485176/Event-Company-Logo-Template-edit-online.png",
    },
    coverImage: {
      type: String,
      default: "",
    },
    from: dateTime,
    to: dateTime,
    deadline: Date,
    venue: {
      type: String,
      required: true,
    },
    participants: [participant],
    createdBy: {
      type: participant,
      _id: false,
    },
    registrationDetail: {
      type: {
        fee: {
          type: Number,
          default: 0,
        },
        accountDetails: {
          type: String,
          default: "",
        },
      },
      _id: false,
    },
    seats: {
      type: Number,
      default: -1
    },
    highlights: {
      type: [
        {
          type: String,
        },
      ],
      default: [],
    },
    organizedBy: {
      type: { clubId: mongoose.Schema.Types.ObjectId, clubName: String },
      required: true,
      _id: false
    },
    status: {
      type: String,
      enum: ["pending", "upcoming", "running", "completed", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
