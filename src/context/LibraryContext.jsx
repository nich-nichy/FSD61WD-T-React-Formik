import { createContext, useState } from 'react';

export const LibraryContext = createContext();

// For maintaining global state

const LibraryProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [showModel, setModel] = useState(false);
    const [newOneAdded, isNewOneAdded] = useState(false);
    const [currentMode, setCurrentMode] = useState('book');
    const [dataToEdit, setDataToEdit] = useState(null);
    const [toDelete, setToDelete] = useState(false);
    const [dataToDelete, setDataToDelete] = useState(false);
    const [currentBookToEdit, setCurrentBookToEdit] = useState({});
    const [currentAuthorsToEdit, setCurrentAuthorsToEdit] = useState({});
    return (
        <LibraryContext.Provider value={{ books, setBooks, authors, setAuthors, showModel, setModel, newOneAdded, isNewOneAdded, currentMode, setCurrentMode, dataToEdit, setDataToEdit, toDelete, setToDelete, dataToDelete, setDataToDelete, currentBookToEdit, setCurrentBookToEdit, currentAuthorsToEdit, setCurrentAuthorsToEdit }}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;