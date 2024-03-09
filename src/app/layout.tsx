// import { BigBattleProvider } from "@/context/BigBattle";
import { NextLiveProvider } from "@/context/NextLive";
import { Poppins } from "next/font/google";
import "./globals.css";

const bodyFont = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "700", "900"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={bodyFont.className}>
				<NextLiveProvider>
					{/* <BigBattleProvider> */}
						{children}
					{/* </BigBattleProvider> */}
				</NextLiveProvider>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js"></script>
			</body>
		</html>
	);
}