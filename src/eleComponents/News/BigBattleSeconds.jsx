"use client"

import { BigBattleContext } from "@/context/BigBattle";
import { useContext } from "react";

const BigBattleSeconds = () => {

    const { countdown2 } = useContext(BigBattleContext);

    return (
        <span style={{ "--value": countdown2.seconds }}></span>
    )
}

export default BigBattleSeconds