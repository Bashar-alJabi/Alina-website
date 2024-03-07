"use client"

import { NextLiveContext } from "@/context/NextLive";
import { useContext } from "react";

const HoursCountdown = () => {

    const { countdown } = useContext(NextLiveContext);

    return (
        <span style={{ "--value": countdown.hours }}></span>
    )
}

export default HoursCountdown