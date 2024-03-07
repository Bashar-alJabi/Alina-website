import Clouds from "@/eleComponents/Clouds/Clouds";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Alina - Explorer",
	description: "Explorer page Alina",
};

const Explore = () => {

    return (
        <>
            <Clouds />
        </>
    )
};

export default Explore;