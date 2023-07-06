import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NewNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const characterLimit = 32;
    const handleTitleChange = (event) => {
        if (event.target.value.length < characterLimit) {
            setNoteTitle(event.target.value);
        }
    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
            handleAddNote(noteText, noteTitle);
            setNoteText('');
            setNoteTitle('');
        }
    }
    const handleNoteChange = (event) => {
        //if (noteText.length <= characterLimit) {
            setNoteText(event.target.value);
        //}
    }
    return(
        <div className="note newNote flex justify-between">
            <div style={{marginTop: '0.5em'}}>
                <div className='note-header' style={{marginBottom: '0.5em'}}>
                    <small className="dark:text-black">00/00/0000</small>
                </div>
                <div><textarea rows={1} className='note-title textarea-custom textarea-title' placeholder="[Type Title Here]"
                    value={noteTitle} onChange={handleTitleChange}></textarea></div>
                <div><textarea className="noteText textarea-custom" placeholder="Start typing here..." onChange={handleNoteChange}
                value={noteText}></textarea></div>
            </div>
            <div className="note-header">
                <small>{characterLimit - noteTitle.length} Character(s) Remaining in Title</small>
                <div className="icons">
                    <FontAwesomeIcon icon={faSave} className="edit-and-delete-icon save hover:text-[#1640f7] dark:text-black" 
                    onClick={handleSaveClick} size="lg" />
                </div>
            </div>
        </div>
    )
}

export default NewNote;