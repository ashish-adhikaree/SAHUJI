import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import BallotRoundedIcon from "@mui/icons-material/BallotRounded";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import AutoAwesomeMosaicRoundedIcon from "@mui/icons-material/AutoAwesomeMosaicRounded";
import { Mrs_Sheppards } from "@next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const mrs_sheppards = Mrs_Sheppards({ weight: "400", subsets: ["latin"] });

const navLinks = [
  { title: "Dashboard",url:"/", icon: <DashboardRoundedIcon /> },
  { title: "Services",url:"", icon: <AutoAwesomeMosaicRoundedIcon /> },
  { title: "Bookings",url:"", icon: <BallotRoundedIcon /> },
  { title: "Messages",url:"", icon: <EmailRoundedIcon /> },
  { title: "Reviews",url:"", icon: <ReviewsRoundedIcon /> },
  { title: "Promotion",url:"/promotion", icon: <CampaignRoundedIcon /> },
  { title: "Team",url:"", icon: <GroupsRoundedIcon /> },
  { title: "Shop",url:"", icon: <StoreRoundedIcon /> },
];

export const Sidebar = () => {
  const relativePath = useRouter().asPath
  return (
    <div className="flex flex-col items-center justify-between bg-dark text-white h-[100vh] sticky top-0 left-0 pt-[10px]">
      <Image className="md:hidden cursor-pointer" width={40} height={40} alt="Logo" src="/logo.svg"/>
      <p className={`text-center ${mrs_sheppards.className} text-3xl hidden md:inline`}>Sahuji</p>
      <ul className="md:-mt-[50px]">
        {navLinks.map((link, index) => (       
            <Link href={link.url} key={index}>
            <li
            title={link.title}
            className={`md:pl-[40px] md:min-w-[250px] py-2 cursor-pointer space-x-2 hover:text-customPurple md:hover:activeLink ${relativePath === link.url && "activeLink"}`}
          >
            {link.icon}
            <span className="font-semibold hidden md:inline">{link.title}</span>
          </li>
          </Link>
        ))}
      </ul>
      <div className="bg-gray-50 text-dark w-full text-center py-3 cursor-pointer">Logout</div>
    </div>
  );
}
