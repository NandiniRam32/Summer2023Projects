import Note from './Note';
import NewNote from './NewNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote, handleUpdateNote }) => {
    return(
        <div className="notes-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" style={{margin: '10px'}}>
            {notes.map((note) => (
                <Note key={note.id} id={note.id} title={note.title} text={note.text} date={note.date} background={note.background} 
                handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} handleUpdateNote={handleUpdateNote}/>
            ))}
            <NewNote handleAddNote={handleAddNote}/>
        </div>
    )
};

export default NotesList;