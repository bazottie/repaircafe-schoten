import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
    imageProps?: Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>;
}

export function HeadingLogo({ className, imageProps }: Props) {
    return (
        <Link href="/" className={cn(className)}>
            <Image priority {...imageProps} alt="logo" src="/logo.png" width={3612} height={448} />
            <h1 className="sr-only">RepairCafé Schoten</h1>
        </Link>
    )
}