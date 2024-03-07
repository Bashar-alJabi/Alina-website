import Link from "next/link";

interface LinkButtonProps {
    title: string; url: string;
}

const LinkButton = ({title, url}: LinkButtonProps) => {
    return (
        <Link href={url} className='btn btn-lg text-2xl text-white'>{title}</Link>
    )
}

export default LinkButton