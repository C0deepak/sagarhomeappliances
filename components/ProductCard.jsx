import React from 'react'
import { Button } from './ui/button'

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow max-w-sm">
            <div className="relative p-2 flex items-center justify-center">
                <img className="w-64" src={product.imageURL} alt="Product Image" />
                {product.isOnSale && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{product.saleLabel}</div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-1">{product.productTitle}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">₹ {product.price}</span>
                    <Button>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard