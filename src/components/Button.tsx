import cn from "@meltdownjs/cn";

type ButtonProps = {
    text: string;
    className?: string;
};

export default function Button({ text, className }: ButtonProps) {
    const styles = {
        base: 'bg-black rounded-2xl px-6 py-3 font-medium hover:brightness-120 active:brightness-90'
    }
    return (
        <button className={cn(styles.base, className)}>{text}</button>
    );
}
