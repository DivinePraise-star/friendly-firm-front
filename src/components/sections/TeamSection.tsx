
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "SENJIYUNVA MESARCH",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    bio: "Alex brings over 15 years of technology leadership and entrepreneurial experience to ACME Corp.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex@acmecorp.com"
    }
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    bio: "Sarah is a technology visionary with expertise in cloud architecture and software development.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@acmecorp.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80",
    bio: "Michael leads our creative team with an eye for detail and a passion for user-centered design.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@acmecorp.com"
    }
  },
  {
    name: "Lisa Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80",
    bio: "Lisa brings strategic thinking and data-driven marketing expertise to drive our growth initiatives.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@acmecorp.com"
    }
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-company-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 md:max-w-3xl mx-auto">
            Our talented team of professionals brings diverse skills and experiences to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <a 
                      href={member.social.linkedin} 
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                    >
                      <Linkedin size={16} className="text-white" />
                    </a>
                    <a 
                      href={member.social.twitter} 
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                    >
                      <Twitter size={16} className="text-white" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                    >
                      <Mail size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900">{member.name}</h3>
              <p className="text-company-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
