import HeroImageMobile from '../../images/image-hero-mobile.png';
import Button from './Button';
import HeroImageDesktop from '../../images/image-hero-desktop.png';
import Databiz from '../../images/client-databiz.svg';
import AudioPhile from '../../images/client-audiophile.svg';
import Meet from '../../images/client-meet.svg';
import Maker from '../../images/client-maker.svg';


export default function HeroBanner() {
    const clients = [
        { src: Databiz, alt: 'Databiz' },
        { src: AudioPhile, alt: 'AudioPhile' },
        { src: Meet, alt: 'Meet' },
        { src: Maker, alt: 'Maker' }
    ];

    return (
        <article className={'flex flex-col items-center justify-center text-center px-5 md:flex-row-reverse md:py-10 md:justify-evenly md:gap-10'}>
            <section className={'max-w-lg md:max-w-xl'}>
                <img src={HeroImageDesktop} alt="Hero Image" srcSet={`${HeroImageMobile} 600w, ${HeroImageDesktop} 1200w`} />
            </section>

            <section className={'md:self-end md:text-left'}>
                <div className={'py-10'}>
                    <h1 className={'font-bold text-4xl tracking-wide md:text-7xl'}>Make <br className={'hidden md:block'} />remote work</h1>
                    <p className={'mt-5 md:text-xl md:mt-12 md:min-w-90 md:max-w-110'}>Get your team in sync, no matter your location. Streamline processes,
                        create team rituals, and watch productivity soar.</p>
                </div>

                <Button className='text-white md:text-black md:bg-white border-1' text={'Learn more'} />

                <section className={'flex justify-around items-center w-full mt-15 md:justify-between md:mt-25'}>
                    {clients.map(({ src, alt }) => (
                        <img key={alt} src={src} alt={alt} />
                    ))}
                </section>
            </section>
        </article>
    )
}
