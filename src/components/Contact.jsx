
import {CgProfile} from 'react-icons/cg'
import {BsFillTrashFill} from 'react-icons/bs'

const Contact = ({contact,searchTerm,setContact}) => {


  const handleDelete = (id) => {
    setContact(contact.filter((item,index) => index !== id));
  };




  return (

    <div className='w-11/12 h-full flex flex-col gap-5'>
      {
      contact?.filter((val) =>{
        if(searchTerm === ""){
            return val;
        }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val;
        }
      }).map((item,index) => {
        return(
        <div key={index}  className='w-full h-14 border bg-orange-200 rounded-xl p-3 border-white flex items-center justify-between cursor-pointer hover:bg-orange-300'>
<div className='flex items-center justify-center gap-5'>
<CgProfile className='text-4xl'/>

        <div>
        <p>{item.name}</p>
        <p>{item.email}</p>
     </div>

     </div>


     <BsFillTrashFill className='cursor-pointer'
     onClick={()=>handleDelete(index)}
     />

        </div>
        )})                  
        }







    </div>
  )
}

export default Contact
