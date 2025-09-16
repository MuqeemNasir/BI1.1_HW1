import { useState, useEffect } from "react";
import useFetch from "../useFetch";

const Book = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const {data, loading, error} = useFetch(`${BASE_URL}/book`)
    // console.log(data)

    const [books, setBooks] = useState([])

    useEffect(() => {
        if(data){
            setBooks(data)
        }
    }, [data])

    const handleDelete = async(bookId) =>{
        try{
            const response = await fetch(`${BASE_URL}/book/${bookId}`, {
                method: 'DELETE',
            })
            if(!response.ok){
                throw new Error("Failed to delete book.")
            }

            const deleted = await response.json()
            if(deleted){
                setSuccessMessage(`Book Deleted Successfully`)
                // window.location.reload()
                setBooks((prev) => prev.filter((book) => book._id !== bookId))
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <h1>All Books</h1>
            <ul>
                {books?.map(book => (
                    <li key={book._id}>{book.title} <button onClick={() => handleDelete(book._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )
}

export default Book