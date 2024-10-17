import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editUser } from '../features/userSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    const userToEdit = users.find((user) => user.id === parseInt(id));
    if (userToEdit) {
      setFormData({
        first_name: userToEdit.first_name,
        last_name: userToEdit.last_name,
        email: userToEdit.email,
      });
    } else {
      toast.error('User not found');
      navigate('/users');
    }
  }, [id, users, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ id, userData: formData }))
      .unwrap()
      .then(() => {
        toast.success('User updated successfully');
        navigate('/users');
      })
      .catch(() => {
        toast.error('Error updating user');
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Edit User</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserPage;
