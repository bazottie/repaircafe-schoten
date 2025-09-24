import mevrouw from '@/assets/mevrouw.jpeg'
import Image from "next/image";

export function Quote({ name, quote }: { name: 'mevrouw', quote: string }) {
	return (
		<blockquote className="flex gap-4 border-none items-center flex-col md:flex-row">
			<Image
				className="aspect-square rounded-full not-prose"
				height={ 150 }
				width={ 150 }
				alt={ name }
				src={ mevrouw }
				loading="lazy"
			/>
			<span>&quot;{ quote }&quot;</span>
		</blockquote>
	)
}