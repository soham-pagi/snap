import MenuItem from "./MenuItem";
import TodoIcon from '../../images/icon-todo.svg';
import CalendarIcon from '../../images/icon-calendar.svg';
import RemindersIcon from '../../images/icon-reminders.svg';
import PlanningIcon from '../../images/icon-planning.svg';
import Button from "./Button";


export default function MenuItems() {
    const menuItems = [
        {
            name: 'Features',
            subItems: [
                { name: 'Todo List', icon: TodoIcon, },
                { name: 'Calendar', icon: CalendarIcon, },
                { name: 'Reminders', icon: RemindersIcon },
                { name: 'Planning', icon: PlanningIcon }
            ],
        },
        {
            name: 'Company',
            subItems: [
                { name: 'History', icon: '' },
                { name: 'Our Team', icon: '' },
                { name: 'Blog', icon: '' }
            ],
        },
        { name: 'Careers', subItems: [], },
        { name: 'About', subItems: [], }
    ];

    return (
        <div className={'text-xl py-8 px-3 md:flex md:flex-row md:items-center md:p-0'}>
            <ul className={'flex flex-col gap-3 md:gap-10 md:flex-row'}>
                {menuItems.map((item, index) => (
                    <MenuItem key={item} {...item} index={index} />
                ))}
            </ul>

            <section class={'flex flex-col mt-10 md:flex-row md:items-center md:justify-center md:mt-0 md:ml-auto'}>
                <Button className="bg-transparent" text="Login" />
                <Button className="bg-transparent border-1 " text="Register" />
            </section>
        </div>
    )
}
