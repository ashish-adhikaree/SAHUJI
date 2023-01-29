import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { PrimaryPopup } from "components";
import { useState } from "react";

export const QuickLinks = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const handleNotificationClick = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };
  const Notifications = [
    {body: "You received a new notification"}
  ]
  return (
    <ul className="text-dark flex items-center space-x-4">
      <li className="relative cursor-pointer">
        {isNotificationVisible && 
        <PrimaryPopup>
          <p className="text-black text-xl">Notifications</p>
          {Notifications.map((notification, index)=>(
            <p key={index} className="">{notification.body}</p>
          ))} 
        </PrimaryPopup>}
        <ChatBubbleRoundedIcon />
        <span className="alert-bubble">12</span>
      </li>
      <li className="relative cursor-pointer" onClick={handleNotificationClick}>
        <NotificationsRoundedIcon />
        <span className="alert-bubble">25</span>
      </li>
      <li className="h-8 w-8 rounded-full bg-gray-300"></li>
    </ul>
  );
};
