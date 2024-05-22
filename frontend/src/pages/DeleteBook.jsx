import React, { useState } from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from "notistack"

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://bookstore-brbb.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
      });
  };
  return (
    <div className='p-4 bg-gradient-to-l from-sky-500 to-indigo-500 opacity-80 min-h-screen'>
    <BackButton />
    <h1 className='text-4xl my-4 text-white font-bold'>Delete Book</h1>
    {loading ? (<Spinner />) : ('')}
    <div className='flex flex-col items-center border-2 rounded-xl w-md-[600px] w-fit p-8 mx-auto'>
       <h3 className='text-2xl text-white font-semibold'>Are You Sure You Want to delete this book?</h3>
      <button className='p-4 bg-red-600 text-white m-8 w-full rounded-xl text-xl font-semibold' 
      onClick={handleDeleteBook}>
      Yes,Delete it
      </button>
    </div>
  </div>
  )
}

export default DeleteBook