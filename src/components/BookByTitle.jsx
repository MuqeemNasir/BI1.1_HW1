import useFetch from "../useFetch"
const BASE_URL = import.meta.env.VITE_API_URL;

const BookByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`${BASE_URL}/book/title/${title}`)
    console.log(data)

    return(
        data ? (<div>
            <h2>{data.title}</h2>
            <p><strong>Author: </strong>{data.author}</p>
            <p><strong>Release Year: </strong>{data.publishedYear}</p>
            <p><strong>Genre: </strong>{data.genre.join(", ")}</p>
        </div>) :( loading && <p>Loading...</p>)
    )
}

export default BookByTitle