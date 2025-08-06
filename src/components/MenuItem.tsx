import { useState } from 'preact/hooks';
import Expand from '../../images/icon-arrow-down.svg';
import Collapse from '../../images/icon-arrow-up.svg';
import cn from '@meltdownjs/cn';

type PropsMenuItem = {
    name: string;
    index: number;
    subItems: {
        name: string;
        icon: string;
    }[];
}

export default function MenuItem({ name, subItems, index }: PropsMenuItem) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleIsOpen() {
        setIsOpen(pre => !pre);
    }

    return (
        <li className={'relative flex flex-col md:flex-row md:items-center'}>
            <label class={'flex items-center gap-3 cursor-pointer'} onClick={toggleIsOpen}>
                {name}
                {subItems.length > 0 &&
                    <img src={isOpen ? Collapse : Expand} alt="Expand and collapse icon" />
                }
            </label>
            {subItems.length > 0 && isOpen &&
                <span className={cn(' md:bg-white md:shadow-xl md:absolute md:top-8 pl-5 space-y-4 cursor-pointer md:p-4 md:rounded-lg md:space-y-2', { 'my-4': isOpen, 'left-5': index % 2 == 1 })}>
                    {
                        subItems.map(({ name, icon }) => (
                            <span class={'flex gap-3 items-center'}>
                                <img src={icon} alt={icon} />
                                <p>{name}</p>
                            </span>
                        ))
                    }
                </span>
            }
        </li >
    );
}
