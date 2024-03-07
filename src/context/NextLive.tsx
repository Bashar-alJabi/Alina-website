"use client"

import { createContext, useEffect, useState } from "react";

interface Countdown {
    days: number; hours: number; minutes: number; seconds: number;
}

export const NextLiveContext = createContext<{ countdown: Countdown }>({ countdown: { days: 0, hours: 0, minutes: 0, seconds: 0 } });

export const NextLiveProvider = ({children}: {children: React.ReactNode}) => {

    const targetDate = new Date('Mar 8, 2024 03:00:00').getTime();

	const [countdown, setCountdown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

    useEffect(() => {
		const updateCountdown = () => {
			const now = new Date().getTime();
			const distance = targetDate - now;

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

    const values = {countdown}

    return (
        <NextLiveContext.Provider value={values}>
            {children}
        </NextLiveContext.Provider>
    )
}