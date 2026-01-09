import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import {
  CloudLightning,
  Youtube,
  Linkedin,
  BookOpen,
  Users,
  Award,
  Building2,
  Menu,
  X,
  Github,
  Mail,
  Briefcase,
  GraduationCap,
  Code,
} from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#2a3645] text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    // { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#1f2937] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <CloudLightning className="w-8 h-8 text-[#ff9c08]" />
            <span className="font-bold text-xl">Nensi Ravaliya</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-[#ff9c08]'
                    : 'text-gray-300 hover:text-[#ff9c08]'
                } transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-[#ff9c08]'
                      : 'text-gray-300 hover:text-[#ff9c08]'
                  } block px-3 py-2 text-base font-medium`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a3645] to-[#ff9c08]/20 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-4">Nensi Ravaliya</h1>
              <p className="text-xl text-[#ff9c08] mb-4">
                AWS Yatri Community Leader & Cloud Solutions Architect Trainer
              </p>
              {/* AWS Certification Badge */}
              <div className="mb-8 inline-flex items-center space-x-3 bg-gradient-to-r from-[#ff9c08]/20 to-[#ff9c08]/10 border-2 border-[#ff9c08] rounded-lg px-6 py-3 backdrop-blur-sm">
                <Award className="w-6 h-6 text-[#ff9c08] animate-pulse" />
                <span className="text-lg font-bold text-white">
                  AWS Solutions Architect
                </span>
                <span className="text-[#ff9c08] font-semibold">Certified</span>
              </div>
              <div className="flex space-x-4 mb-8">
                <CloudLightning className="w-12 h-12 text-[#ff9c08] animate-pulse" />
              </div>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="inline-block bg-[#ff9c08] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff9c08]/90 transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-[#ff9c08] shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://raw.githubusercontent.com/yatricloud/yatri-images/refs/heads/main/Team%20Yatri%20Cloud/Nensi%20Ravaliya/profile-nensi-ravaliya.png"
                  alt="Nensi Ravaliya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard
              icon={<Youtube />}
              number="8000+"
              label="YouTube Subscribers"
            />
            <StatsCard
              icon={<Users />}
              number="20000"
              label="LinkedIn Network"
            />
            <StatsCard
              icon={<Award />}
              number="100+"
              label="AWS Certifications Guided"
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Building2 />}
              title="Standard Chartered"
              description="Devsecops Engineer"
            />
            <FeatureCard
              icon={<Users />}
              title="Yatri Cloud"
              description="Cloud and DevOps Community"
            />
            <FeatureCard
              icon={<Code />}
              title="ML Summer School Intern 2024"
              description="AI & Machine Learning"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {/* Certification Highlight */}
            <div className="bg-gradient-to-r from-[#ff9c08]/20 to-[#ff9c08]/10 border-2 border-[#ff9c08] rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-[#ff9c08]" />
                <div>
                  <p className="text-xl font-bold text-white">
                    AWS Solutions Architect
                  </p>
                  <p className="text-[#ff9c08] font-semibold">Certified Professional</p>
                </div>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              As a Devsecops Engineer at Standard Chartered and an AWS Solutions Architect Certified professional, I believe in
              growing together as a team. My passion lies in building and
              nurturing communities, particularly in the AWS ecosystem.
            </p>
            <p className="text-lg leading-relaxed">
              Through Yatri Cloud, I've helped over 100 individuals achieve AWS
              certifications and built a thriving community of cloud
              enthusiasts. My YouTube channel has grown to over 8000
              subscribers, where I share valuable AWS content and certification
              tips.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Core Values</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Community-driven learning</li>
                <li>Knowledge sharing</li>
                <li>Team growth</li>
                <li>Technical excellence</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-[#1f2937] p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              <div className="space-y-4">
                <ExperienceItem
                  title="Devsecops Engineer"
                  company="Standard Chartered"
                  period="Full-time"
                />
                <ExperienceItem
                  title="Creator"
                  company="Yatri Cloud"
                  period="Community"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: 'AWS Solutions Architecture Guide',
      description:
        'Designed and implemented scalable cloud architectures for enterprise clients',
      tags: ['AWS', 'Cloud Architecture', 'DevOps'],
      icon: <CloudLightning />,
    },
    {
      title: 'Yatri Cloud Platform',
      description:
        'Community learning platform for AWS certification preparation',
      tags: ['AWS', 'Education', 'Community'],
      icon: <Users />,
    },
    {
      title: 'Technical Content Creation',
      description: 'AWS tutorials and certification guides on YouTube and blog',
      tags: ['Content', 'AWS', 'Education'],
      icon: <BookOpen />,
    },
  ];

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const certifications = [
    {
      title: 'AWS Solutions Architect Professional',
      date: '2023',
      icon: <Award />,
    },
    {
      title: 'AWS DevOps Engineer Professional',
      date: '2022',
      icon: <Award />,
    },
    {
      title: 'AWS Security Specialty',
      date: '2022',
      icon: <Award />,
    },
  ];

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">AWS Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              Let's connect! Whether you're interested in AWS certifications,
              cloud solutions, or community collaboration, I'm here to help.
            </p>
            <div className="space-y-4">
              <ContactLink
                href="mailto:ravaliyanensi@gmail.com"
                icon={<Mail />}
                label="ravaliyanensi@gmail.com"
              />
              <ContactLink
                href="https://www.linkedin.com/in/nencyravaliya28/"
                icon={<Linkedin />}
                label="LinkedIn"
              />
              <ContactLink
                href="https://youtube.com/@yatricloud"
                icon={<Youtube />}
                label="YouTube"
              />
            </div>
          </div>
          <div className="bg-[#1f2937] p-6 rounded-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

// Utility Components
function StatsCard({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <div className="bg-[#2a3645] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center space-x-4">
        <div className="text-[#ff9c08]">{icon}</div>
        <div>
          <div className="text-2xl font-bold">{number}</div>
          <div className="text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1f2937] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center space-x-4">
        <div className="text-[#ff9c08]">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({
  title,
  company,
  period,
}: {
  title: string;
  company: string;
  period: string;
}) {
  return (
    <div className="border-l-2 border-[#ff9c08] pl-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-[#ff9c08]">{company}</p>
      <p className="text-gray-400">{period}</p>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  icon,
}: {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-[#1f2937] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
      <div className="text-[#ff9c08] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#2a3645] text-[#ff9c08] px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function CertificationCard({
  title,
  date,
  icon,
}: {
  title: string;
  date: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-[#1f2937] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
      <div className="text-[#ff9c08] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{date}</p>
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 text-gray-300 hover:text-[#ff9c08] transition-colors duration-300"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-[#2a3645] rounded-lg border-gray-600 text-white px-4 py-2 focus:ring-[#ff9c08] focus:border-[#ff9c08]"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-[#2a3645] rounded-lg border-gray-600 text-white px-4 py-2 focus:ring-[#ff9c08] focus:border-[#ff9c08]"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-[#2a3645] rounded-lg border-gray-600 text-white px-4 py-2 focus:ring-[#ff9c08] focus:border-[#ff9c08]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#ff9c08] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff9c08]/90 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}

export default App;
