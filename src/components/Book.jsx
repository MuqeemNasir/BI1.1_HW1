import useFetch from "../useFetch";

const Book = () => {
    const {data, loading, error} = useFetch("/book")
    console.log(data)

    return(
        <div>
            <h1>All Books</h1>
            <ul>
                {data?.map(book => (
                    <li>{book.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Book