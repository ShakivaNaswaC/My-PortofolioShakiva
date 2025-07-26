import { useState, useEffect } from 'react';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const [imageIndexes, setImageIndexes] = useState<{[key: number]: number}>({});

  const experiences = [
    {
      id: 1,
      company: "Member Communication and Multimedia",
      position: "PUFA COMPUTER SCIENCE (BEM FACULTY)",
      duration: "November 2024 - Present",
      description: "PUFA Computer Science is a dynamic organization within President University, serving as a platform for students pursuing various computing-related fields like Information Technology and Information Systems.",
      responsibilities: [
        "Multimedia Content & Editing — Creating designs, videos, and podcasts for social media.",
        "Media Management & Publication — Managing digital content and wall magazines.",
      ],
      logo: "/icons/logo-pufa-2.png",
      images: [
        "/icons/pufa2.JPG",
        "/icons/pufa3.jpg",
        "/icons/pufa1.jpg",
      ]
    },
    {
      id: 2,
      company: "PIC/USG of Data Master",
      position: "PRESMUN 2025",
      duration: "November 2024 - July 2025",
      description: "PRESMUN 2025 is a global youth forum to explore diplomacy and international issues, fostering collaboration and solution-building for a better future.",
      responsibilities: [
        "Responsible for planning and coordinating the development of the PRESMUN website.",
        "Ensuring that the website is completed on time and in accordance with the needs of the event.",
      ],
      logo: "/icons/presmun.png",
      images: [
        "/icons/presmun2.png",
        "/icons/presmun1.jpg",
        "/icons/presmun3.jpg"
      ]
    },
    {
      id: 3,
      company: "Multiple Positions",
      position: "SETSAIL BIZACCEL",
      duration: "October 2023 - May 2025",
      description: "SetSail BizAccel is President University Business Accelerator. As a University-based Business Incubator, We aim to build an entrepreneurial ecosystem for students at President University.",
      positions: [
        {
          title: "Supervisor of Social Media Division Intern",
          duration: "February 2025 - May 2025",
          responsibilities: [
            "Coordinate and remind the team regarding content planning and publication.",
            "Supervise and ensure that content is in line with the objectives and schedule that have been set."
          ]
        },
        {
          title: "Mentor of Website and Application Division Intern",
          duration: "October 2024 - December 2024",
          responsibilities: [
            "Directing the web development team in the process of creating websites.",
            "Mentoring junior developers in best practices and code quality."
          ]
        },
        {
          title: "Intern of Website and Application Division",
          duration: "October 2023 - December 2023",
          responsibilities: [
            "Create and develop website appearance and features.",
            "Manage routine maintenance and content updates for the website."
          ]
        }
      ],
      logo: "/icons/setsail.png",
      images: [
        "/icons/setsail1.jpg",
        "/icons/setsail3.jpg",
        "/icons/setsail2.jpg"
      ]
    }
  ];

  // Initialize image indexes
  useEffect(() => {
    const initialIndexes: {[key: number]: number} = {};
    experiences.forEach(exp => {
      initialIndexes[exp.id] = 0;
    });
    setImageIndexes(initialIndexes);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    experiences.forEach(exp => {
      const interval = setInterval(() => {
        setImageIndexes(prev => ({
          ...prev,
          [exp.id]: (prev[exp.id] + 1) % exp.images.length
        }));
      }, 4000);
      intervals.push(interval);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const nextImage = (expId: number) => {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;
    setImageIndexes(prev => ({
      ...prev,
      [expId]: (prev[expId] + 1) % exp.images.length
    }));
  };

  const prevImage = (expId: number) => {
    const exp = experiences.find(e => e.id === expId);
    if (!exp) return;
    setImageIndexes(prev => ({
      ...prev,
      [expId]: (prev[expId] - 1 + exp.images.length) % exp.images.length
    }));
  };

  const setImageIndex = (expId: number, index: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [expId]: index
    }));
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border h-full"></div>
          
          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10 top-6">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </div>

                {/* Single combined card */}
                <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                }`}>
                  <Card className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        
                        {/* Left side: Logo and Image carousel */}
                        <div className="lg:w-2/5">
                          {/* Company logo */}
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/20">
                              <img 
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-12 h-12 object-contain"
                                onError={(e) => {
                                  e.currentTarget.src = '/icons/placeholder.png';
                                }}
                              />
                            </div>
                          </div>
                          
                          {/* Image carousel */}
                          <div className="relative">
                            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                              <img 
                                src={exp.images[imageIndexes[exp.id] || 0]}
                                alt={`${exp.company} experience ${(imageIndexes[exp.id] || 0) + 1}`}
                                className="w-full h-full object-cover transition-all duration-500"
                                onError={(e) => {
                                  e.currentTarget.src = '/icons/placeholder.png';
                                }}
                              />
                            </div>
                            
                            {/* Carousel controls */}
                            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
                              <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => prevImage(exp.id)}
                                className="bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-lg"
                              >
                                <ArrowLeft className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => nextImage(exp.id)}
                                className="bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-lg"
                              >
                                <ArrowRight className="w-4 h-4" />
                              </Button>
                            </div>
                            
                            {/* Dots indicator */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                              {exp.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setImageIndex(exp.id, idx)}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    idx === (imageIndexes[exp.id] || 0) ? 'bg-primary' : 'bg-background/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right side: Content */}
                        <div className="lg:w-3/5">
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                              <h4 className="text-lg text-primary font-semibold">{exp.company}</h4>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.duration}
                              </div>
                            </div>
                            
                            <p className="text-muted-foreground">{exp.description}</p>
                            
                            <div>
                              {exp.positions ? (
                                // Multiple positions (SetSail)
                                <div className="space-y-6">
                                  <h5 className="font-semibold text-foreground mb-2">Career Progression:</h5>
                                  {exp.positions.map((position, posIdx) => (
                                    <div key={posIdx} className="border-l-2 border-primary/20 pl-4 space-y-2">
                                      <div>
                                        <h6 className="font-semibold text-foreground">{position.title}</h6>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                          <Calendar className="w-3 h-3" />
                                          {position.duration}
                                        </div>
                                      </div>
                                      <ul className="space-y-1 text-sm text-muted-foreground">
                                        {position.responsibilities.map((resp, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                            {resp}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                // Single position
                                <div>
                                  <h5 className="font-semibold text-foreground mb-2">Key Responsibilities:</h5>
                                  <ul className="space-y-1 text-sm text-muted-foreground">
                                    {exp.responsibilities?.map((resp, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        {resp}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;