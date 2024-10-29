import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import { useState } from 'react'
import './App.css'

function App() {

  const [mailbox, setMailbox] = useState([
    {
      _id: 1,
      boxSize: 'Small',
      boxholder: 'Alex',
    }
  ])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Mailbox</h1>} />
        <Route path='/mailboxes' element={<MailboxList mailbox={mailbox} />}/>
        <Route path='/new-mailbox' element={<MailboxForm mailbox={mailbox} setMailbox={setMailbox}/>}/>
        <Route path='/mailboxes/:id' element={<MailboxDetails mailbox={mailbox}/>}/>
        <Route path='*' element={<h2>Whoops, nothing here!</h2>}/>
      </Routes>
    </>
  )
}

export default App
