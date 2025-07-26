import profileImage from '@/assets/profile-image.jpg';

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
              <div className="w-80 h-80 rounded-lg overflow-hidden">
                <img 
                  src="src/assets/Group 2 (1).png" 
                  alt="Shakiva Naswa Crescensia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hi! I'm Shakiva Naswa Crescensia, a 6th-semester Information Systems 
                student at President University with a passion for UI/UX design, web 
                development, and data analysis.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I started through academic projects and internships, crafting user-friendly 
                and data-driven digital solutions. I specialize in intuitive UI design, 
                responsive websites, and turning raw data into meaningful insights.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I've built websites for startup entrepreneurs through SetSail BizAccel 
                and visualized business ideas through engaging interfaces. I also work 
                with data to generate insights that support strategic decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
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