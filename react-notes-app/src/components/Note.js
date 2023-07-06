import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

const Note = ({ id, title, text, date, background, handleNoteChange, handleTitleChange, handleDeleteNote, handleUpdateNote }) => {
    /**const [isTypeable, setIsTypeable] = useState(false);
    const handleEditClick = () => {
        setIsTypeable(!isTypeable);
    };*/
    const [noteText, setNoteText] = useState(text);
    const [noteTitle, setNoteTitle] = useState(title);
    const noteTextRef = useRef(null);
    const noteTitleRef = useRef(null);

    useEffect(() => {
        if (noteTitleRef.current) {
          noteTitleRef.current.selectionStart = noteTitleRef.current.selectionEnd = noteTitleRef.current.value.length;
        }
    
        if (noteTextRef.current) {
          noteTextRef.current.selectionStart = noteTextRef.current.selectionEnd = noteTextRef.current.value.length;
        }
    }, []);

    const handleTitleInputChange = (event) => {
        if (event.target.value.length < 32) {
            setNoteTitle(event.target.value);
        }
    };

    const handleNoteInputChange = (event) => {
        setNoteText(event.target.value);
    };

    return(
        <div className="note" style={{backgroundColor: background}}>
            <div className="note-header">
                <small className="dark:text-black">{date}</small>
                <div className="icons">
                    {/**<FontAwesomeIcon icon={faEdit} className='edit-and-delete-icon hover:text-[#1640f7] dark:text-black' size='1.3em' 
                    onClick={() => handleEditClick(id)}/>*/}
                    <FontAwesomeIcon icon={faSave} className="edit-and-delete-icon save hover:text-[#1640f7] dark:text-black" 
                    onClick={() => handleUpdateNote(id, noteTitle, noteText)} size="lg" />
                    <FontAwesomeIcon icon={faTrash} className='edit-and-delete-icon hover:text-[#1640f7] dark:text-black' size='1.3em' 
                    onClick={() => handleDeleteNote(id)}/>
                </div>
            </div>
            <div><textarea rows={1} className='note-title textarea-custom textarea-title' value={noteTitle} ref={noteTitleRef}
                placeholder={"Type Title Here"} style={{background: "none"}} onChange={handleTitleInputChange}></textarea></div>
            <div><textarea className="noteText textarea-custom" onChange={handleNoteInputChange} value={noteText}
                placeholder={"Start typing here..."} ref={noteTextRef} style={{background: "none", height: "14em"}}></textarea></div>
            {/*<p size='4em'>Divya</p>*/}
        </div>
    )
};

export default Note;