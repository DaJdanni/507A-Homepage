import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {jordanData, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

const Jordan: FC = memo(() => {
  const {profileImageSrc, name, description, aboutItems} = jordanData;
  return (
    <Section className="bg-[#0d0d0d]" sectionId={SectionId.About}>
      <h2 className="text-center text-1xl font-bold text-white md:text-4xl mb-24 z-10 text-center text-3xl font-bold text-white">
        The Programmers of 507A
      </h2>
      <div className={classNames('grid grid-cols-1 gap-y-5', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">{name}</h2>
            {description}
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

Jordan.displayName = 'Jordan';
export default Jordan;
