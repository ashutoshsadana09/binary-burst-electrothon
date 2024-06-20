import React, { useEffect, useState } from 'react'

function FoundListPage() {
  const [foundItemsData, setFoundItemsData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('http://localhost:3000/found/foundForm');
        const data = await response.json();
        setFoundItemsData(data)
      } catch(err) {
        console.log("Error",err)
      }
    } 
    fetchData()
  }, [])
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center items-center text-6xl font-bold'>
        FOUND ITEMS LISTS
      </div>
      <div className='flex '>
        {
          foundItemsData.map((foundItem, index) => {
            return (
            <div 
              key={index}
              className='shadow bg-slate-300 text-slate-700 p-4 rounded-lg m-10  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'
            >
              <div
                className='p-2 flex items-left flex-col gap-2'
              >
                <p>
                  <strong>ItemName: </strong> {foundItem.name}
                </p>
                <p>
                <strong>LocationLost: </strong>{foundItem.location}
                </p>
                <p>
                <strong>Finders Contact: </strong>{foundItem.contact}
                </p>
                <p>
                <strong>Item Description: </strong>{foundItem.description}
                </p>
                <p>
                <strong>Found Date: </strong>{foundItem.date.split('T')[0]}
                </p>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default FoundListPage;