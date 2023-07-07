import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Modal from './components/Modal'
import Contact from './components/Contact'


const App = () => {
  //search contact

  const [searchTerm,setSearchTerm] = useState("")

  const [isOpen, setIsOpen] = useState(true);


// Add to screen

  const [inpValue,setInpValue] = useState({
  name: "",
  email: ""
});

const [contact,setContact] = useState([])





  return (
    <>
    <div className='app  overflow-x-hidden' > 
      <Navbar/>
      <Search isOpen={isOpen} setIsOpen={setIsOpen} contact={contact}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      />
      <Modal 
      isOpen={isOpen} 
      setIsOpen={setIsOpen}  
      inpValue={inpValue}
      setInpValue={setInpValue}
      contact={contact}
      setContact={setContact}

      />





<Contact 
   isOpen={isOpen} 
   setIsOpen={setIsOpen}  
contact={contact}
searchTerm={searchTerm}
setSearchTerm={setSearchTerm}
setContact={setContact}
/>








    </div>
    </>
  )
}

export default App 
