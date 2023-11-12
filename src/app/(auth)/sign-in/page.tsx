import { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';
const page: FC = () => {
    return ( <div className='absolute inset-0' >
        <div className='h-full max-w-2xl mx-auto flex flex-col items-center gap-20 justify-center'>
        <Link className={cn(buttonVariants({ variant: 'ghost' }), 'self-start -mt-20')} href="/">
            Home
        </Link>
        <SignIn />

        </div>
    </div>   )
}
export default page;