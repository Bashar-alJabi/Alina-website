import BackIcon from '@/components/BackIcon/BackIcon'
import HomeIcon from '@/components/HomeIcon/HomeIcon'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Images.module.css'
import { Imgs } from './data'

export const metadata: Metadata = {
	title: "Alina - Images",
	description: "Explorer Images Alina",
};

interface ImagesType {
    id: number; src: string;
}

const Images = () => {

    const photos: ImagesType[] = Imgs;

    return (
        <div className={styles.body} style={{minHeight: '100vh'}}>
            <div>
                <div>
                    <BackIcon />
                    <HomeIcon color='#f6f6f6'/>
                </div>
                <div className='mt-24 mb-9 mx-6 text-center text-lg'>
                    Sweeter than honey, rarer than a diamond 💎🍯 .. Living my fairy tale, one chapter at a time 📚👑
                </div>
                <div className='flex justify-center items-center gap-6 flex-wrap rounded-xl mx-10'>
                    {
                        photos.map(photo =>
                            <Image key={photo.id} src={photo.src} width={300} height={300} className='rounded-xl' alt='photo'/>
                        )
                    }
                </div>
                <div className='block m-auto'>
                    <Link href='https://www.instagram.com/bbli_official?igsh=MXFpbnQzM2dvYncwdQ==' target='_blank' className='btn text-white my-5 btn-lg' style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}}>See More</Link>
                </div>
            </div>
        </div>
    )
}

export default Images