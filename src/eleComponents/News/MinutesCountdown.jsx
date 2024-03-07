"use client"

import { NextLiveContext } from "@/context/NextLive";
import { useContext } from "react";

const MinutesCountdown = () => {

    const { countdown } = useContext(NextLiveContext);

    return (
        <span style={{ "--value": countdown.minutes }}></span>
    )
}

export default MinutesCountdown