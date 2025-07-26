import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TechItem {
  name: string;
  icon: string;
  color?: string;
}

interface SkillSection {
  title: string;
  items: TechItem[];
  details?: {
    card1?: { title: string; items: string[] };
    card2?: { title: string; items: string[] };
    card3?: { title: string; items: string[] };
    card4?: { title: string; items: string[] };
  };
}

const TechnicalSkills = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const skillSections: SkillSection[] = [
    {
      title: "Design & UI/UX",
      items: [
        { name: "Figma", icon: "src/assets/figma.png", color: "#F24E1E" }
      ],
      details: {
        card1: {
          title: "Design Tools",
          items: ["Figma (Advanced)", "Interactive Prototyping", "Component Design"]
        },
        card2: {
          title: "Core Competencies",
          items: ["User Interface Design", "Wireframing", "User Flow Design", "Visual Design"]
        },
        card3: {
          title: "Design Principles",
          items: ["User-centered design", "Mobile-first approach", "Responsive design", "Design Systems"]
        },
        card4: {
          title: "Experience With",
          items: ["Mobile app interfaces", "Web application design", "Component libraries", "Design consistency"]
        }
      }
    },
    {
      title: "Frontend Development",
      items: [
        { name: "HTML", icon: "src/assets/html.png", color: "#E34F26" },
        { name: "CSS", icon: "src/assets/css.png", color: "#1572B6" },
        { name: "JavaScript", icon: "src/assets/js.png", color: "#F7DF1E" },
        { name: "React JS", icon: "src/assets/react.png", color: "#61DAFB" },
        { name: "Next.JS", icon: "src/assets/nextjs.png", color: "#000000" },
        { name: "Tailwind CSS", icon: "src/assets/tailwindcss.png", color: "#06B6D4" }
      ],
      details: {
        card1: {
          title: "Languages",
          items: ["HTML5", "CSS3", "JavaScript (ES6+)"]
        },
        card2: {
          title: "Frameworks/Libraries",
          items: ["React.js", "Next.js"]
        },
        card3: {
          title: "CSS Frameworks",
          items: ["Tailwind CSS", "CSS Modules", ]
        },
        card4: {
          title: "Responsive Design",
          items: ["Mobile-first approach", "Cross-browser compatibility", "Performance optimization"]
        }
      }
    },
    {
      title: "Backend Development", 
      items: [
        { name: "Django", icon: "src/assets/django.png", color: "#092E20" },
        { name: "Python", icon: "src/assets/python.png", color: "#3776AB" },
        { name: "Java", icon: "src/assets/java.png", color: "#ED8B00" },
        { name: "PHP", icon: "src/assets/php.png", color: "#777BB4" }
      ],
      details: {
        card1: {
          title: "Languages",
          items: ["Python", "Java", "PHP"]
        },
        card2: {
          title: "Frameworks",
          items: ["Django"]
        },
        card3: {
          title: "API Development",
          items: ["JSON handling", "API Documentation"]
        },
        card4: {
          title: "Core Concepts",
          items: ["Server-side logic", "Authentication", "Business processes"]
        }
      }
    },
    {
      title: "Database",
      items: [
        { name: "PostgreSQL", icon: "src/assets/postgresql.png", color: "#336791" },
        { name: "MySQL", icon: "src/assets/mysql.png", color: "#4479A1" }
      ],
      details: {
        card1: {
          title: "Database Systems",
          items: ["MySQL", "PostgreSQL"]
        },
        card2: {
          title: "Database Design",
          items: ["Data modeling", "Normalization"]
        },
        card3: {
          title: "SQL Skills",
          items: ["Complex queries", "Joins & subqueries", "Stored procedures", "Functions"]
        },
        card4: {
          title: "Database Administration",
          items: ["Performance optimization", "Index management", "Backup & recovery"]
        }
      }
    },
    {
      title: "Data Analyst & Machine Learning",
      items: [
        { name: "Pandas", icon: "src/assets/pandas.png", color: "#150458" },
        { name: "Scikit-learn", icon: "src/assets/scikit-learn.png", color: "#F7931E" },
        { name: "Power BI", icon: "src/assets/power bi.png", color: "#F2C811" }
      ],
      details: {
        card1: {
          title: "Programming",
          items: ["Python", "SQL", "Data Processing"]
        },
        card2: {
          title: "Libraries",
          items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
        },
        card3: {
          title: "ML Techniques",
          items: ["Predictive modeling", "Classification", "Data preprocessing", "Model Evaluation"]
        },
        card4: {
          title: "Visualization",
          items: ["Power BI", "Matplotlib", "Statistical analysis", "Dashboard Creation"]
        }
      }
    }
  ];

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  const DetailCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className="bg-background rounded-xl p-6 shadow-lg border border-border">
      <h4 className="text-primary font-semibold text-lg mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-muted-foreground flex items-start text-sm">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-3">Technical Skills</h1>
          <p className="text-muted-foreground text-lg">Programming languages<br />and tools.</p>
        </div>

        <div className="space-y-12">
          {skillSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <div className="flex items-center justify-center gap-6">
                <div className="h-px bg-border flex-1 max-w-32"></div>
                <h3 className="text-xl font-medium text-foreground italic whitespace-nowrap">{section.title}</h3>
                <div className="h-px bg-border flex-1 max-w-32"></div>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleSection(section.title)}
                  className="text-xs px-4 py-2 h-8 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 rounded-full flex items-center gap-1"
                >
                  View Details
                  {expandedSection === section.title ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 bg-background px-5 py-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:bg-background/80 border border-border"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img 
                        src={item.icon} 
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-foreground font-medium text-sm">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {expandedSection === section.title && section.details && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in slide-in-from-top-2 duration-300">
                  {section.details.card1 && (
                    <DetailCard title={section.details.card1.title} items={section.details.card1.items} />
                  )}
                  {section.details.card2 && (
                    <DetailCard title={section.details.card2.title} items={section.details.card2.items} />
                  )}
                  {section.details.card3 && (
                    <DetailCard title={section.details.card3.title} items={section.details.card3.items} />
                  )}
                  {section.details.card4 && (
                    <DetailCard title={section.details.card4.title} items={section.details.card4.items} />
                  )}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;