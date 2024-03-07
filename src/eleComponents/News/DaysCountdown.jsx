"use client"

import { NextLiveContext } from "@/context/NextLive";
import { useContext } from "react";

const DaysCountdown = () => {

    const { countdown } = useContext(NextLiveContext);

    return (
        <span style={{ "--value": countdown.days }}></span>
    )
}

export default DaysCountdown