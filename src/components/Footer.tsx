import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { ShareButton } from "@/components/ShareButton";

export const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses & Services" },
    { path: "/about", label: "About & Contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/bluemantle.llp?igsh=dGV3d21yNTY3a3Rs", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@bluemantleinstitute?si=N3F8zemYRhe2-d_a", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/bluemantle/", label: "LinkedIn" },
  ];

  return (
    <footer className="relative border-t border-border/50 mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-card/60" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Bluemantle" className="h-11 w-11 object-contain" />
              <div>
                <h3 className="text-lg font-bold tracking-tight text-foreground">BLUEMANTLE LLP</h3>
                <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] font-medium">Institute of Technology</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering traders with structured, practical education for the Indian Stock Market & Forex.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={15} className="mt-0.5 text-secondary flex-shrink-0" />
                <div>
                  <p>+91 70345 40404</p>
                  <p>+91 49242 44022</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail size={15} className="mt-0.5 text-secondary flex-shrink-0" />
                <a href="mailto:Info@bluemantletechnology.com" className="hover:text-foreground transition-colors duration-300">
                  Info@bluemantletechnology.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={15} className="mt-0.5 text-secondary flex-shrink-0" />
                <p>Ivy Biophilic Workspace, Thachampara Post, Palakkad, Kerala – 678593</p>
              </li>
            </ul>
          </div>

          {/* Social & Share */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground mb-5">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-secondary/15 flex items-center justify-center text-muted-foreground hover:text-secondary transition-all duration-300 hover:-translate-y-0.5"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <ShareButton />
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2025 Bluemantle Institute of Technology. All rights reserved.</p>
          <p className="text-muted-foreground/60">Empowering Traders Worldwide</p>
        </div>
      </div>
    </footer>
  );
};
