import React, { useContext } from 'react'
import { LibraryContext } from '../context/LibraryContext';
import Model from '../components/models/Model';
import CardComponent from '../components/CardComponent';

const Author = () => {
    const { authors, setAuthors, setModel, showModel, setCurrentMode } = useContext(LibraryContext);
    console.log(showModel, "model")
    return (
        <div className="m-3">
            <h3>Author</h3>
            <hr />
            <div className="d-flex">
                <h3 className='me-3'>To add a book click here: </h3>
                <button className="btn btn-primary" onClick={() => {
                    console.log('clicked')
                    setModel(true)
                    setCurrentMode('author')
                }}>Add</button>
            </div>
            <Model />
            <hr />
            <div className='row gap-3 m-1'>
                {authors?.map((author, n) => {
                    return <CardComponent authorId={author.id} authorName={author.authorName} dob={author.dob} bio={author.bio} key={n} />
                })}
            </div>
        </div>
    )
}

export default Author