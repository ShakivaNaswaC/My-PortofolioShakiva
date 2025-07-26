const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            About me
          </h2>
          <p className="text-muted-foreground text-lg">
            Who I Am & What I Do
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/icons/Group 2 (1).png" 
                  alt="Shakiva Naswa Crescensia - About Photo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-glow/30 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                Hi! I'm <span className="text-primary font-semibold">Shakiva Naswa Crescensia</span>, a 6th-semester Information Systems 
                student at President University with a passion for UI/UX design, web 
                development, and data analysis.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                I started through academic projects and internships, crafting user-friendly 
                and data-driven digital solutions. I specialize in intuitive UI design, 
                responsive websites, and turning raw data into meaningful insights.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                I've built websites for startup entrepreneurs through <span className="text-primary font-medium">SetSail BizAccel</span> 
                and visualized business ideas through engaging interfaces. I also work 
                with data to generate insights that support strategic decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Equipped with strong communication, time management, and teamwork skills, 
                I'm always eager to learn, grow, and collaborate on impactful tech projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;