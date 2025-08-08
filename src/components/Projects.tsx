'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Figma, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectImageSliderProps {
  images: string[];
  title: string;
  autoSlide?: boolean;
  slideInterval?: number;
}

const ProjectImageSlider = ({ images, title, autoSlide = true, slideInterval = 3000 }: ProjectImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, slideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, slideInterval, images.length]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (images.length <= 1) {
    return (
      <img 
        src={images[0]} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
      />
    );
  }

  return (
    <div className="relative w-full h-48 overflow-hidden group">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 ${
              index === currentIndex 
                ? 'opacity-100 translate-x-0' 
                : index < currentIndex 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        disabled={isAnimating}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/70'
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>

      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Skills Gap Analysis (Coming Soon)",
      description:
        "Helps evaluate students' skills based on industry standards. Developed for the President's University ICC, enabling access for students, ICC, and companies.",
      images: ["/icons/skillsgap.png", "/icons/skillsgap1.png"],
      technologies: ["React", "Node.js", "PostgreSQL", "Machine Learning"],
      featured: true,
    },
    {
      id: 2,
      title: "Student Analysis Dashboard Web",
      description:
        "Predictive web app that analyzes session quality based on attendance. Provides predictions, explanations, and recommendations.",
      images: ["/icons/student1.png", "/icons/student3.png"],
      technologies: ["Django", "HTML", "CSS", "PostgreSQL", "Machine Learning"],
      liveUrl: "https://drive.google.com/drive/folders/1eovUtK3Z5_Wnzhwzr65GiZQ8UU74eiFg",
      featured: true,
    },
    {
      id: 3,
      title: "Pawon Djanganan Website",
      description:
        "A modern website for a traditional Indonesian restaurant. Features food photography, menu, and location info.",
      images: ["/icons/pawon1.png", "/icons/pawon2.png"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://shakivanaswac.github.io/Pawon-Djanganan/",
      githubUrl: "https://github.com/ShakivaNaswaC/Pawon-Djanganan",
      featured: true,
    },
    {
      id: 4,
      title: "Nail.cyy Website",
      description:
        "Nail art-themed website that showcases price lists and documentation for customers.",
      images: ["/icons/nail1.png", "/icons/nail2.png"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://shakivanaswac.github.io/Nail-Cyy/",
      githubUrl: "https://github.com/ShakivaNaswaC/Nail-Cyy",
      featured: false,
    },
    {
      id: 5,
      title: "HRIS Mobile Apps",
      description:
        "UI/UX design for recruitment process. HR can post jobs and manage interviews; applicants can apply and track jobs.",
      images: ["/icons/hrisui1.png", "/icons/hrisui2.png"],
      technologies: ["Figma", "UI/UX Design"],
      figmaUrl:
        "https://www.figma.com/design/DeankoBI4RC1z4l01fsCuc/ISAD-UI?node-id=0-1&p=f&t=9Ji70T7ZCDBIBHjd-0",
      featured: false,
    },
    {
      id: 6,
      title: "Dental Clinic App UI",
      description:
        "Mobile UI for clinic appointments. Patients book and track visits; staff manage bookings and finances.",
      images: ["/icons/dentalui1.png", "/icons/dentalui2.png"],
      technologies: ["Figma", "UI/UX Design"],
      figmaUrl: "https://www.figma.com/design/your-dental-clinic-design-link",
      featured: false,
    },
  ];

  const isFigmaProject = (project: any) =>
    project.technologies.some((tech: string) => tech.toLowerCase().includes("figma"));

  const isStudentProject = (title: string) =>
    title.toLowerCase().includes("student analysis dashboard web");

  const displayedProjects = projects;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="group hover-glow bg-card border-border overflow-hidden">
              <div className="relative overflow-hidden">
                <ProjectImageSlider images={project.images} title={project.title} autoSlide={true} slideInterval={4000} />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {isFigmaProject(project) ? (
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                        <Figma className="w-4 h-4 mr-2" />
                        View Design
                      </a>
                    </Button>
                  ) : (
                    <>
                      {project.liveUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-4 h-4 mr-2" />
                            {isStudentProject(project.title) ? 'Video Demo' : 'Live Demo'}
                          </a>
                        </Button>
                      )}
                      {!isStudentProject(project.title) && project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {isFigmaProject(project) ? (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                          <Figma className="w-4 h-4 mr-2" />
                          View in Figma
                        </a>
                      </Button>
                    ) : (
                      <>
                        {project.liveUrl && (
                          <Button size="sm" className="flex-1" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {isStudentProject(project.title) ? 'Video Demo' : 'Live Demo'}
                            </a>
                          </Button>
                        )}
                        {!isStudentProject(project.title) && project.githubUrl && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
