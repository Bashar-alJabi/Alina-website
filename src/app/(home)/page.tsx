import Button from "@/components/Button/Button";
import Navbar from "@/components/Navbar/Navbar";
// import BigBattleDays from "@/eleComponents/News/BigBattleDays";
// import BigBattleHours from "@/eleComponents/News/BigBattleHours";
// import BigBattleMinutes from "@/eleComponents/News/BigBattleMinutes";
// import BigBattleSeconds from "@/eleComponents/News/BigBattleSeconds";
import DaysCountdown from "@/eleComponents/News/DaysCountdown";
import HoursCountdown from "@/eleComponents/News/HoursCountdown";
import MinutesCountdown from "@/eleComponents/News/MinutesCountdown";
import SecondsCountdown from "@/eleComponents/News/SecondsCountdown";
import WhoAmI from "@/eleComponents/WhoAmI/WhoAmI";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from './Home.module.css';

export const metadata: Metadata = {
	title: "Alina - Home",
	description: "Home page Alina",
};

const Home = () => {

    return (
        <div className={styles.body}>
            <div className="max-w-6xl my-0 mx-auto p-7 flex flex-col justify-between relative min-h-dvh">
                <Navbar />
                <div className="relative z-10">
                    <WhoAmI />
                    <p className="text-xl mt-3 mb-7" style={{color: '#ccc'}}>Sprinkling kindness everywhere I go .. On a mission to make your day better 🫰</p>
                    <Link href='/explore' className="block w-fit"><Button /></Link>
                </div>
                {/* start News */}
                <div className="flex justify-start items-center gap-x-14 gap-y-4 flex-wrap z-10 mix-blend-exclusion">
                    <div>
                        <p style={{color: '#ddd'}}>Next LiveStream (daily streamer)</p>
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-4xl">
                                    <DaysCountdown />
                                </span>
                                days
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-4xl">
                                    <HoursCountdown />
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-4xl">
                                    <MinutesCountdown />
                                </span>
                                min
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-4xl">
                                    <SecondsCountdown />
                                </span>
                                sec
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <p style={{color: '#ddd'}}>Live Event (Agency Battle)</p>
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-4xl">
                                    <BigBattleDays />
                                </span>
                                days
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-4xl">
                                    <BigBattleHours />
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-4xl">
                                    <BigBattleMinutes />
                                </span>
                                min
                            </div>
                            <div className="flex flex-col">
                                <span className="countdown font-mono text-4xl">
                                    <BigBattleSeconds />
                                </span>
                                sec
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* end News */}
                <div style={{position: 'absolute', right: '0.25rem', bottom: '0'}}>
                    <Image src='/media/profile.png' width={300} height={300} alt="profile"/>
                </div>
            </div>
        </div>
    )
}

export default Home