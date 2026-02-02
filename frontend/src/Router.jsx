import { createBrowserRouter } from "react-router-dom";
// local files
import App from "./pages/App";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Me from "./pages/profile/Me";
import UserProfile from "./pages/profile/UserProfile";
import AllClubs from "./pages/clubs/AllClubs";
import Club from "./pages/clubs/Club";
import ClubMembers from "./pages/clubs/ClubMembers";
import ClubOverview from "./pages/clubs/ClubOverview";
import CreateClub from "./pages/clubs/CreateClub";
import ClubSettings from "./pages/clubs/ClubSettings";
import AllEvents from "./pages/events/AllEvents";
import Event from "./pages/events/Event";
import EventOverview from "./pages/events/EventOverview";
import EventParticipants from "./pages/events/EventParticipants";
import Resources from "./pages/resources/Resources";
import ClubEvent from "./pages/clubs/ClubEvent";
import ClubGallery from "./pages/clubs/ClubGallery";
import ClubRequests from "./pages/clubs/ClubRequests";
import EventGallery from "./pages/events/EventGallery";
import ProfileOverview from "./pages/profile/ProfileOverview";
import MyEvents from "./pages/profile/MyEvents";
import MyClubs from "./pages/profile/MyClubs";
import MyAchievements from "./pages/profile/MyAchievements";
import CreateEvent from "./pages/events/CreateEventForm";
import MySettings from "./pages/profile/MySettings";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        children: [
          {
            path: "",
            element: <Me />,
            children: [
              {
                index: true,
                element: <ProfileOverview />,
              },
              {
                path: "events",
                element: <MyEvents />,
              },
              {
                path: "clubs",
                element: <MyClubs />,
              },
              {
                path: "achievements",
                element: <MyAchievements />,
              },
              {
                path: "settings",
                element: <MySettings />,
              },
            ],
          },
          {
            path: ":userId",
            element: <UserProfile />,
          },
        ],
      },
      {
        path: "/clubs",
        children: [
          {
            index: true,
            element: <AllClubs />,
          },
          {
            path: ":clubId",
            element: <Club />,
            children: [
              {
                index: true,
                element: <ClubOverview />,
              },
              {
                path: "members",
                element: <ClubMembers />,
              },
              {
                path: "events",
                element: <ClubEvent />,
              },
              {
                path: "gallery",
                element: <ClubGallery />,
              },
              {
                path: "requests",
                element: <ClubRequests />,
              },
              {
                path: "settings",
                element: <ClubSettings />,
              }
            ],
          },
          {
            path: "create-club",
            element: <CreateClub />,
          },
        ],
      },
      {
        path: "/events",
        children: [
          {
            index: true,
            element: <AllEvents />,
          },
          {
            path: ":eventId",
            element: <Event />,
            children: [
              {
                index: true,
                element: <EventOverview />,
              },
              {
                path: "participants",
                element: <EventParticipants />,
              },
              {
                path: "gallery",
                element: <EventGallery />,
              },
            ],
          },
          {
            path: "create-event",
            element: <CreateEvent />,
          },
        ],
      },
      {
        path: "resources",
        element: <Resources />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
