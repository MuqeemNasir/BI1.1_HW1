import useFetch from "../useFetch"

const BookByAuthor = ({author}) => {
    const {data, loading, error} = useFetch(`https://bookapp-sooty.vercel.app/book/author/${author}`)
    
    return(
        data ? <div>
            <h2>Books By {author}</h2>
            <ul>{data.map(book => (
                <li>{book.title}</li>
            ))}</ul>
        </div> : loading && <p>Loading...</p>
    )
}

export default BookByAuthor