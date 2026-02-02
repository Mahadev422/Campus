import mongoose, { mongo } from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: String,
    role: {
      type: String,
      default: "member",
    },
  },
  { timestamps: true },
);

const detailsSchema = new mongoose.Schema(
  {
    website: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    instagram: {
      type: String,
      default: "",
    },
    twitter: {
      type: String,
      default: "",
    },
    linkedin: {
      type: String,
      default: "",
    },
    youtube: {
      type: String,
      default: "",
    },
  },
  { _id: false },
);

const clubSchema = new mongoose.Schema(
  {
    clubName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    tagline: {
      type: String,
      default: "Build for Your Future.",
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: [
          "technology",
          "sports",
          "arts",
          "photography",
          "literature",
          "gaming",
          "film",
          "science",
          "development",
          "others",
        ],
        message: "Invalid category",
      },
    },
    logo: {
      type: String,
      default:
        "https://images.seeklogo.com/logo-png/24/1/club-especial-logo-png_seeklogo-246587.png",
    },
    coverImage: {
      type: String,
      default:
        "https://graphicsfamily.com/wp-content/uploads/2020/08/Brand-New-Fight-Club-Logo-Design-3d-scaled.jpg",
    },
    details: {
      type: detailsSchema,
      default: () => ({}),
    },
    description: String,
    coordinator: {
      type: [memberSchema],
      required: true,
      validate: {
        validator: function (value) {
          return value.length <= 2;
        },
        message: "Maximum 2 coordinators allowed",
      },
    },
    members: {
      type: [memberSchema],
      default: []
    },
    achievements: {
      type: [
        {
          title: { type: String, required: true },
          description: String,
        },
      ],
      default: [],
    },
    requestForJoin: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    requirements: {
      type: [String],
      default: [
        "Creative Mind.",
        "Brainstorm Ideas.",
        "Curiosity for learning.",
      ],
    },
    approved: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    recent: {
      type: String,
      default: 'Created this Club.'
    },
    rating: {
      type: Number,
      default: 1
    },
    location: {
      type: String,
      required: true
    }
  },
  { timestamps: true },
);

const Club = mongoose.model("Club", clubSchema);
export default Club;
