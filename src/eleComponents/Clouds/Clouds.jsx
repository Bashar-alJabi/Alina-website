"use client"

import HomeIcon from "@/components/HomeIcon/HomeIcon";
import LinkButton from "@/components/LinkButton/LinkButton";
import { useEffect } from "react";
import './Clouds.css';

const Clouds = () => {

    useEffect(() => {
        const vanta = VANTA.CLOUDS({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
        })
        return () => {
			vanta.destroy();
		};
    }, [])

    return (
        <div id="vanta" style={{width: '100vw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <HomeIcon color="#000"/>
            <div className="flex flex-col items-center justify-center gap-6">
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', fontWeight: 'bold'}}>
                    <LinkButton title='Images' url="/images"/>
                    <LinkButton title='Videos' url="/videos"/>
                </div>
                <audio loop controls>
                    <source src="/media/YouSeeBIGGIRL.mp3" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    )
};

export default Clouds;