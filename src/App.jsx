import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Note from './pages/Note'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
import { useState } from 'react'

const App = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    console.log(notes)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

  return (
    <main id="app">
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Note notes={notes}/>} />
            <Route path="/create" element= {<CreateNote setNotes={setNotes}/>} />
            <Route path="/edit/:id" element= {<EditNote notes={notes} setNotes={setNotes}/>} />
        </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App