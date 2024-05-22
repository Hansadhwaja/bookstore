import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://bookstore-brbb.onrender.com/books')
      .then((response) => {
        console.log(response.data.data);
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='p-4 bg-gradient-to-l from-sky-500 to-indigo-500 opacity-80 min-h-screen'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-white hover:bg-slate-200 text-slate-700 px-4 py-2 font-semibold rounded-lg'
          onClick={() => setShowType('table')}>
          Table
        </button>
        <button className='bg-white hover:bg-slate-200 px-4 py-2 font-semibold text-slate-700 rounded-lg'
          onClick={() => setShowType('card')}>
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl my-8 font-bold text-slate-50 mx-3'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-slate-50 text-4xl' />
        </Link>
      </div>
      {loading ? (<Spinner />)
        : (showType === 'card' ? (<BooksCard books={books} />)
          : (<BooksTable books={books} />))}
    </div>
  )
}

export default Home