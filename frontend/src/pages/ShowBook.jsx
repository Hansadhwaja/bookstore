import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id}=useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-brbb.onrender.com/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='p-4 bg-gradient-to-l from-sky-500 to-indigo-500 opacity-80 min-h-screen'>
      <BackButton />
      <h1 className='text-4xl my-4 text-white font-bold'>Show Book</h1>
      {loading ? (
        <Spinner />
      ):(
        <div className='flex flex-col border-2 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white font-semibold'>Id</span>
            <span className='text-slate-100'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white font-semibold'>Title</span>
            <span className='text-slate-100'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white font-semibold'>Author</span>
            <span className='text-slate-100'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white font-semibold'>Publish Year</span>
            <span className='text-slate-100'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white font-semibold'>Create Time</span>
            <span className='text-slate-100'>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white font-semibold'>Last Update Time</span>
            <span className='text-slate-100'>{new Date(book.updatedAt).toString()}</span>
          </div>
         </div>
      )}
    </div>
  )
}

export default ShowBook