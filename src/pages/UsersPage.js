import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, setCurrentPage, removeUser } from '../features/userSlice';
import UserList from '../components/UserList';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {filteredUsers, loading, error, currentPage, totalPages } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error);  
    }
  }, [error]);

  useEffect(() => {
    dispatch(getUsers(currentPage));  
  }, [dispatch, currentPage]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(removeUser(id));
      toast.success('User deleted successfully'); 
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);  
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));  
  };

  return (
    <div className="container mx-auto py-10 px-4 lg:px-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">User List</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <UserList users={filteredUsers} onDelete={handleDelete} onEdit={handleEdit} />

          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
};

export default UsersPage;
