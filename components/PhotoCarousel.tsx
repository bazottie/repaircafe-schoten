"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import photo1 from '@/assets/2025-08-13 at 11.30.42.jpeg';
import photo2 from '@/assets/2025-08-13 at 11.30.42-2.jpeg'
import photo3 from '@/assets/2025-08-13 at 11.30.43.jpeg'
import photo4 from '@/assets/2025-08-13 at 11.30.44.jpeg'
import photo5 from '@/assets/2025-08-13 at 11.39.45.jpeg'

export function PhotoCarousel() {
	const photos = [photo1, photo2, photo3, photo4, photo5];
	return (
		<Carousel
			plugins={ [
				Autoplay({
					delay: 2000,
				}),
			] }
		>
			<CarouselContent className="p-4">
				{ photos.map((photo, index) => (
					<CarouselItem key={ index }>
						<Image src={ photo } alt="" className="rounded-md aspect-square object-cover"/>
					</CarouselItem>
				)) }
			</CarouselContent>
			<CarouselPrevious/>
			<CarouselNext/>
		</Carousel>
	)
}