import { Dices, IndianRupee, Truck, UserCog } from 'lucide-react'
import React from 'react'

const Usp = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-16 pt-16 pb-8'>
            <div className='flex gap-2'>
                <Truck className='w-10 h-10'/>
                <div>
                    <p className='font-semibold capitalize'>Free delivery within 24 hours</p>
                    <p className='text-sm'>and servicing also*</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <IndianRupee className='w-10 h-10'/>
                <div>
                    <p className='font-semibold capitalize'>Reasonable cost</p>
                    <p className='text-sm'>bulk may cost much less</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <UserCog className='w-10 h-10'/>
                <div>
                    <p className='font-semibold capitalize'>Experienced services</p>
                    <p className='text-sm'>much better experience and service</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <Dices className='w-10 h-10'/>
                <div>
                    <p className='font-semibold capitalize'>Multiple brands</p>
                    <p className='text-sm'>and also personalised service</p>
                </div>
            </div>
        </div>
    )
}

export default Usp