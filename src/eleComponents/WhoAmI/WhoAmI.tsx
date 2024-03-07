"use client"

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const WhoAmI = () => {

	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Streamer", "Blogger", "Influencer", "Model"],
			typeSpeed: 80, backSpeed: 80, backDelay: 1500, loop: true, showCursor: false,
		});
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div style={{ fontSize: '2.5rem', height: '4rem'}}>
			<span ref={el} />
		</div>
	);
}

export default WhoAmI