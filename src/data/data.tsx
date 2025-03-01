import {
 // AcademicCapIcon,
 // ArrowDownTrayIcon,
 // BuildingOffice2Icon,
  CalendarIcon,
  CommandLineIcon,
 // FlagIcon,
 // MapIcon,
 // SparklesIcon,
} from '@heroicons/react/24/outline';

import temporary from '../assets/gatekep/black.png'
import jordanPFP from '../assets/githubjordan.jpg'
//import foreground from '../assets/foregroundcheck.jpg'
import buceesProject from '../assets/logos/buceesProject.png'
import pathTranslator from '../assets/logos/pathTranslator.png'
import buceesUpdater from '../assets/logos/buceesUpdater.png'
import buceesDocumentation from '../assets/logos/buceesDocumentation.png'
import rishayPFP from '../assets/rishaygithub.png'
/*import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';*/
import {
  About,
  ContactSection,
 // ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Programmers,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: '507A Homepage',
  description: "Documentation site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Meet The Programmers',
  Contact: 'contact',
  Portfolio: 'Documentations',
  Resume: 'Resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Tournaments',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const aboutUs: Hero = {
  name: `507A`,
  description: (
    <>
      
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Welcome to the hompage of 507A. This is a boilerplate website used to display simple stats, programmer profiles, and a way to easily manage our projects that we've used for the High Stakes 24-25 robotics season.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      This website was created on top of a template website by Tim Baker. We've redesigned this website using typescript, html, css, and javascript in order to create a custom experience for judges to view. This website was deployed using Vercel, a free frontend cloud service that helps user deploy their websites and apps in real time.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: temporary,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..`,
  aboutItems: [
    // {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

export const jordanData: Programmers = {
  profileImageSrc: jordanPFP,
  name: `Jordan Samaniego`, 
  description: (
    <p className="prose prose-sm text-gray-300 sm:prose-base">
    Role: <strong className="font-bold text-gray-300">Backend Developer of Bucees Template, Auton Developer, <br /> Data Analyzer, Website Developer, Secondary Documentator </strong> <br />
    </p>
  ),
  aboutItems: [
    {label: 'Programming Languages', text: 'C++, Python, Typescript, HTML', Icon: CommandLineIcon},
    {label: 'Years of Experience', text: '3', Icon: CalendarIcon},
  ],
}

export const rishayData: Programmers = {
  profileImageSrc: rishayPFP,
  name: `Rishay Singh`, 
  description: (
    <p className="prose prose-sm text-gray-300 sm:prose-base">
    Role: <strong className="font-bold text-gray-300">Frontend Developer of Bucees Template, Auton Developer, <br /> Website Developer, Main Documentaor</strong> <br />
    </p>
  ),
  aboutItems: [
    {label: 'Programming Languages', text: 'C++, Typescript, CSS, HTML', Icon: CommandLineIcon},
    {label: 'Years of Experience', text: '1', Icon: CalendarIcon},
  ],
}

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Bucees Project',
    description: 'A direct link that leads to our source code. Fully documented with version histories.',
    url: 'https://github.com/DaJdanni/507A-BOT',
    image: buceesProject,
  },
  {
    title: 'Bucees Updater',
    description: 'A VS-Code extension that can manage all versions of our code and share it easily amongst our team.',
    url: 'https://github.com/Adlaw-Andador/Bucees-Updater',
    image: buceesUpdater,
  },
  {
    title: 'Bucees Path Translator',
    description: 'A path.jerryio path translator to bucees project odometry.',
    url: 'https://github.com/Adlaw-Andador/Path-Translator',
    image: pathTranslator,
  },
  {
    title: 'Bucees Project Documentation',
    description: 'An API documentation that teaches you how to use our code efficiently.',
    url: 'https://507a.gitbook.io/bucees-project',
    image: buceesDocumentation,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  // {
  //   date: 'April 2007',
  //   location: 'Clown college',
  //   title: 'Masters in Beer tasting',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: temporary,
  testimonials: [
    {
      name: '16th Annual Chula Vista Tournament',
      text: 'Won: Tournament Champion, Innovate Award',
      image: 'https://static.wixstatic.com/media/f9fd96_5758a7901c6c46e9b7591eeae6a8f774~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f9fd96_5758a7901c6c46e9b7591eeae6a8f774~mv2.png',
    },
    {
      name: 'Supernova Spectacular High School Tournament',
      text: 'Won: Think Award',
      image: 'https://yt3.googleusercontent.com/eXhmT8OENKCXjvX82ISsupZ0FfG0o63cFlLKHbs1x5ZkpGcznRQExQ_zBcYVO5pTmQ5IWWD5=s160-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'South San Diego High Stakes Tournament',
      text: 'Won: Tournament Champion',
      image: 'https://ccr.sweetwaterschools.org/wp-content/uploads/blogs.dir/116/files/2022/06/STEAM-Logo-Color_300-ppi-300x298.png',
    },
    {
      name: 'Chaminade Showdown V5RC High Stakes Tournament',
      text: 'Won: Robot Skills Champion, Think Award',
      image: 'https://www.robotevents.com/uploads/team_regs/b08ff690df88fa419c4657e4b2d7fae3.png?1722187855',
    },
    {
      name: '2024 SUHSD VEX Robotics HS League',
      text: 'Won: Tournament Champion, Robot Skills Champion',
      image: 'https://ccr.sweetwaterschools.org/wp-content/uploads/blogs.dir/116/files/2022/06/STEAM-Logo-Color_300-ppi-300x298.png',
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    // {
    //   type: ContactType.Email,
    //   text: 'reachout@timbaker.me',
    //   href: 'mailto:reachout@timbaker.me',
    // },
    // {
    //   type: ContactType.Location,
    //   text: 'Victoria BC, Canada',
    //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
 // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  //{label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
