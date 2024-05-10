/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryRooms from './CategoryRooms'
const TabCategories = () => {
    const [rooms, setRooms] = useState([])
    console.log(rooms);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios('/data.json')
            setRooms(data)
        }
        getData()
    }, [])

    return (
        <Tabs className='bg-[#ebefeb]'>
            <div className=' container px-6 py-10 mx-auto'>
                <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
                    Explore Our Rooms by Category
                </h1>

                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Single</Tab>
                        <Tab>Double</Tab>
                        <Tab>Twin</Tab>
                        <Tab>Triple</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className='space-y-5'>
                        {rooms
                            .slice(0, 4)
                            .map(room => (
                                <CategoryRooms room={room} />
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='space-y-5'>
                        {rooms
                            .filter(r => r.category === 'Single Room')
                            .map(room => (
                                <CategoryRooms room={room} />
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='space-y-5'>
                        {rooms
                            .filter(r => r.category === 'Double Room')
                            .map(room => (
                                <CategoryRooms room={room} />
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='space-y-5'>
                        {rooms
                            .filter(r => r.category === 'Twin Room')
                            .map(room => (
                                <CategoryRooms room={room} />
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='space-y-5'>
                        {rooms
                            .filter(r => r.category === 'Triple Room')
                            .map(room => (
                                <CategoryRooms room={room} />
                            ))}
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default TabCategories