import { BookingOrder } from "@/types/booking";
import Image from "next/image";

const BookingCard = ({ booking }: { booking: BookingOrder }) => {
  const statusClass = () => {
    switch (booking.status) {
      case "pending":
        return "bg-orange-500";
      case "completed":
        return "bg-green-500";
      case "cancelled":
        return "bg-red-500";
      case "fulfilled":
        return "bg-blue-500";
      default:
        return "";
    }
  };
  const cardClass = () => {
    switch (booking.status) {
      case "pending":
        return "orange_gradient";
      case "completed":
        return "green_gradient";
      case "cancelled":
        return "red_gradient";
      case "fulfilled":
        return "darkblue_gradient";
      default:
        return "";
    }
  };
  return (
    <div className={`${cardClass()} mt-5 px-5 py-5 rounded-xl cursor-pointer`}>
      <div className="flex justify-between items-center pb-5">
        <p className="text-gray-600 font-light">
          Order Id: <span className="italic">{booking.bookingId}</span>
        </p>
        <div
          className={`text-white capitalize ${statusClass()} text-sm w-fit px-3 py-2 rounded-lg`}
        >
          {booking.status}
        </div>
      </div>
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full h-10 w-10"
            width={100}
            height={100}
            src={booking.client.img}
            alt="profile pic"
          />
          <span className="capitalize font-bold">{booking.client.name}</span>
          <span className="text-gray-700 italic text-sm">booked</span>
        </div>
        <p className="text-2xl font-bold ">
          <span>$</span>
          {booking.price}
        </p>
      </div>
      <div className="ml-10 flex items-center justify-between">
        <div className="flex items-center gap-2 activity capitalize">
          <Image
            className="rounded-full h-7 w-7"
            width={100}
            height={100}
            src={booking.activity.img}
            alt="Activity Image"
          />
          {booking.activity.title}
        </div>
        <p className="text-sm">
          <span>Quantity: </span>
          {booking.qty}
        </p>
      </div>
      <p className="mt-5 text-sm text-gray-600 light">On {new Date(booking.bookedAt).toDateString()}</p>
    </div>
  );
};
export default BookingCard;
