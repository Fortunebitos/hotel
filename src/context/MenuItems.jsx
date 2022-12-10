import DropDown from "../components/dropDown/DropDown";

const MenuItems = [
  {
    title: "HOME",
    path: "/hotel",
  },
  {
    title: <DropDown />,
  },
  {
    title: "GALLERY",
    path: "/gallery",
  },
  {
    title: "REVIEWS",
    path: "/reviews",
  },
  {
    title: "LOCATION",
    path: "/location",
  },
  {
    title: "MDAL",
    path: "/mdal",
  },
];

const MenuRoomsType = [
  {
    title: "Studio",
    img: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1665626267/sgbh_colection/pic6_pgsidz.jpg",
    sqm: 35.95,
    mGuest: 2,
  },
  {
    title: "Deluxe",
    img: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1665626267/sgbh_colection/pic1_yuyqvx.png",
    sqm: 47.93,
    mGuest: 2,
  },
  {
    title: "1 Bedroom Suite",
    img: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1665625676/sgbh_colection/main_yoxbfy.jpg",
    sqm: 68.96,
    mGuest: 2,
  },
  {
    title: "2 Bedroom Suite",
    img: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1665626268/sgbh_colection/pic7_xywkjq.jpg",
    sqm: 68.96,
    mGuest: 2,
  },
];

export { MenuItems, MenuRoomsType };
