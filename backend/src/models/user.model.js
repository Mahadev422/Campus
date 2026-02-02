import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"]
    },
    phone: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    linkedin: {
      type: String,
      default: "",
    },
    github: {
      type: String,
      default: "",
    },
  },
  { _id: false },
);

const academicSchema = new mongoose.Schema(
  {
    department: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      default: 1,
    },
    cgpa: {
      type: mongoose.Schema.Types.Decimal128,
      set: (v) => {
        return new mongoose.Types.Decimal128(parseFloat(v).toFixed(2));
      },
      default: 0.0,
    },
    degree: {
      type: String,
      default: "Batchelor of Technology",
    },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    userName: {
      type: String,
      unique: true,
      required: true
    },

    contact: {
      type: contactSchema,
      default: () => ({}),
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    academic: {
      type: academicSchema,
      default: () => ({}),
    },
    profilePic: {
      type: String,
      default:
        "https://i.pinimg.com/736x/1e/31/22/1e31229772297aa0c61fc09b19082cca.jpg",
    },

    coverImage: {
      type: String,
      default:
        "https://www.iitism.ac.in/storage/files/banner1-1200x630.jpg?token=acfc868ef15b866c31590c2a2c462ed2",
    },
    clubsJoined: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Club",
        },
      ],
      default: [],
    },
    achievements: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Achievement'
        }
      ],
      default: []
    },
    eventsParticipated: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Event",
        },
      ],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    bio: {
      type: String,
      maxlength: 300,
      default: "I am the future of Country.",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
