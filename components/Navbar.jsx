import { Headset, Search, Shapes } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center px-8 py-2 border border-b-1'>
                <div className='flex items-center gap-2'>
                    <img src="/img/logo.png" alt="" className='w-10' />
                    <div className='flex flex-col'>
                        <div className='font-bold text-lg'>Sagar</div>
                        <div className='text-sm'>Home Appliances</div>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-2'><Input type="email" placeholder="Search Products..." className='py-0' /><Button variant="outline"><Search size={20} /></Button></div>
                    <Button variant="outline" className='flex items-center gap-2'><Shapes size={20} />Products</Button>
                    <Button variant="outline" className='flex items-center gap-2'><Headset size={20} />Support</Button>
                </div>
            </div>
            <div className='flex items-center justify-center justify gap-8 px-4 py-2'>
                <div className='flex flex-col gap-1 items-center justify-center hover:opacity-75 overflow-hidden cursor-pointer'>
                    <img src="/img/cat/1.png" alt="" className='w-14 border border-1 rounded-full' />
                    <p className='px-2 text-xs'>Air Conditioners</p>
                </div>
                <div className='flex flex-col gap-1 items-center justify-center hover:opacity-75 overflow-hidden cursor-pointer'>
                    <img src="/img/cat/2.png" alt="" className='w-14 border border-1 rounded-full' />
                    <p className='px-2 text-xs'>Refrigerators</p>
                </div>
                <div className='flex flex-col gap-1 items-center justify-center hover:opacity-75 overflow-hidden cursor-pointer'>
                    <img src="/img/cat/3.png" alt="" className='w-14 border border-1 rounded-full' />
                    <p className='px-2 text-xs'>Gyzers</p>
                </div>
                <div className='flex flex-col gap-1 items-center justify-center hover:opacity-75 overflow-hidden cursor-pointer'>
                    <img src="/img/cat/4.png" alt="" className='w-14 border border-1 rounded-full' />
                    <p className='px-2 text-xs'>Washing Machine</p>
                </div>
                <div className='flex flex-col gap-1 items-center justify-center hover:opacity-75 overflow-hidden cursor-pointer'>
                    <img src="/img/cat/5.png" alt="" className='w-14 border border-1 rounded-full' />
                    <p className='px-2 text-xs'>Microwaves</p>
                </div>
                <div className='flex flex-col gap-1 items-center justify-center hover:opacity-75 overflow-hidden cursor-pointer'>
                    <img src="/img/cat/6.png" alt="" className='w-14 border border-1 rounded-full' />
                    <p className='px-2 text-xs'>Water Filters</p>
                </div>
                <div className='flex flex-col gap-1 items-center justify-center hover:opacity-75 overflow-hidden cursor-pointer'>
                    <img src="/img/cat/7.png" alt="" className='w-14 border border-1 rounded-full' />
                    <p className='px-2 text-xs'>Other Appliances</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar