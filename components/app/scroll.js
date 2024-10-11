import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
/* */
import { scrollIntoView } from "seamless-scroll-polyfill";

export default function Scroll() {
    // when clicking a link, user will not scroll to the top of the page if the header is sticky.
    // their current scroll position will persist to the next page.
    // this useEffect is a workaround to 'fix' that behavior.

    const pathname = usePathname();
    // console.log(pathname);
    useEffect(() => {
        // window.scroll(0, 0);
        scrollIntoView(document.getElementById("my_nav"), {
            behavior: "auto",
            block: "start",
            inline: "start",
        });
    }, [pathname]);
    return <></>;
}