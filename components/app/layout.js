import Scroll from './scroll';

export default function Layout({ children }) {
    return (
        <>
            <Scroll />
            <div id="container">{children}</div>
        </>
    );
}
