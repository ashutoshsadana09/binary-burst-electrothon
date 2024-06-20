import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider
} from '@chakra-ui/react'

import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div>
      <div>
        <div className="mb-4 text-6xl font-bold flex justify-center items-center mt-10" >Your Hub for Campus Connections
        </div>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Lost and Found Rooms
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Misplaced something important? No worries! Navigate through our Lost and Found Rooms, where fellow students and staff post discoveries and search requests. Find what you've lost or lend a helping hand—it's all about community support.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Dynamic Chat Rooms
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              From academic queries to the latest campus buzz, our vibrant Chat Rooms are buzzing with conversations. Join in discussions, create study groups, or simply hang out with peers, all within a few clicks
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Streamline College Events
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Stay in the loop with our intuitive event scheduler. From lectures to club meetings, manage your calendar effortlessly. Get reminders, explore event details, and never miss an important moment.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div className='flex'>
          <div className="flex flex-col p-10 border-r border-white h-50">
            <div className="flex justify-start  mb-2 text-xl font-bold">
              Lost and Found Rooms
            </div>
            <div>
              Misplaced something important? No worries! Navigate through our Lost and Found Rooms, where fellow students and staff post discoveries and search requests. Find what you've lost or lend a helping hand—it's all about community support.
            </div>
            <div className="flex justify-end mr-1 mt-2">
              <Link 
                className="bg-zinc-700 px-5 py-1 hover:text-white hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:border-transparent transition duration-300 ease-in-out flex justify-center items-center text-white text-md rounded-sm"
                to={'/lostlist'}
              >
                Join
              </Link>
            </div>
          </div>
          <Divider orientation='vertical' height='200px ' className='mt-10'/>
          <div className="flex flex-col p-10 border-r border-white h-60">
            <div className="flex justify-start  mb-2 text-xl font-bold ">
              Dynamic Chat Rooms
            </div>
            <div>
              From academic queries to the latest campus buzz, our vibrant Chat Rooms are buzzing with conversations. Join in discussions, create study groups, or simply hang out with peers, all within a few clicks.
            </div>
            <div className="flex justify-end mr-1 mt-2">
              <Link 
                className="bg-zinc-700 px-5 py-1 hover:text-white hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:border-transparent transition duration-300 ease-in-out flex justify-center items-center text-white text-md rounded-sm"
                to={'/groups'}
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;