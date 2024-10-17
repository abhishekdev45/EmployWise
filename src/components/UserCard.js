import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; 

const UserCard = ({ user, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-20 h-20 rounded-full"
      />
      <h2 className="text-xl mt-4 font-medium text-center">
        {user.first_name} {user.last_name}
      </h2>
      <p className="text-center text-gray-500">{user.email}</p>
      
      <div className="flex justify-between w-full mt-4 px-4">
        <button
          onClick={() => onEdit(user.id)}
          className="text-blue-500 flex items-center space-x-1 hover:underline"
        >
          <FaEdit /> <span>Edit</span> 
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="text-red-500 flex items-center space-x-1 hover:underline"
        >
          <FaTrash /> <span>Delete</span> 
        </button>
      </div>
    </div>
  );
};

export default UserCard;
