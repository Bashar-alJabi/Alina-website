"use client"

import { createContext, useEffect, useState } from "react";

interface Countdown {
    days: number; hours: number; minutes: number; seconds: number;
}

export const BigBattleContext = createContext<{ countdown2: Countdown }>({ countdown2: { days: 0, hours: 0, minutes: 0, seconds: 0 } });

export const BigBattleProvider = ({children}: {children: React.ReactNode}) => {

    const targetDate2 = new Date('Mar 9, 2024 07:30:00').getTime();

	const [countdown2, setCountdown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

    useEffect(() => {
		const updateCountdown = () => {
			const now = new Date().getTime();
			const distance = targetDate2 - now;

			if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((distance % (1000 * 60)) / 1000);
				setCountdown({days, hours, minutes, seconds });
			} else {
				clearInterval(interval);
			}
		};
		const interval = setInterval(updateCountdown, 1000);

		return () => clearInterval(interval);
	}, []);

    const values = {countdown2}

    return (
        <BigBattleContext.Provider value={values}>
            {children}
        </BigBattleContext.Provider>
    )
}