import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const BookModal = ({ book, onClose }) => {
    return (
        <div className="fixed bg-black bg-opacity-60
    top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}>
            <div onClick={(event)=>event.stopPropagation()}
            className="w-md-[600px] w-fit max-w-full h-md-[500px] h-fit bg-white rounded-xl
            p-4 flex flex-col relative">
            <AiOutlineClose 
                className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                onClick={onClose}
            />
            <h2 className='w-fit px-4 py-2 bg-red-300 rounded-lg'>
                {book.publishYear}
            </h2>
            <h4 className='my-2 text-purple-700'>
                {book._id}
            </h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1 font-semibold text-xl'>{book.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1 text-lg'>{book.author}</h2>
            </div>
            <p className="mt-4">Anything You Want To Show</p>
            <p className="mt-2">It is a long established fact that a reader 
            will be distracted by the readable content of a page when looking
             at its layout. The point of using Lorem Ipsum is that it has 
             a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
               English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                 for 'lorem ipsum' will uncover many web sites still in their 
                 infancy. Various versions have evolved over the years, 
                 sometimes by accident, sometimes on purpose</p>

            </div>
            </div>
    )
}

export default BookModal