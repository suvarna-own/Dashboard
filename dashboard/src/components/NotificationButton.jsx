import { Bell } from "lucide-react";

function NotificationButton() {
  return (
    <button className="notification-btn">
      <Bell size={24} color="#ffffff" strokeWidth={2} />
      {/* <span>Notifications</span> */}
    </button>
  );
}

export default NotificationButton;
