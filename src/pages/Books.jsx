import React, { useContext } from 'react'
import { LibraryContext } from '../context/LibraryContext';
import Model from '../components/models/Model';
import CardComponent from '../components/CardComponent';

const Book = () => {
    const { books, setBooks, setModel, showModel } = useContext(LibraryContext);
    console.log(showModel, "model")
    return (
        <div className="m-3">
            <h3>Books</h3>
            <hr />
            <div className="d-flex">
                <h3 className='me-3'>To add a book click here: </h3>
                <button className="btn btn-primary" onClick={() => {
                    console.log('clicked')
                    setModel(true)
                }}>Add</button>
            </div>
            <Model />
            <hr />
            <CardComponent />
        </div>

    )
}

export default Book