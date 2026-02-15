import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses & Services" },
    { path: "/about", label: "About & Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-3">
        <div className="glass rounded-2xl">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-[72px]">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <motion.img
                  src={logo}
                  alt="Bluemantle Institute"
                  className="h-11 w-11 object-contain"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold tracking-tight text-foreground group-hover:text-gradient-cyan transition-colors duration-300">
                    BLUEMANTLE LLP
                  </h1>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    Institute of Technology
                  </p>
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-muted/60 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden md:flex items-center gap-3">
                <Button size="sm" asChild>
                  <Link to="/apply">Apply Now</Link>
                </Button>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-muted/50 transition-colors text-foreground"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="glass rounded-2xl overflow-hidden">
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive(item.path)
                        ? "bg-muted/60 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button size="sm" className="w-full" asChild>
                    <Link to="/apply" onClick={() => setIsOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
