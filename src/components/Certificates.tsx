'use client';

import { Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Planning a Machine Learning Project",
      issuer: "Amazon Web Services",
      date: "April 2025",
      image: "/icons/sertif-aws.png",
    },
    {
      id: 2,
      title: "Machine Learning Essentials for Business and Technical Decision Makers",
      issuer: "Amazon Web Services",
      date: "April 2025",
      image: "/icons/sertif-machine-learning.png",
    },
    {
      id: 3,
      title: "Power BI",
      issuer: "PUMA BUSINESS ADMINISTRATION",
      date: "July 2024",
      image: "/icons/powerbi.jpg",
    },
  ];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
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
      </div>
    </section>
  );
};

export default Certificates;
