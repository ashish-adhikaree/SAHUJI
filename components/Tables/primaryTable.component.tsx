import type { BookingOrder, BookingOrderTableProps } from "@/types/booking";
import Image from "next/image";

const SingleRow = ({ booking, index }: { booking: BookingOrder, index:number }) => {
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
  return (
    <div className={`w-full grid grid-cols-[1fr_1.3fr_1.3fr_1fr_.5fr_.5fr_1fr] gap-2 cursor-pointer table_data_row text-center ${index % 2 === 0 && 'bg-gray-200'}`}>
      <div className="">{booking.bookingId}</div>
      <div className="flex items-center gap-2 activity capitalize">
        <Image
          className="rounded-full h-10 w-10"
          width={100}
          height={100}
          src={booking.activity.img}
          alt="Activity Image"
        />
        {booking.activity.title}
      </div>
      <div className="flex items-center gap-2 client capitalize">
        <Image
          className="rounded-full h-10 w-10"
          width={100}
          height={100}
          src={booking.client.img}
          alt="profile pic"
        />
        {booking.client.name}
      </div>
      <div>{new Date(booking.bookedAt).toDateString()}</div>
      <div>{booking.qty}</div>
      <div>{booking.price}</div>
      <div className={`text-white capitalize ${statusClass()} text-sm w-fit px-3 py-2 rounded-lg`}>
        {booking.status}
      </div>
    </div>
  );
};

export const PrimaryTable = ({ data }: BookingOrderTableProps) => {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div className="grid grid-cols-[1fr_1.3fr_1.3fr_1fr_.5fr_.5fr_1fr] bg-dark text-white gap-2 text-center">
          {data.headings.length > 0 &&
            data.headings.map((heading, index) => (
              <div className="py-4" key={index}>
                {heading}
              </div>
            ))}
      </div>
      <div className="bg-gray-100 text-sm">
        {data.rows.length > 0 &&
          data.rows.map((booking, index) => (
            <SingleRow booking={booking} key={index} index={index}/>
          ))}
      </div>
    </div>
  );
};
