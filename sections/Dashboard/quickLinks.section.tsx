import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

const QuickLinks = () => {
  return (
    <ul className="text-dark flex items-center space-x-4">
      <li className="relative cursor-pointer">
        <ChatBubbleRoundedIcon />
        <span className="alert-bubble">12</span>
      </li>
      <li className="relative cursor-pointer">
        <NotificationsRoundedIcon />
        <span className="alert-bubble">25</span>
      </li>
      <li className="h-8 w-8 rounded-full bg-gray-300"></li>
    </ul>
  );
};

export default QuickLinks;
