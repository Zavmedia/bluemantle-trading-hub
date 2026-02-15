import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, MessageCircle, Calendar, Award, TrendingUp, BookOpen, Users, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ApplyNowButton from "@/components/ApplyNowButton";

const Courses = () => {
  const { toast } = useToast();

  useEffect(() => {
    const submissionSuccess = sessionStorage.getItem("submission_success");
    if (submissionSuccess === "true") {
      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "We'll contact you soon to discuss your trading journey.",
        duration: 10000,
      });
      sessionStorage.removeItem("submission_success");
    }
  }, [toast]);

  const masterCourseModules = [
    "Introduction to Stock Market and Forex",
    "Fundamental Analysis",
    "Technical Analysis & Indicators",
    "Intraday Stock Trading Strategies",
    "Options Trading & Derivatives",
    "Risk Management and Position Sizing",
    "Commodity (Gold) Trading",
    "Funded Accounts Assistance & Guidance",
    "Trading Psychology",
    "Backtesting & Trading Plan Development",
    "Live Trading Sessions",
  ];

  const nismBenefits = [
    "Career-focused financial certification",
    "Real-world market content",
    "Complete exam guidance and support",
    "Industry-recognized qualification",
    "Placement assistance",
  ];

  const additionalServices = [
    { icon: TrendingUp, title: "Live Trading Sessions", desc: "Watch experts trade in real-time" },
    { icon: MessageCircle, title: "Doubt Clearance", desc: "24/7 community support" },
    { icon: Users, title: "Community Networking", desc: "Connect with fellow traders" },
    { icon: BookOpen, title: "Study Materials", desc: "Comprehensive e-books & resources" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Programs</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Our <span className="text-gradient-cyan">Courses</span> & Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive training programs designed to make you a confident, independent trader
            </p>
          </motion.div>
        </div>
      </section>

      {/* Master Course */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="premium-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
                  <div>
                    <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-2">Flagship Program</p>
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 tracking-tight">
                      Master in <span className="text-gradient-cyan">Financial Market</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">(Stock Market + Forex)</p>
                  </div>
                  <div className="px-5 py-2.5 rounded-full bg-secondary/10 text-secondary font-bold text-sm border border-secondary/20">
                    3 Months Duration
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 tracking-tight">
                  <Target className="text-secondary" size={22} />
                  What You'll Learn
                </h3>

                <div className="grid md:grid-cols-2 gap-3 mb-10">
                  {masterCourseModules.map((module, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors"
                    >
                      <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-foreground font-medium">{module}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="section-divider mb-8" />

                <div className="flex flex-wrap gap-4">
                  <ApplyNowButton />
                  <Button size="lg" variant="outline" className="border-secondary/30 text-secondary hover:bg-secondary/10">
                    <MessageCircle className="mr-2" size={18} />
                    Ask for Free Demo Class
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/Bluemantle%20Brochure.pdf" download="Bluemantle-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2" size={18} />
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NISM Certification */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="premium-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-accent text-sm font-semibold uppercase tracking-[0.15em] mb-1">Certification</p>
                    <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                      <span className="text-gradient-gold">NISM (SEBI) Certification</span>
                    </h2>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-2xl p-6 mb-8 border border-border/50">
                  <p className="text-base font-semibold text-foreground mb-1">
                    Specially designed for Degree & PG Students
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Build a strong foundation for your career in financial markets with industry-recognized certification
                  </p>
                </div>

                <h3 className="text-lg font-bold mb-5 tracking-tight">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-10">
                  {nismBenefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors"
                    >
                      <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-foreground font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <ApplyNowButton />
                  <Button size="lg" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                    <MessageCircle className="mr-2" size={18} />
                    Talk to Counsellor
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Support</p>
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Additional <span className="text-gradient-cyan">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">Complete support for your trading journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {additionalServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="premium-card rounded-2xl p-7 text-center h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
