import { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Web Developer", "UI/UX Designer", "Data Analyst"];
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = roles[currentRole];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  const handleViewCV = () => {
    const link = document.createElement('a');
    link.href = '/transkip nilai shakiva.pdf';  // Make sure this is publicly accessible
    link.target = '_blank'; // Open the PDF in a new tab
    link.rel = 'noopener noreferrer';  // Security best practice
    link.click();
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/shakivanaswa', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shakiva-naswa-crescensia-4b33b0200/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/ShakivaNaswaC', label: 'GitHub' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Profile Image - Atas saat mobile */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-primary p-1 hover:shadow-primary transition-all duration-300">
                <div className="w-full h-full rounded-full bg-card overflow-hidden">
                  <img
                    src="/icons/Group 2.png"
                    alt="Shakiva Naswa Crescensia Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary text-lg font-medium">Hello, I'm</p>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Shakiva Naswa Crescensia
                </h1>
              </div>

              <div className="h-16 flex items-center justify-center lg:justify-start">
                <span className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  I'm a{" "}
                  <span className="text-gradient typing-effect">
                    {displayText}
                  </span>
                </span>
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Specializing in crafting responsive websites, intuitive user interfaces, and turning data into insights.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleViewCV}
                  className="bg-gradient-primary hover:shadow-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Transkip Nilai
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="#project" className="flex items-center">
                    View Project
                  </a>
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-primary transition-all duration-300 hover:-translate-y-1 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
