
const Books = ({books}) => {
     return books.map((book,i)=> <div key={i}>{book.title}</div>);
    }

export default Books