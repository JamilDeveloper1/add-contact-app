import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'

export default function Modal({isOpen,setIsOpen,inpValue,setInpValue,contact,setContact}) {

    function closeModal() {
      setIsOpen(false)
    }
  function handleChange(e){
    const {name,value} = e.target;

    setInpValue(prev =>{
        return{
            ...prev,[name]:value
        }
    })
  }

  useEffect(()=>{
    closeModal();
  },[])

function handleClick(){
    if(inpValue.name && inpValue.email !== ""){
        setContact([...contact,inpValue]);
        setInpValue({
            name:"",
            email:""
        });
        closeModal();
}

}





  return (
    <>
      <Transition appear show={isOpen}  as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-300 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-100"
              >

            <Dialog.Panel className="w-5/6 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
               
            <div className='flex flex-col'>
            <label htmlFor="name" className='mt-2'>Name</label>

            <input 
            type="text" 
            id='name' 
            placeholder='write name' 
            className=' outline-none border-b border-black p-1'
            onChange={handleChange} 
            value={inpValue.name}
            name="name"
            />
                 
          
            </div>

             <div className='flex flex-col'>
             <label htmlFor="email" className='mt-4'>Email</label>

            <input type="email" 
            id='email' 
            name='email' 
            placeholder='write email' 
            className='outline-none border-b
            border-black p-1' 
            value={inpValue.email}
            onChange={handleChange} 
            />





             </div>


                  <div className="mt-4 flex gap-5 items-center justify-center">
                    <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                    >
                    Close
                    </button>
                    <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleClick}
                    
                    >
                    Add Contact
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}