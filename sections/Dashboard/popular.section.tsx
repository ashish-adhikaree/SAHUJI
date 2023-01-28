import { useState } from "react";
import Image from "next/image";
import { Button_Var1 } from "@/components/Buttons";

const activities = [
  {
    title: "Paragliding",
    img: "https://img.freepik.com/free-photo/two-parachutists-against-blue-sky_268835-3456.jpg?w=740&t=st=1674357503~exp=1674358103~hmac=03c5f4941a254fbbb9203400af4d4f6e8f367d279e5e1db506626fb6e623e5fb",
    bookings: 20,
  },
  {
    title: "Sky Diving",
    img: "https://img.freepik.com/free-vector/skydiving-extreme-sport-adventure-flat-abstract-with-participants-jumping-from-airplane-free-fall-stage_1284-28626.jpg?w=360&t=st=1674367122~exp=1674367722~hmac=cc247a00de90f5a500bd228d5be2e386de9847f6e0a7a0d01edf9eb04ba3d58d",
    bookings: 10,
  },
  {
    title: "Bungee Jump",
    img: "https://img.freepik.com/free-photo/extreme-sports-ropejumping_1385-3152.jpg?w=740&t=st=1674367171~exp=1674367771~hmac=ced3490fbe9156a725e5b5c54580dc905c67f0307da8677ef9511a6b9b7e3d84",
    bookings: 5,
  },
];
const packages = [
  {
    title: "Family Pack",
    img: "https://img.freepik.com/free-photo/family-moving-using-boxes_1157-35481.jpg?w=740&t=st=1674367499~exp=1674368099~hmac=18bbe1bf9382fc62cc25acf7a2d53d91cff1bd6326b5ef5c415ffa5e86708f96",
    bookings: 10,
  },
  {
    title: "Diamond Package",
    img: "https://img.freepik.com/free-vector/sparkly-gold-diamond-icon_53876-115029.jpg?w=740&t=st=1674367535~exp=1674368135~hmac=ebe0858cc68bc138b4c7ac77fb9b62b90594068d3177cb2bcb1ddb29d873d241",
    bookings: 8,
  },
  {
    title: "Winter Seasonal",
    img: "https://img.freepik.com/free-vector/vector-illustration-winter-landscape_1441-130.jpg?w=826&t=st=1674367570~exp=1674368170~hmac=3c4881878dc20b0478496c175d9b9354a35b024f983c5b68d689deab5cf8ba2d",
    bookings: 3,
  },
];

const ListItem = ({
  index,
  service,
}: {
  index: number;
  service: { title: string; img: string; bookings: number };
}) => {
  return (
    <div
      className={`h-20 flex gap-4 rounded-[37px] p-3 my-5 border-[.5px] border-dark max-w-[350px] ${
        index === 0 && "bg-dark text-white"
      } hover:bg-dark hover:text-white cursor-pointer px-10`}
    >
      <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          width={100}
          height={100}
          src={service.img}
          alt="service-image"
        />
      </div>
      <div className="grow self-start">
        <h2 className="whitespace-nowrap">{service.title}</h2>
        <p>{service.bookings} Booked</p>
      </div>
    </div>
  );
};

const Popular = () => {
  const [categorySelected, setCategory] = useState(activities);
  return (
    <div className="">
      <h1 className="uppercase font-bold text-black text-2xl py-5">
        Popular now
      </h1>
      <div className="pb-5">
        <Button_Var1
          isSelected={categorySelected === activities ? true : false}
          onClick={() => {
            setCategory(activities);
          }}
          title= {"activities"}
        />
        <Button_Var1
          isSelected={categorySelected === packages ? true : false}
          onClick={() => {
            setCategory(packages);
          }}
          title= {"packages"}
        />
      </div>
      {categorySelected.map((service, index) => (
        <ListItem key={index} index={index} service={service} />
      ))}
    </div>
  );
};

export default Popular;
