import { Dices, IndianRupee, Truck, UserCog } from 'lucide-react'
import React from 'react'

const Usp = () => {
    return (
        <div className='grid grid-cols-4 px-8 py-8'>
            <div className='flex gap-2'>
                <Truck size={32}/>
                <div>
                    <p className='font-semibold capitalize'>Free delivery within 24 hours</p>
                    <p className='text-sm'>and servicing also*</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <IndianRupee size={32}/>
                <div>
                    <p className='font-semibold capitalize'>Reasonable cost</p>
                    <p className='text-sm'>bulk may cost much less</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <UserCog size={32}/>
                <div>
                    <p className='font-semibold capitalize'>Experienced services</p>
                    <p className='text-sm'>much better experience and service</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <Dices size={32}/>
                <div>
                    <p className='font-semibold capitalize'>Multiple brands</p>
                    <p className='text-sm'>and also personalised service</p>
                </div>
            </div>
        </div>
    )
}

export default Usp