import BackIcon from '@/components/BackIcon/BackIcon'
import HomeIcon from '@/components/HomeIcon/HomeIcon'
import { Metadata } from 'next'
import Link from 'next/link'
import styles from './Videos.module.css'
import { Vids } from './data'

export const metadata: Metadata = {
	title: "Alina - Videos",
	description: "Explorer Videos Alina",
};

interface VideosType {
    id: number; src: string;
}

const Videos = () => {

    const videos: VideosType[] = Vids;

    return (
        <div className={styles.body} style={{minHeight: '100vh'}}>
            <div>
                <div>
                    <BackIcon />
                    <HomeIcon color='#f6f6f6'/>
                </div>
                <div className='mt-24 mb-9 mx-6 text-center text-lg'>
                    Living in a melody, dancing to life's rhythm <span className='mix-blend-plus-lighter'>🎶</span>
                </div>
                <div className='flex justify-center items-center gap-10 flex-wrap rounded-xl mx-10'>
                    {
                        videos.map(vid =>
                            <video key={vid.id} width="300" controls loop className='rounded-xl'>
                                <source src={vid.src} type="video/mp4" />
                            </video>
                        )
                    }
                </div>
                <div className='block m-auto'>
                    <Link href='https://www.tiktok.com/@bbli83?_t=8kQTNnIymbB&_r=1' target='_blank' className='btn text-white my-5 btn-lg' style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}}>See More</Link>
                </div>
            </div>
        </div>
    )
}

export default Videos