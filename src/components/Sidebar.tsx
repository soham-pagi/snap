import Close from '../../images/icon-close-menu.svg';
import MenuItems from './MenuItems';

export default function Sidebar({ toggle }: { toggle: () => void }) {
    return (
        <div className={'absolute z-9999 top-0 right-0 w-full flex justify-end bg-black/50 md:hidden'}>
            <div className={'bg-slate-50 w-[16rem] min-h-screen p-4'}>
                <div className={'flex justify-end'}>
                    <img src={Close} alt="Close" onClick={toggle} />
                </div>
                <MenuItems />
            </div>
        </div>
    )
}
