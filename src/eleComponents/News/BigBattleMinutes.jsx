"use client"

import { BigBattleContext } from "@/context/BigBattle";
import { useContext } from "react";

const BigBattleMinutes = () => {

    const { countdown2 } = useContext(BigBattleContext);

    return (
        <span style={{ "--value": countdown2.minutes }}></span>
    )
}

export default BigBattleMinutes