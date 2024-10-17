import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 lg:px-10"> {/* Responsive grid */}
      {users.map((user) => (
        <UserCard 
          key={user.id}
          user={user}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default UserList;
