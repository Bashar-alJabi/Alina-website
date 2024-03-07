import Link from "next/link";
import styles from "./Navbar.module.css";
import { social_media } from "./data";

interface Social {
    id: number; link: string; path: string;
}

const Navbar = () => {

    const socialMedia: Social[] = social_media;

    return (
        <div className="flex items-center gap-8">
            <div>
                <svg width="64px" height="48px">
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" className={styles.back}></polyline>
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" className={styles.front}></polyline>
                </svg>
            </div>
            <div>
                <Link href='/' className="font-bold text-2xl tracking-widest">BBLI😊</Link>
                <nav className="flex gap-5 mt-4">
                    {socialMedia.map(media =>
                        <Link key={media.id} href={media.link} target="_blank" className={styles.links}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 17 17" className="fill-current cursor-pointer">
                                <path d={media.path}></path>
                            </svg>
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default Navbar