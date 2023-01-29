import { BookingTable, BookingCard } from "components";
import { BookingOrderTableProps } from "@/types/booking";
import { useMediaQuery } from "react-responsive";

const data: BookingOrderTableProps["data"] = {
  headings: [
    "Order Id",
    "Activity",
    "Client",
    "Booked At",
    "Quantity",
    "Price",
    "Status",
  ],
  rows: [
    {
      bookingId: 1,
      activity: {
        img: "https://img.freepik.com/free-photo/two-parachutists-against-blue-sky_268835-3456.jpg?w=740&t=st=1674357503~exp=1674358103~hmac=03c5f4941a254fbbb9203400af4d4f6e8f367d279e5e1db506626fb6e623e5fb",
        title: "paragliding",
      },
      client: {
        img: "https://yt3.ggpht.com/zVjSt73mtB2TaE1AgP4Kl_I2obj-Km0KOpaDWUIToOo4dwCN14AjKEjqE3iV8jkD1XEebLl3ww=s176-c-k-c0x00ffffff-no-rj-mo",
        name: "Elon Musk",
      },
      bookedAt: Date.now() - 30 * 24 * 60 * 60 * 1000 * Math.random(),
      qty: 2,
      price: 120,
      status: "pending",
    },
    {
      bookingId: 2,
      activity: {
        img: "https://img.freepik.com/free-photo/stunning-shot-young-man-climbing-up-cliff-cold-foggy-day_181624-18833.jpg?w=740&t=st=1674722973~exp=1674723573~hmac=ac11e3c731f813770511000e873498dca90f82ec8e720e89d10565d6eb443a8b",
        title: "rock climbing",
      },
      client: {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJV-BviaWnNvLLWoK18JTaIs6IC6adCul_JzqgQtkA=s176-c-k-c0x00ffffff-no-rj-mo",
        name: "Mr. Beast",
      },
      bookedAt: Date.now() - 30 * 24 * 60 * 60 * 1000 * Math.random(),
      qty: 2,
      price: 230,
      status: "completed",
    },
    {
      bookingId: 3,
      activity: {
        img: "https://img.freepik.com/free-photo/sportive-man-jumping-adventure_116123-4.jpg?w=740&t=st=1674722950~exp=1674723550~hmac=2a208faebab4780f4cbaecf75e505ac4f6a3641fec39c4e54bf9a134fa821942",
        title: "bungee",
      },
      client: {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJVlaGl845FGe_jZfUh-Nau8nj8dVgZgs0oqnskYlQ=s176-c-k-c0x00ffffff-no-rj-mo",
        name: "Niko Omilana",
      },
      bookedAt: Date.now() - 30 * 24 * 60 * 60 * 1000 * Math.random(),
      qty: 1,
      price: 65,
      status: "cancelled",
    },
    {
      bookingId: 4,
      activity: {
        img: "https://img.freepik.com/premium-photo/group-men-women-are-rafting-river-extreme-fun-sport_88194-1604.jpg",
        title: "rafting",
      },
      client: {
        img: "https://yt3.ggpht.com/uUfOrEH3ZGDTadl_LVSJlBSQrjZ96CMbIZMUtUeqJhHvgM7xcykdgysscHTd3XALYPVLHelmKg=s176-c-k-c0x00ffffff-no-rj-mo",
        name: "Airrack",
      },
      bookedAt: Date.now() - 30 * 24 * 60 * 60 * 1000 * Math.random(),
      qty: 3,
      price: 300,
      status: "fulfilled",
    },
  ],
};

export const RecentBookings = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div className="pb-5">
      <h1 className="text-[20px] md:text-3xl uppercase py-5 ">
        recent Bookings
      </h1>
      
      {isLargeScreen ? (
        <BookingTable data={data} />
      ) : (
        <div className="grid lg:grid-cols-2 gap-4">
          {data.rows.map((booking, index) => (
            <BookingCard key={index} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};
