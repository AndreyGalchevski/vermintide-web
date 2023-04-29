interface Event {
  name: string;
  venue: string;
  city: string;
  country: string;
  date: Date;
  fbEvent?: string;
  image: string;
}

const events: Array<Event> = [
  {
    name: "At the Gallows End!",
    venue: "Blaze bar",
    city: "Jerusalem",
    country: "Israel",
    date: new Date(2022, 8, 10, 21, 0),
    fbEvent: "https://www.facebook.com/events/819396026173679",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1659794917/vermintide/events/290134744_743099700298299_4630275179556612941_n.jpg",
  },
  {
    name: "Spit Ya Teeth",
    venue: "Levontin",
    city: "Tel Aviv",
    country: "Israel",
    date: new Date(2022, 7, 19, 20, 0),
    fbEvent: "https://www.facebook.com/events/3331730207115917",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1658597242/vermintide/events/AB52C2F2-064D-4FF5-BC21-A1A496EF27D0.jpg",
  },
  {
    name: "PROCEEDS THE WEEDIAN",
    venue: "Z City",
    city: "Haifa",
    country: "Israel",
    date: new Date(2022, 7, 13, 20, 0),
    fbEvent: "https://www.facebook.com/events/764736801359338",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1656678898/vermintide/events/287509664_159301629973542_4750842011531108146_n.png",
  },
  {
    name: "ХⒶнзир 666",
    venue: "Beit Alpha",
    city: "Tel Aviv",
    country: "Israel",
    date: new Date(2022, 7, 12, 20, 0),
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1658597229/vermintide/events/A7CA046B-9B97-434C-B476-BA829E35E8A7.jpg",
  },
  {
    name: "Maalim Shedim 3",
    venue: "Jan Jack",
    city: "Tel Aviv",
    country: "Israel",
    date: new Date(2022, 5, 9, 20, 0),
    fbEvent: "https://www.facebook.com/events/291156976474765",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1655548752/vermintide/events/45C38253-CAAD-4A0A-8988-12F146671F5E.jpg",
  },
  {
    name: "Bonegrinder",
    venue: "Jan Jack",
    city: "Tel Aviv",
    country: "Israel",
    date: new Date(2022, 4, 14, 21, 0),
    fbEvent: "https://www.facebook.com/events/5111588252240950",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1655549224/vermintide/events/5AD0D111-459D-4F9F-A0BE-3807C6D0B973.jpg",
  },
  {
    name: "Grind Your Mind",
    venue: "Jan Jack",
    city: "Tel Aviv",
    country: "Israel",
    date: new Date(2022, 1, 3, 21, 0),
    fbEvent: "https://www.facebook.com/events/441334920975550",
    image:
      "https://res.cloudinary.com/dqvimfd8b/image/upload/f_auto/v1642267563/vermintide/events/jan-jack-03022022.jpg",
  },
];

export default events;
