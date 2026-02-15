import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Floating3DElements } from "@/components/Floating3DElements";
import { AnimatedSphere } from "@/components/AnimatedSphere";
import { Phone, Mail, MapPin, Target, Eye, Users, Linkedin } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "PRASANTH PHILIP",
      role: "Founder & Director",
      bio: "Provides Overall Leadership and Strategic Direction for the Company",
      image: "/siju.jpg",
      linkedin: "",
    },
    {
      name: "SONIYA PRASANTH",
      role: "Director & General Manager",
      bio: "Oversees Daily Operations and Ensures Smooth, Efficient Management",
      image: "/Sony.jpg",
      linkedin: "",
    },
    {
      name: "VYSHAKH G",
      role: "Head of Derivatives & Technical Research",
      bio: "NISM(SEBI) Certified with 8+ years of Experience in Derivatives Market",
      image: "/Vyshakh G .jpg",
      linkedin: "",
    },
    {
      name: "AJAL BENNY",
      role: "Market Research Analyst / Mentor",
      bio: "Market Research Analyst with 2 years of active trading experience, specializing in high conviction market insights and strategic opportunity identification.",
      image: "/Ajal Benny .jpg",
      linkedin: "https://www.linkedin.com/in/ajal-benny-1803692a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "SHALU SHUJITH",
      role: "Market Research Analyst",
      bio: "Market Researcher with 2 years of practical trading experience, focused on analyzing price action and identifying high probability opportunities.",
      image: "/Shalu Sujith .jpg",
      linkedin: "",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
        <Floating3DElements />

        <div className="absolute right-20 top-10 opacity-20">
          <AnimatedSphere size={180} color="purple" delay={0} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-purple text-sm font-semibold uppercase tracking-[0.15em] mb-3">About</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              About <span className="text-gradient-purple">Bluemantle</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Empowering traders with structured, practical education for financial markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden">
        <Floating3DElements />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="premium-card rounded-3xl p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple/5 rounded-full blur-[60px]" />
                <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center mb-5 relative z-10">
                  <Eye className="w-6 h-6 text-purple" />
                </div>
                <h2 className="text-2xl font-extrabold mb-4 relative z-10 tracking-tight">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  To empower everyone to become confident and independent financial market professionals equipped with real-world trading skills and knowledge.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="premium-card rounded-3xl p-8 h-full relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full blur-[60px]" />
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 relative z-10">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-extrabold mb-4 relative z-10 tracking-tight">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  Provide structured training with real-world market relevance, live mentorship, and hands-on learning to build successful trading careers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Who We Are</p>
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Bluemantle Institute of Technology is a professional trading institute dedicated to delivering structured, practical market education. We specialize in the Indian Stock Market & Forex Trading, providing comprehensive training from NISM certified mentors. Our programs combine theoretical knowledge with live trading sessions, ensuring students gain real-world experience and confidence to succeed in financial markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Leadership</p>
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Meet Our <span className="text-gradient-cyan">Expert Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">NISM certified mentors with years of trading experience</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Top row - 3 members */}
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              {teamMembers.slice(0, 3).map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="premium-card rounded-2xl p-7 text-center h-full group">
                    <div className="w-20 h-20 rounded-2xl mx-auto mb-5 overflow-hidden ring-2 ring-secondary/20 ring-offset-2 ring-offset-background">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-base font-bold mb-1 tracking-tight">{member.name}</h3>
                    <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom row - 2 members centered */}
            <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {teamMembers.slice(3, 5).map((member, i) => (
                <motion.div
                  key={i + 3}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 3) * 0.08 }}
                >
                  <div className="premium-card rounded-2xl p-7 text-center h-full group">
                    <div className="w-20 h-20 rounded-2xl mx-auto mb-5 overflow-hidden ring-2 ring-secondary/20 ring-offset-2 ring-offset-background">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-base font-bold mb-1 tracking-tight">{member.name}</h3>
                    <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Reach Out</p>
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">We're here to help you start your trading journey</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="premium-card rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-secondary" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 70345 40404</p>
                    <p className="text-sm text-muted-foreground">+91 4924 244022</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-secondary" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Email</p>
                    <a href="mailto:Info@bluemantletechnology.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Info@bluemantletechnology.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-secondary" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Bluemantle Institute of Technology<br />
                      Ivy Biophilic Workspace<br />
                      Thachampara Post, Palakkad<br />
                      Kerala – 678593
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="premium-card rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Visit Us</h3>
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-border/50">
                <iframe
                  src="https://www.google.com/maps/place/Ivy+Biophilic+Workspace/@10.9616593,76.5113129,18.01z/data=!4m6!3m5!1s0x3ba87f0033c09661:0x272a0042436dbefb!8m2!3d10.9623483!4d76.511485!16s%2Fg%2F11v_8gy7kn?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bluemantle Institute Location"
                />
              </div>
              <Button variant="outline" className="mt-4 w-full" asChild>
                <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/SidqWGEdr28qhxfF8">
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
