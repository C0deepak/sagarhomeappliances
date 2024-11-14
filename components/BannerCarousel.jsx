import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const BannerCarousel = () => {
    return (
        <Carousel className='realtive p-2 border border-b-1'
            opts={{
                align: "start",
                loop: true,
            }}>
            <CarouselContent>
                <CarouselItem><img src="/img/banner/1.png" alt="banner1" /></CarouselItem>
                <CarouselItem><img src="/img/banner/2.png" alt="banner2" /></CarouselItem>
                <CarouselItem><img src="/img/banner/3.png" alt="banner3" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='absolute top-50% left-6' />
            <CarouselNext className='absolute top-50% right-6' />
        </Carousel>
    )
}

export default BannerCarousel