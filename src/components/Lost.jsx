import {
  FormControl,
  Input,
  Textarea,
  Divider,
} from '@chakra-ui/react'
import { useState } from 'react'

function LostFound() {
  const [itemName, setItemName] = useState('')
  const [itemLocation, setItemLocation] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemDate, setItemDate] = useState('');
  const [contact, setContact] = useState('');


  const handleSubmit = async(e) => {
    e.preventDefault();
    const itemData = {
      name: itemName,
      location: itemLocation,
      description: itemDescription,
      contact: Number(contact),
      date: itemDate
    }
     

    try {
      const response = await fetch('http://localhost:3000/lost/lostForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData)
      });

      const data = await response.json();
      console.log(data)
      setItemDate("");
      setItemDescription("");
      setItemLocation("");
      setItemName("");
      setContact('');
      alert("Your Lost query is Submitted")
    } 
    catch(err) {
      console.log("Error",err);
    }
  }


  return (
    <div className='flex justify-center w-full items-center text-black h-screen'>
      <p className='text-6xl font-bold m-10 mr-10 w-1/2 flex justify-center items-center'>
        YOU LOST ?
      </p>
      <Divider orientation='vertical' height='400px'/>
      <div className='flex flex-col justify-center items-center p-10 w-1/2 mr-10'>
        <form 
          onSubmit={handleSubmit}
          className='w-full'
        >
          <FormControl
            isRequired
            className='flex justify-center items-center flex-col gap-3 bg-zinc-100 p-3 rounded'
          >
            <Input 
              variant='flushed'  
              placeholder='Item Name' 
              onChange={(e) => setItemName(e.target.value)}
              value={itemName}
              required
            />
            <Input 
              variant='flushed'  
              placeholder='Location'
              onChange={(e) => setItemLocation(e.target.value)}
              value={itemLocation} 
              required
            />
            <Input
              variant='flushed' 
              placeholder='Contact Details' 
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              required
            />
            <Textarea 
              variant='flushed' 
              placeholder='Description' 
              onChange={(e) => setItemDescription(e.target.value)}
              value={itemDescription}
              required
            />
            <Input 
              variant='flushed' 
              type='date'
              required
              onChange={(e) => setItemDate(e.target.value)}
              value={itemDate}
            />
            <button 
              className='mt-5 bg-slate-400 py-1 rounded text-lg text-white hover:bg-slate-500 transition ease-in-out duration-200 w-full'
              type='submit'
            >
              Button
            </button>
          </FormControl>
        </form>
        
        
      </div>
      
    </div>
  )
}

export default LostFound