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
    <div className="relative w-full h-48 overflow-hidden">
      {/* Images */}
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

      {/* Navigation Arrows */}
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

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Skills Gap Analysis ( Coming Soon )",
      description: "The Skills Gap Analysis System helps evaluate students' skills based on industry standards. Developed for the President's University Internship and Career Center, this platform allows students, ICCs, and companies to access relevant information according to their needs through a customized display.",
      images: ["/src/assets/skillsgap.png", "/src/assets/skillsgap1.png"],
      technologies: ["React", "Node.js", "PostgreSQL", "Machine Learning"],
      featured: true
    },
    {
      id: 2,
      title: "Student Analysis Dashboard Web",
      description: "Session Quality Prediction is a predictive web application that analyzes session quality based on duration and attendance rates using academic data. The system provides prediction results, explanations, and recommendations to help effectively improve student participation.",
      images: ["/src/assets/student1.png", "/src/assets/student3.png"],
      technologies: ["Django", "HTML", "CSS", "PostgreSQL", "Machine Learning"],
      liveUrl: "https://drive.google.com/drive/folders/1eovUtK3Z5_Wnzhwzr65GiZQ8UU74eiFg",
      githubUrl: "https://github.com/yourusername/task-manager",
      featured: true
    },
    {
      id: 3,
      title: "Pawon Djanganan Website",
      description: "A modern, responsive website for traditional Indonesian restaurant. Features appetizing food photography, menu display, and location information with a warm, inviting design.",
      images: ["/src/assets/pawon1.png", "/src/assets/pawon2.png"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://shakivanaswac.github.io/Pawon-Djanganan/",
      githubUrl: "https://github.com/ShakivaNaswaC/Pawon-Djanganan",
      featured: true
    },
    {
      id: 4,
      title: "Nail.cyy Website",
      description: "This website is a Nail Art themed platform designed to make it easy for customers to view nail art price lists and documentation.",
      images: ["/src/assets/nail1.png", "/src/assets/nail2.png"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://shakivanaswac.github.io/Nail-Cyy/",
      githubUrl: "https://github.com/ShakivaNaswaC/Nail-Cyy",
      featured: false
    },
    {
      id: 5,
      title: "HRIS Mobile Apps",
      description: "This UI/UX project is a mobile application design aimed to streamline the recruitment process for both HR and job applicants. The app allows HR to post job vacancies, manage applications, and schedule interviews, while applicants can search for jobs, upload resumes, and track application status.",
      images: ["/src/assets/hrisui1.png", "/src/assets/hrisui2.png"],
      technologies: ["Figma", "UI/UX Design"],
      figmaUrl: "https://www.figma.com/design/DeankoBI4RC1z4l01fsCuc/ISAD-UI?node-id=0-1&p=f&t=9Ji70T7ZCDBIBHjd-0",
      featured: false
    },
    {
      id: 6,
      title: "Dental Clinic App UI",
      description: "A mobile UI design that simplifies clinic appointment management through two tailored interfaces: users can book and track doctor appointments, while clinic staff can oversee schedules, manage bookings, and monitor financial performance for efficient clinic operations.",
      images: ["/src/assets/dentalui1.png", "/src/assets/dentalui2.png"],
      technologies: ["Figma", "UI/UX Design"],
      figmaUrl: "https://www.figma.com/design/your-dental-clinic-design-link",
      featured: false
    }
  ];

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  const isFigmaProject = (project: any) => {
    return project.technologies.some((tech: string) => tech.toLowerCase().includes('figma'));
  };

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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="group hover-glow bg-card border-border overflow-hidden">
              {/* Project Image Slider */}
              <div className="relative overflow-hidden">
                <ProjectImageSlider 
                  images={project.images} 
                  title={project.title}
                  autoSlide={true}
                  slideInterval={4000}
                />
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
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
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
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
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
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
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

        {/* View All Projects Button */}
        <div className="text-center">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {showAll ? 'Show Less Projects' : 'View All Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;