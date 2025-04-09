
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ahnaf",
      role: "Flutter & UI",
      avatar: "A",
      color: "bg-disaster-500",
    },
    {
      name: "Hirah",
      role: "Flutter + Docker",
      avatar: "H",
      color: "bg-yellow-500",
    },
    {
      name: "Soumya",
      role: "IoT Integration",
      avatar: "S",
      color: "bg-disaster-700",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-disaster-400 to-yellow-500 bg-clip-text text-transparent inline-block">
            Meet Team MidNighters
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-disaster-500 to-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="bg-secondary border-border/20 hover:border-disaster-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-disaster-500/10 animate-fade-in"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className={`w-24 h-24 ${member.color} mb-6 hover-scale`}>
                  <AvatarFallback className="text-2xl font-bold">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-xl text-gray-300">
            "We are Team MidNighters – Passionate developers building solutions that save lives."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
