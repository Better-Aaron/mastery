import DevImg from './dev-img';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Aaron kim',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '010-1234-5678',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'k.aaron.kim@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Aaron kim',
  },
  {
    icon: <GraduationCap size={20} />,
    text: '컴퓨터 소프트웨어 공학 졸업',
  },
  {
    icon: <HomeIcon size={20} />,
    text: '대구 달성군',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'some University',
        qualification: 'Computer software',
        year: '2002-2012',
      },
      {
        university: 'some University',
        qualification: 'Computer software',
        year: '2002-2012',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Accenture',
        role: 'Software Engineer',
        years: '2012-2015',
      },
      {
        company: 'samin',
        role: 'Software Engineer',
        years: '2012-2015',
      },
      {
        company: 'samin',
        role: 'Software Engineer',
        years: '2022 ~ Present',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'Javascript, JSP',
      },
      {
        name: 'Back-end Development',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/assets/about/vscode.svg',
      },
      {
        imgPath: '/assets/about/notion.svg',
      },
      {
        imgPath: '/assets/about/figma.svg',
      },
      {
        imgPath: '/assets/about/wordpress.svg',
      },
    ],
  },
];
const about = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto xl:mb-16 mb-8">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/assets/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmached Service Qualify for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I sepcilize in crafting intuitive websites with
                      cutting-edge technology, deleivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div className="">{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div className="">Korean, English</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualifications">
                  <div className="">
                    <h3 className="h3 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="">
                      {/* experience */}
                      <div className="">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] top-[5px] group-hover:translate-y-[30px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="">education</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
