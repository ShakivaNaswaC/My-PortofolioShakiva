'use client';

import { useState } from 'react';
import { Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const [showMore, setShowMore] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "Compsigala",
      issuer: "PUFA COMPUTER SCIENCE",
      date: "June 2025",
      image: "/icons/compsigala.png",
      featured: true,
    },
    {
      id: 2,
      title: "Planning a Machine Learning Project",
      issuer: "Amazon Web Services",
      date: "April 2025",
      image: "/icons/sertif-aws.png",
      featured: true,
    },
    {
      id: 3,
      title: "Machine Learning Essentials for Business and Technical Decision Makers",
      issuer: "Amazon Web Services",
      date: "April 2025",
      image: "/icons/sertif-machine-learning.png",
      featured: true,
    },
    {
      id: 4,
      title: "Volunteer PIC - Social Media Division",
      issuer: "SetSail BizAccel",
      date: "February 2025 - May 2025",
      image: "/icons/picsosmed.jpg",
      featured: true,
    },
    {
      id: 5,
      title: "CSGO 2025",
      issuer: "PUFA COMPUTER SCIENCE",
      date: "November 2024 - February 2025",
      image: "/icons/csgo.png",
      featured: false,
    },
    {
      id: 6,
      title: "Compcrusader Gemastik - UX Design Division",
      issuer: "PUFA COMPUTER SCIENCE",
      date: "October 2024",
      image: "/icons/gemestik-page-0001.jpg",
      featured: false,
    },
    {
      id: 7,
      title: "Power BI",
      issuer: "PUMA BUSINESS ADMINISTRATION",
      date: "July 2024",
      image: "/icons/powerbi.jpg",
      featured: false,
    },
    {
      id: 8,
      title: "Economic Survival Business Project Exhibition",
      issuer: "President University",
      date: "May 2024",
      image: "/icons/exhibition.png",
      featured: false,
    },
    {
      id: 9,
      title: "Internship Experience at SetSail BizAccel",
      issuer: "SetSail BizAccel",
      date: "September 2023 - April 2024",
      image: "/icons/webdev.png",
      featured: false,
    },
  ];

  const displayedCertificates = showMore ? certificates : certificates.filter((cert) => cert.featured);

  return (
    <section id="certificates" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Training</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements that validate my expertise
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedCertificates.map((cert) => (
            <Card key={cert.id} className="group hover-glow bg-card border-border overflow-hidden">
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <div className="p-1.5 bg-primary/90 rounded-full">
                    <Award className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-foreground text-sm leading-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-primary text-xs font-medium">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
