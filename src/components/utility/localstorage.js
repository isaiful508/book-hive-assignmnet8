
//saved to local storage
 export   const savedToLocalStorage = (bookDetails) => {
    const readBook = JSON.parse(localStorage.getItem('books')) || [];
    const readBookExist = readBook.find(item => item.id === bookDetails.id);
    if (readBookExist) {
        alert('already added.....')
    } else {
        readBook.push(bookDetails);

        localStorage.setItem('books', JSON.stringify(readBook));
        alert('data added successfully')

    }
}


//get book from local storage

export const  getBookFromLocalStorage = () =>{
    const bookFromLocalStorage = JSON.parse(localStorage.getItem('books')) || [];
    return bookFromLocalStorage;
}
