import React from 'react'
import { Button } from './ui/button'

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow max-w-sm">
            <div className="relative p-2 flex items-center justify-center">
                <img className="w-64 aspect-square object-cover" src={product.imageURL} alt="Product Image" />
                {product.isOnSale && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{product.saleLabel}</div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-sm md:text-lg font-medium mb-1">{product.productTitle}</h3>
                <p className="hidden md:block text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="mt-4 flex flex-wrap flex-col gap-1.5 md:flex-row md:items-center justify-between">
                    <div className='flex items-center gap-1 flex-wrap'>
                        <span className="font-bold text-xs text-red-600"><strike>₹ {product.orgPrice}</strike></span>
                        <span className="font-bold text-lg text-green-600">₹ {product.disPrice}</span>
                    </div>
                    <Button size='sm'>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard