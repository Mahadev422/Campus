import { useParams } from "react-router-dom";
import { useCreateEvent } from "../../store/useEvent";
import { useHelper } from "../../store/useHelper";

const CreateEventForm = () => {
  const { handleCreateEvent, loading } = useCreateEvent();
  const { eventTypes } = useHelper();
  const {clubId} = useParams();
  const desc = `The Annual Tech Summit 2024 brings together the brightest minds in technology to discuss and showcase groundbreaking innovations in artificial intelligence.`;
  
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 md:p-6">
      <form
        onSubmit={handleCreateEvent}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl shadow-gray-200/50 p-6 md:p-10 space-y-10 border border-gray-100"
      >
        {/* Header */}
        <div className="space-y-3 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text">
                Create New Event
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Fill in the details below to publish your event
              </p>
            </div>
          </div>
        </div>
        <input type="text" name="clubId" value={clubId} readOnly className="hidden" />
        {/* Basic Info */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-5 bg-indigo-600 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-800">
              Basic Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="grid gap-2">
              <label htmlFor="title">Event Title *</label>
              <input
                type="text"
                name="title"
                id="title"
                required
                placeholder="e.g.- Tech Summit 2024"
                className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
              />
            </div>
            <div>
              <label htmlFor="eventType">Event Type</label>
              <select
                required
                name="eventType"
                id="eventType"
                className={`w-full capitalize rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
              >
                <option value="">Select</option>
                {eventTypes.map((type, i) => (
                  <option className="capitalize" key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                name="tagline"
                id="tagline"
                placeholder="e.g.- Exploring Artificial Intelligence."
                className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              row={4}
              placeholder={`e.g.- ${desc}`}
              className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="venue">Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              required
              placeholder="e.g.- NLHC Computer Lab-1"
              className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
            />
          </div>
        </section>

        {/* Date & Time */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-5 bg-indigo-600 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-800">Schedule</h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <label htmlFor="from">From</label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="fromDate">Date</label>
                  <input
                    type="date"
                    id="fromDate"
                    name="fromDate"
                    required
                    className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
                  />
                </div>
                <div>
                  <label htmlFor="fromDate">Time</label>
                  <input
                    type="time"
                    id="fromTime"
                    name="fromTime"
                    required
                    placeholder="eg. 09:30 AM"
                    className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="from">To</label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="toDate">Date</label>
                  <input
                    type="date"
                    id="toDate"
                    name="toDate"
                    required
                    className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
                  />
                </div>
                <div>
                  <label htmlFor="fromDate">Time</label>
                  <input
                    type="time"
                    id="toTime"
                    name="toTime"
                    required
                    placeholder="eg. 09:30 PM"
                    className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-5 bg-indigo-600 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-800">Registration</h2>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="fee">Fee</label>
              <input
                className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
                type="number"
                name="fee"
                min={0}
                step={1}
                id="fee"
                placeholder="e.g- 0"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="seats">Seats (if limited)</label>
              <input
                className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
                type="number"
                name="seats"
                min={1}
                id="seats"
                placeholder="e.g- 0"
              />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="grid gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-5 bg-indigo-600 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-800">Highlights</h2>
          </div>
          <label htmlFor="highlights">Separated by comma ( , )</label>
          <textarea
            name="highlights"
            id="highlights"
            placeholder={`e.g.- Live AI Product Demos,${`\n`} Networking with Industry Leaders,`}
            className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
          ></textarea>
        </section>

        <section className="grid gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-5 bg-indigo-600 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-800">Brochure Link</h2>
          </div>
          <input
            type="text"
            placeholder="e.g.- https://drive.google.com/file"
            name="brochureLink"
            className={`w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-900
                focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                transition-all duration-200 bg-white
                placeholder:text-gray-400 hover:border-gray-400`}
          />
        </section>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="group w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Publish Event
          </button>
          <p className="text-center text-gray-500 text-sm mt-3">
            Your event will be reviewed and published as soon as possible.
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
