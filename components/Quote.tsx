import mevrouw from '@/assets/mevrouw.jpeg'
import Image from "next/image";

export function Quote({ name, quote }: { name: 'mevrouw', quote: string }) {
	return (
		<div className="flex gap-4  min-[520]:items-center flex-col-reverse min-[520]:flex-row">
				<Image
					className="aspect-square rounded-full m-0 not-prose"
					height={ 100 }
					width={ 100 }
					alt={ name }
					src={ mevrouw }
					loading="lazy"
				/>
			<blockquote className="max-[520px]:mb-0 border-orange-500">&quot;{ quote }&quot;</blockquote>
		</div>
	)
}