import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from "notistack"

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-brbb.onrender.com/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setPublishYear(response.data.publishYear);
        setLoading(false);
       

      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened.Please Check Console');
        console.log(error);
       
      });
  }, [])
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .put(`https://bookstore-brbb.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited Successfully', { variant: 'success' });
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
      <h1 className='text-4xl font-bold text-white  my-4'>Edit Book</h1>
      {loading ? (<Spinner />) : ('')}
      <div className='flex flex-col border-2 rounded-xl w-md-[600px] w-fit p-6 mx-auto'>
        <div className='my-4'>
          <label className='text-2xl font-semibold mr-4 text-gray-200'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg text-lg' />
        </div>
        <div className='my-4'>
        <label className='text-2xl font-semibold mr-4 text-gray-200'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg text-lg' />
        </div>
        <div className='my-4'>
        <label className='text-2xl font-semibold mr-4 text-gray-200'>Publish Year</label>
          <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg ' />
        </div>
        <button className='p-2 bg-orange-400 m-8 rounded-lg font-semibold text-xl' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook