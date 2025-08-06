import Logo from '../../images/logo.svg';
import Menu from '../../images/icon-menu.svg';
import Sidebar from './Sidebar';
import { useState } from 'preact/hooks';
import MenuItems from './MenuItems';

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <nav class={'flex flex-row justify-between items-center text-gray-600 py-5 px-4 md:justify-start md:py-3'}>
            <img className={'translate-y-1'} src={Logo} alt="Logo" />

            <div className={'hidden md:block md:w-full md:ml-10'}>
                <MenuItems />
            </div>

            {!sidebarOpen && <img class={'md:hidden'} src={Menu} alt="Logo" onClick={toggleSidebar} />}
            {sidebarOpen && <Sidebar toggle={toggleSidebar} />}
        </nav>
    )
}
