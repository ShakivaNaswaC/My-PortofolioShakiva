import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 812 - 3525 - 2585",
      href: "https://wa.me/6281235252585",
      colorClass: "contact-whatsapp"
    },
    {
      icon: Mail,
      label: "Email",
      value: "shakiva.crescensia@student.president.ac.id",
      href: "mailto:shakiva.crescensia@student.president.ac.id",
      colorClass: "contact-email"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cikarang, West Java",
      href: "",
      colorClass: "contact-location"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's discuss your next project or collaboration opportunity. I'm always excited to work on interesting challenges.
          </p>
        </div>

        {/* Main Content - Centered */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction Text - Centered */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Let's Start a Conversation</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
              Feel free to reach out through any of the following channels:
            </p>
          </div>

          {/* Contact Methods - Centered Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact) => (
              <Card key={contact.label} className="hover-glow bg-card border-border group cursor-pointer">
                <CardContent className="p-8 text-center">
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex flex-col items-center space-y-4">
                        <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                          <contact.icon className={`w-8 h-8 ${contact.colorClass} group-hover:text-primary transition-colors`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg mb-2">
                            {contact.label}
                          </h4>
                          <p className="text-muted-foreground text-sm break-all">{contact.value}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-4 rounded-full bg-secondary">
                        <contact.icon className={`w-8 h-8 ${contact.colorClass}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">
                          {contact.label}
                        </h4>
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action Message - Centered */}
          <div className="bg-gradient-secondary p-8 rounded-lg border border-border text-center">
            <p className="text-muted-foreground italic max-w-2xl mx-auto">
              "Feel free to reach out if you want to discuss a project or need assistance with any technical challenge. 
              I'm always happy to help!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
