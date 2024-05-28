import React from 'react'
import { usePathname } from "next/navigation";
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const StreamHeader = () => {
    const routes = [
        {
            id: 1,
            label: 'FreeStream',
            href: '/',
        },
        {
            id: 2,
            label: 'Premium',
            href: '/premium',
        },
    ];

    const pathname = usePathname();

    return (
        <div className=' flex items-center justify-between px-2'>
            <h2><i className='text-[#b28228]'>Live</i> </h2>
            <div className='flex items-center gap-2 justify-end  lg:mr-10'>
                {routes.map(route => (
                    <Button
                        asChild
                        variant='link'
                        className={cn('flex w-auto text-muted-foreground', "justify-start", route.href === pathname && 'text-[#b28228]')}
                        key={route.id}
                    >
                        <Link href={route.href}>
                            <p>{route.label}</p>
                        </Link>
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default StreamHeader;



