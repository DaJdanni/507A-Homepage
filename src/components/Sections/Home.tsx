// import {ChevronDownIcon} from '@heroicons/react/24/outline';
// import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutUs, SectionId} from '../../data/data';
import Section from '../Layout/Section';
// import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {name, imageSrc} = aboutUs;

  return (
    <Section noPadding sectionId={SectionId.Home}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <video
          autoPlay
          className="absolute z-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/mastered01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Image
  alt={`${name}-image`}
  className="z-0"
  placeholder="blur"
  priority
  src={imageSrc}
  width={1280} // Set width
  height={720} // Set height
  layout="intrinsic" // Adjusts size based on the image's original aspect ratio
/>
        {/* <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-x5 bg-blue-800/20 p-3 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-7xl font-RUSTY" style={{fontFamily: "RUSTY"}}>{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div> */}
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
