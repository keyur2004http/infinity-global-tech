import { cn } from "@/lib/utils";
import {
  MailIcon,
  MegaphoneIcon,
  SearchIcon,
  GlobeIcon,
  BarChartIcon,
  UsersIcon,
  PenToolIcon,
  MonitorPlayIcon,
} from "lucide-react";


export function ServiceSection() {
  const features = [
    {
      title: "Email Marketing",
      description:
        "Engage your audience with personalized and automated email campaigns that drive conversions.",
      icon: <MailIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: "Social Media Marketing",
      description:
        "Boost your brand presence across platforms with data-driven campaigns and content strategies.",
      icon: <MegaphoneIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: "SEO & PPC",
      description:
        "Improve visibility, rank higher on search engines, and maximize ROI with targeted paid ads.",
      icon: <SearchIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: "Content Marketing",
      description:
        "Build trust and authority with engaging blogs, copywriting, and storytelling tailored to your brand.",
      icon: <PenToolIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: "Global Reach",
      description:
        "Expand internationally with multilingual campaigns and strategies tailored for diverse audiences.",
      icon: <GlobeIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track campaigns in real-time with actionable insights and ROI-driven performance reports.",
      icon: <BarChartIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: "Lead Generation",
      description:
        "Convert prospects into customers with funnels, landing pages, and high-performing ad strategies.",
      icon: <UsersIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: "Video Marketing",
      description:
        "Engage your audience with compelling video content, ads, and storytelling campaigns.",
      icon: <MonitorPlayIcon className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="py-16 px-6 lg:px-16  ">
  {/* Section Title & Subtitle */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-extrabold text-gray-900 ">
      Our Services
    </h2>
    <p className="mt-4 text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
      Explore our wide range of digital solutions designed to grow your business and enhance your online presence.
    </p>
  </div>

  {/* Features Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 py-10 max-w-7xl mx-auto cursor-pointer">
    {features.map((feature, index) => (
      <Feature key={feature.title} {...feature} index={index} />
    ))}
  </div>
</div>

  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
