// import { FaBell, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const NotificationItem = ({ notification }) => {
  return (
    <>
      <div
        className={`flex items-center mb-2 rounded-lg
          ${notification.type === 'success' ? 'bg-gray-800' : ''}
          ${notification.type === 'info' ? 'bg-gray-800' : ''} 
          ${notification.type === 'warning' ? 'bg-gray-800' : ''} 
          ${notification.type === 'error' ? 'bg-gray-800' : ''}`}>
        {/* <div className="mr-4">
          {notification.type === 'success' && <FaCheckCircle className="text-green-300 text-xl" />}
          {notification.type === 'info' && <FaBell className="text-blue-300 text-xl" />}
          {notification.type === 'warning' && <FaTimesCircle className="text-red-300 text-xl" />}
          {notification.type === 'error' && <FaTimesCircle className="text-red-300 text-xl" />}
        </div> */}
        <div className="flex items-center bg-gray-800 w-full">
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <p className="w-full text-gray-300 py-3 px-3 border-b border-b-gray-500 cursor-pointer hover:bg-gray-700">{notification.message}</p>
      </div>
      </div>
    </>
  );
};

export default NotificationItem