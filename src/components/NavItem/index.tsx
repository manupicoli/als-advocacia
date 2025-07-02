import Link from "next/link";

export interface NavItemInterface {
    url: string;
    label: string;
    isActive?: boolean;
}

export default function NavItem(props: NavItemInterface) {
    return (
         <li>
            <Link href={props.url} className={`${props.isActive 
            ? "text-white border-[#8fcbfc]" 
            : "text-[var(--text-color)] border-transparent hover:text-white hover:border-[#8fcbfc] active:text-white active:border-[#8fcbfc] focus-visible:text-white focus-visible:border-[#8fcbfc]"}
            px-1 py-1 border-b-2 transition-colors duration-300 whitespace-nowrap`}>
            {props.label}
            </Link>
        </li>
    );
}