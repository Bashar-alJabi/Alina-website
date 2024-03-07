"use client"

import { NextLiveContext } from "@/context/NextLive";
import { useContext } from "react";

const SecondsCountdown = () => {

    const { countdown } = useContext(NextLiveContext);

    return (
        <span style={{ "--value": countdown.seconds }}></span>
    )
}

export default SecondsCountdown