import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TradingCandlesticks } from "@/components/TradingCandlesticks";
import { Floating3DElements } from "@/components/Floating3DElements";
import { AnimatedSphere } from "@/components/AnimatedSphere";
import { MarketTicker } from "@/components/MarketTicker";
import { Award, Users, BookOpen, TrendingUp, Shield, Target, Zap, Calendar, Star, BadgeCheck, GraduationCap, FileText, ArrowRight, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import bluemantleLogo from "@/assets/bluemantle-logo.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const Home = () => {
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

  const stats = [
    { value: "24,400+", label: "Students Enrolled" },
    { value: "NISM", label: "Certified Mentors" },
    { value: "38+", label: "Weekly Live Classes" },
    { value: "4.8★", label: "Average Rating" },
  ];

  const features = [
    { icon: Target, title: "Quality Learning", desc: "Structured curriculum designed for all experience levels" },
    { icon: Users, title: "Expert Guidance", desc: "Learn from NISM certified market professionals" },
    { icon: Calendar, title: "Flexible Batches", desc: "Choose schedules that fit your lifestyle" },
    { icon: Zap, title: "Live Training", desc: "Real-time sessions with active market analysis" },
    { icon: BookOpen, title: "No Prerequisites", desc: "Begin your journey from absolute scratch" },
    { icon: Shield, title: "Lifetime Support", desc: "Ongoing mentorship and community access" },
    { icon: BadgeCheck, title: "Govt. Approved", desc: "Skill India Registered Program" },
    { icon: GraduationCap, title: "Certification", desc: "Industry-relevant certificates on completion" },
    { icon: FileText, title: "Study Materials", desc: "Exclusive notes and premium resources" },
  ];

  const specialFeatures = [
    "WhatsApp Premium Community Support",
    "News Updates & Trading Plan Guidance",
    "Funded Accounts Assistance & Guidance",
    "Trading Psychology Sessions",
    "Revision Classes & Study Materials",
    "Dedicated Trading Floor Access",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

        {/* Subtle ambient orbs */}
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-purple/6 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: "3s" }} />

        <TradingCandlesticks />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-xs font-medium text-muted-foreground mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Skill India Registered Program
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.08] tracking-tight">
                Master Trading.{" "}
                <span className="text-gradient-cyan">Build Wealth.</span>
                <br />
                <span className="text-gradient-gold">Transform Your Future.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                Learn from NISM certified mentors. Master the Indian Stock Market & Forex Trading with expert guidance, live sessions, and comprehensive support.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-16">
                <Button size="lg" asChild>
                  <Link to="/courses">
                    Explore Courses
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-border/60 text-foreground hover:bg-muted/50">
                  Join Free Webinar
                </Button>
              </div>

              {/* Stats */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan mb-1 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Ticker */}
      <MarketTicker />

      {/* Core Features */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-secondary text-sm font-semibold uppercase tracking-[0.15em] mb-3">Why Choose Us</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">
              Why Choose <span className="text-gradient-cyan">Bluemantle</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training designed for your success in financial markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <div className="premium-card rounded-2xl p-7 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/15 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Features */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card rounded-3xl p-10 lg:p-14"
          >
            <div className="text-center mb-10">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.15em] mb-3">Exclusive Access</p>
              <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                Premium <span className="text-gradient-gold">Features</span>
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {specialFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0">
                    <Star size={14} className="text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <Floating3DElements />

        <div className="absolute left-10 top-20 opacity-30">
          <AnimatedSphere size={150} color="purple" delay={0.2} />
        </div>
        <div className="absolute right-10 bottom-20 opacity-30">
          <AnimatedSphere size={120} color="cyan" delay={0.5} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl overflow-hidden ring-2 ring-accent/20 ring-offset-4 ring-offset-background">
              <img src={bluemantleLogo} alt="Bluemantle Logo" className="w-full h-full object-cover" />
            </div>
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.15em] mb-3">Certification</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
              Excel Your Career with{" "}
              <span className="text-gradient-gold">NISM Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Get Bluemantle Institute Certification along with NISM Certification Guidance & Exam Assistance. Build a strong foundation for your financial market career.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold" asChild>
              <Link to="/apply">
                Get Certified
                <ChevronRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <Floating3DElements />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple to-secondary opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

            <div className="relative z-10 p-12 lg:p-20 text-center">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ready to Start Your Trading Journey?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Join thousands of successful traders who transformed their lives with Bluemantle
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-background hover:bg-white/90 font-bold rounded-full px-8"
                  animated={false}
                  asChild
                >
                  <Link to="/apply">
                    Apply Now
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
                  animated={false}
                  asChild
                >
                  <a
                    href="/Bluemantle%20Brochure.pdf"
                    download="Bluemantle-Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Brochure
                  </a>
                </Button>
              </div>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
