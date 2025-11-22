
import { ArrowLeft, ArrowRight } from 'lucide-react';
export default function ImageCarouselNavigation() {
    return (
        <div className='bg-white p-1 flex items-center gap-4 absolute bottom-5 left-5 rounded-full'>
            <button
                disabled
                className={`rounded-full cursor-pointer p-2 opacity-50 cursor-not-allowed`}
                aria-label='Previous Image'
            >
                <ArrowLeft />
            </button>

            <div className='font-medium'>
                1/2
            </div>

            <button
                className={`rounded-full cursor-pointer p-2 hover:bg-yellow-400'`}
                aria-label='Next Image'
            >
                <ArrowRight />
            </button>
        </div>
    )
}