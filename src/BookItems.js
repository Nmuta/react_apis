


const BookItems = (props) => {
    console.log("I have books", props)
    return props.books.map((book,i) => <div key={i}>{book.title}</div> )
}

export default BookItems;