"use client";
import { useState } from "react";

const NotificationPane = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New comment on your post", isRead: false },
    { id: 2, message: "Your profile has been updated", isRead: true },
    { id: 3, message: "You have a new follower", isRead: false },
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="bg-gray-900 text-white w-full max-w-sm p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="space-y-2">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`flex items-center justify-between p-3 rounded-lg text-sm${
                notification.isRead
                  ? "bg-gray-700 text-gray-400"
                  : "bg-gray-800 text-white"
              }`}
            >
              <span>{notification.message}</span>
              {!notification.isRead && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Mark as read
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No new notifications</p>
      )}
      {notifications.length > 0 && (
        <button
          onClick={clearNotifications}
          className="mt-4 w-full text-sm bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default NotificationPane;
