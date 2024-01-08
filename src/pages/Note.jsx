import { CiSearch } from "react-icons/ci"
import {BsPlusLg} from 'react-icons/bs'
import { Link } from "react-router-dom"
import {MdClose} from 'react-icons/md'

import NoteItem from "../components/NoteItem"
import { useEffect, useState } from "react"

const Note = ({notes}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('')
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
                return note;
            }
        }))
    }

    useEffect(handleSearch, [text])

  return (
    <section>
        <header className="notes__header">
            {!showSearch && <h2>Notes</h2>}
            {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} autoFocus placeholder='Keyword...' />}
            <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose/> : <CiSearch/>}</button>
        </header>
        <div className="notes__container">
            {
                filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)
            }

        </div>
        <Link to='/create' className='btn add__btn'><BsPlusLg/></Link>

        <button></button>
    </section>
  )
}

export default Note