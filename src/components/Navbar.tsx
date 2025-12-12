import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Users, ShoppingCart, Handshake, Building2, Lightbulb, Mail, Leaf, FileText, Target, BookOpen, Menu, X, ChevronDown, Calculator } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import ranaLogo from "figma:asset/70c6d6740bd42316c4c5fea5bc7ba57852ccc0f8.png";
import { RequestDemoModal } from "./RequestDemoModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Solutions");
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileImpactOpen, setMobileImpactOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active item based on current path
  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith('/solutions')) {
      setActiveItem("Solutions");
    } else if (path.startsWith('/company')) {
      setActiveItem("Company");
    } else if (path.startsWith('/impact')) {
      setActiveItem("Impact");
    } else if (path.startsWith('/newsroom')) {
      setActiveItem("Newsroom");
    } else if (path.startsWith('/insights')) {
      setActiveItem("Resources");
    } else if (path === '/') {
      setActiveItem("Solutions");
    }
  }, [location]);

  const menuItems = ["Solutions", "Company", "Impact", "Newsroom", "Resources"];

  const solutionItems = [
    {
      label: "Overview",
      description: "Complete platform capabilities",
      icon: Sparkles,
      href: "/solutions/",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      label: "Solar Calculator",
      description: "Size systems & model savings",
      icon: Calculator,
      href: "/solutions/iris/",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      label: "For Homeowners",
      description: "Track & earn from clean energy",
      icon: Users,
      href: "/solutions/homeowners/",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      label: "For Businesses",
      description: "Purchase verified impact credits",
      icon: ShoppingCart,
      href: "/solutions/businesses/",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      label: "For Partners",
      description: "Join the clean energy ecosystem",
      icon: Handshake,
      href: "/solutions/partners/",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
  ];

  const companyItems = [
    {
      label: "About Us",
      description: "Our mission and vision",
      icon: Building2,
      href: "/company/about-us/",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      label: "How It Works",
      description: "Understand our technology",
      icon: Lightbulb,
      href: "/company/how-it-works/",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
    {
      label: "Contact Us",
      description: "Get in touch with our team",
      icon: Mail,
      href: "/company/contact/",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
  ];

  const impactItems = [
    {
      label: "CO2 Savings",
      description: "Track verified carbon reduction",
      icon: Leaf,
      href: "/impact/co2-savings/",
      gradient: "from-[#527E5F] to-[#3d5d48]"
    },
    {
      label: "Case Studies",
      description: "Real-world impact stories & reports",
      icon: FileText,
      href: "/impact/case-studies/",
      gradient: "from-[#F57B44] to-[#e06a33]"
    },
    {
      label: "Alignment with SDG Goals",
      description: "Contributing to global sustainability",
      icon: Target,
      href: "/impact/sdg/",
      gradient: "from-[#F6B842] to-[#F57B44]"
    },
  ];



  return (
    <div className="sticky top-0 z-50 w-full overflow-x-hidden">
      {/* Premium navbar with floating menu */}
      <nav className={`bg-white/98 backdrop-blur-xl transition-all duration-300 w-full ${scrolled
          ? "shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)]"
          : ""
        }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group cursor-pointer">
              <img
                src={ranaLogo}
                alt="Rana54"
                className="h-12 sm:h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Floating menu container */}
            <div className="hidden lg:flex items-center">
              <div className="relative bg-gray-50/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl px-2 py-2 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-1">
                  {menuItems.map((item) => {
                    if (item === "Solutions") {
                      return (
                        <DropdownMenu key={item} open={solutionsOpen} onOpenChange={setSolutionsOpen}>
                          <DropdownMenuTrigger asChild>
                            <button
                              onClick={() => setActiveItem(item)}
                              className="relative px-5 py-2.5 rounded-xl transition-all duration-300"
                            >
                              <span className={`relative z-10 tracking-wide transition-colors ${activeItem === item
                                  ? "text-white"
                                  : "text-gray-600 hover:text-gray-900"
                                }`}>
                                {item}
                              </span>
                              {activeItem === item && (
                                <div className="absolute inset-0 bg-gradient-to-r from-[#527E5F] to-[#3d5d48] rounded-xl shadow-lg" />
                              )}
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            className="w-80 mt-4 bg-gradient-to-br from-[#527E5F] to-[#3d5d48] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.4)] p-3 overflow-hidden"
                            align="start"
                          >
                            <div className="space-y-1.5">
                              {solutionItems.map((solution) => {
                                const Icon = solution.icon;
                                return (
                                  <Link
                                    key={solution.label}
                                    to={solution.href}
                                    onClick={() => setSolutionsOpen(false)}
                                  >
                                    <DropdownMenuItem
                                      className="group relative px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white/95 focus:bg-white/95 overflow-hidden border border-transparent hover:border-white/20 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)]"
                                    >
                                      <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-all duration-300" />

                                      <div className="relative flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                          <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                                        </div>

                                        <div className="flex-1 min-w-0 pt-0.5">
                                          <div className="text-white/95 tracking-wide mb-1 group-hover:text-[#527E5F] transition-colors duration-300">
                                            {solution.label}
                                          </div>
                                          <div className="text-sm text-white/70 leading-snug group-hover:text-gray-600 transition-colors duration-300">
                                            {solution.description}
                                          </div>
                                        </div>

                                        <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-[#527E5F] group-hover:translate-x-1 transition-all duration-300 mt-3 flex-shrink-0" strokeWidth={2.5} />
                                      </div>
                                    </DropdownMenuItem>
                                  </Link>
                                );
                              })}
                            </div>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      );
                    }

                    if (item === "Company") {
                      return (
                        <DropdownMenu key={item} open={companyOpen} onOpenChange={setCompanyOpen}>
                          <DropdownMenuTrigger asChild>
                            <button
                              onClick={() => setActiveItem(item)}
                              className="relative px-5 py-2.5 rounded-xl transition-all duration-300"
                            >
                              <span className={`relative z-10 tracking-wide transition-colors ${activeItem === item
                                  ? "text-white"
                                  : "text-gray-600 hover:text-gray-900"
                                }`}>
                                {item}
                              </span>
                              {activeItem === item && (
                                <div className="absolute inset-0 bg-gradient-to-r from-[#527E5F] to-[#3d5d48] rounded-xl shadow-lg" />
                              )}
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            className="w-80 mt-4 bg-gradient-to-br from-[#527E5F] to-[#3d5d48] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.4)] p-3 overflow-hidden"
                            align="start"
                          >
                            <div className="space-y-1.5">
                              {companyItems.map((company) => {
                                const Icon = company.icon;
                                return (
                                  <Link
                                    key={company.label}
                                    to={company.href}
                                    onClick={() => setCompanyOpen(false)}
                                  >
                                    <DropdownMenuItem
                                      className="group relative px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white/95 focus:bg-white/95 overflow-hidden border border-transparent hover:border-white/20 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)]"
                                    >
                                      <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-all duration-300" />

                                      <div className="relative flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${company.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                          <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                                        </div>

                                        <div className="flex-1 min-w-0 pt-0.5">
                                          <div className="text-white/95 tracking-wide mb-1 group-hover:text-[#527E5F] transition-colors duration-300">
                                            {company.label}
                                          </div>
                                          <div className="text-sm text-white/70 leading-snug group-hover:text-gray-600 transition-colors duration-300">
                                            {company.description}
                                          </div>
                                        </div>

                                        <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-[#527E5F] group-hover:translate-x-1 transition-all duration-300 mt-3 flex-shrink-0" strokeWidth={2.5} />
                                      </div>
                                    </DropdownMenuItem>
                                  </Link>
                                );
                              })}
                            </div>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      );
                    }

                    if (item === "Impact") {
                      return (
                        <DropdownMenu key={item} open={impactOpen} onOpenChange={setImpactOpen}>
                          <DropdownMenuTrigger asChild>
                            <button
                              onClick={() => setActiveItem(item)}
                              className="relative px-5 py-2.5 rounded-xl transition-all duration-300"
                            >
                              <span className={`relative z-10 tracking-wide transition-colors ${activeItem === item
                                  ? "text-white"
                                  : "text-gray-600 hover:text-gray-900"
                                }`}>
                                {item}
                              </span>
                              {activeItem === item && (
                                <div className="absolute inset-0 bg-gradient-to-r from-[#527E5F] to-[#3d5d48] rounded-xl shadow-lg" />
                              )}
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            className="w-80 mt-4 bg-gradient-to-br from-[#527E5F] to-[#3d5d48] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.4)] p-3 overflow-hidden"
                            align="start"
                          >
                            <div className="space-y-1.5">
                              {impactItems.map((impact) => {
                                const Icon = impact.icon;
                                return (
                                  <Link
                                    key={impact.label}
                                    to={impact.href}
                                    onClick={() => setImpactOpen(false)}
                                  >
                                    <DropdownMenuItem
                                      className="group relative px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white/95 focus:bg-white/95 overflow-hidden border border-transparent hover:border-white/20 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)]"
                                    >
                                      <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-all duration-300" />

                                      <div className="relative flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${impact.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                          <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                                        </div>

                                        <div className="flex-1 min-w-0 pt-0.5">
                                          <div className="text-white/95 tracking-wide mb-1 group-hover:text-[#527E5F] transition-colors duration-300">
                                            {impact.label}
                                          </div>
                                          <div className="text-sm text-white/70 leading-snug group-hover:text-gray-600 transition-colors duration-300">
                                            {impact.description}
                                          </div>
                                        </div>

                                        <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-[#527E5F] group-hover:translate-x-1 transition-all duration-300 mt-3 flex-shrink-0" strokeWidth={2.5} />
                                      </div>
                                    </DropdownMenuItem>
                                  </Link>
                                );
                              })}
                            </div>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      );
                    }

                    return (
                      <Link
                        key={item}
                        to={item === "Newsroom" ? "/newsroom/" : "/insights/"}
                        onClick={() => setActiveItem(item)}
                        className="relative px-5 py-2.5 rounded-xl transition-all duration-300"
                      >
                        <span className={`relative z-10 tracking-wide transition-colors ${activeItem === item
                            ? "text-white"
                            : "text-gray-600 hover:text-gray-900"
                          }`}>
                          {item}
                        </span>
                        {activeItem === item && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#527E5F] to-[#3d5d48] rounded-xl shadow-lg" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Desktop CTA button */}
            <div className="hidden lg:flex items-center">
              <Button
                onClick={() => setDemoModalOpen(true)}
                className="relative overflow-hidden bg-gradient-to-r from-[#F57B44] to-[#e06a33] hover:from-[#e06a33] hover:to-[#F57B44] text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-[0_12px_28px_-8px_rgba(245,123,68,0.5)] transition-all duration-300 group"
              >
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="relative flex items-center gap-2">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </span>
              </Button>
              <RequestDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#527E5F]/10 to-[#F57B44]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Menu className="h-6 w-6 text-gray-700 relative z-10" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[420px] p-0 overflow-y-auto bg-gradient-to-br from-[#527E5F] via-[#527E5F] to-[#3d5d48]">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigate through different sections of the Rana54 website
                  </SheetDescription>
                  <div className="flex flex-col min-h-full relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#F6B842]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 left-0 w-32 h-32 bg-[#F57B44]/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 right-0 w-28 h-28 bg-white/5 rounded-full blur-2xl" />

                    {/* Premium mobile menu header */}
                    <div className="relative px-6 py-8">
                      <div className="flex items-center justify-between">
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                          <img src={ranaLogo} alt="Rana54" className="h-14 w-auto brightness-0 invert" />
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setMobileMenuOpen(false)}
                          className="h-10 w-10 text-white hover:bg-white/20 rounded-xl transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </div>

                      {/* Tagline */}
                      <p className="mt-4 text-white/90 text-sm tracking-wide">
                        Verified Clean Energy Impact
                      </p>
                    </div>

                    {/* Mobile navigation items */}
                    <div className="flex-1 py-2 px-4 space-y-3 relative">
                      {/* Solutions Section */}
                      <Collapsible open={mobileSolutionsOpen} onOpenChange={setMobileSolutionsOpen}>
                        <CollapsibleTrigger className="group relative flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                              <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-white tracking-wide text-sm sm:text-base">Solutions</span>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-white/70 transition-transform duration-300 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 space-y-2 pl-2">
                          {solutionItems.map((solution) => {
                            const Icon = solution.icon;
                            return (
                              <Link
                                key={solution.label}
                                to={solution.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="group relative flex items-start gap-3 w-full px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white border border-white/10 hover:border-white/20 hover:shadow-lg transition-all text-left"
                              >
                                <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all`}>
                                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1 min-w-0 pt-0.5">
                                  <div className="text-white mb-0.5 tracking-wide text-sm">{solution.label}</div>
                                  <div className="text-xs text-white/70 leading-snug">{solution.description}</div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all mt-3 opacity-0 group-hover:opacity-100" />
                              </Link>
                            );
                          })}
                        </CollapsibleContent>
                      </Collapsible>

                      {/* Company Section */}
                      <Collapsible open={mobileCompanyOpen} onOpenChange={setMobileCompanyOpen}>
                        <CollapsibleTrigger className="group relative flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-white tracking-wide text-sm sm:text-base">Company</span>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-white/70 transition-transform duration-300 ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 space-y-2 pl-2">
                          {companyItems.map((company) => {
                            const Icon = company.icon;
                            return (
                              <Link
                                key={company.label}
                                to={company.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="group relative flex items-start gap-3 w-full px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white border border-white/10 hover:border-white/20 hover:shadow-lg transition-all text-left"
                              >
                                <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${company.gradient} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all`}>
                                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1 min-w-0 pt-0.5">
                                  <div className="text-white mb-0.5 tracking-wide text-sm">{company.label}</div>
                                  <div className="text-xs text-white/70 leading-snug">{company.description}</div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all mt-3 opacity-0 group-hover:opacity-100" />
                              </Link>
                            );
                          })}
                        </CollapsibleContent>
                      </Collapsible>

                      {/* Impact Section */}
                      <Collapsible open={mobileImpactOpen} onOpenChange={setMobileImpactOpen}>
                        <CollapsibleTrigger className="group relative flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F6B842] to-[#d9a131] flex items-center justify-center">
                              <Target className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-white tracking-wide text-sm sm:text-base">Impact</span>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-white/70 transition-transform duration-300 ${mobileImpactOpen ? 'rotate-180' : ''}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 space-y-2 pl-2">
                          {impactItems.map((impact) => {
                            const Icon = impact.icon;
                            return (
                              <Link
                                key={impact.label}
                                to={impact.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="group relative flex items-start gap-3 w-full px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white border border-white/10 hover:border-white/20 hover:shadow-lg transition-all text-left"
                              >
                                <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${impact.gradient} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all`}>
                                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1 min-w-0 pt-0.5">
                                  <div className="text-white mb-0.5 tracking-wide text-sm">{impact.label}</div>
                                  <div className="text-xs text-white/70 leading-snug">{impact.description}</div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all mt-3 opacity-0 group-hover:opacity-100" />
                              </Link>
                            );
                          })}
                        </CollapsibleContent>
                      </Collapsible>

                      {/* Newsroom - Standalone */}
                      <Link
                        to="/newsroom/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="group relative flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all text-left border border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <BookOpen className="w-5 h-5 text-white" strokeWidth={2.5} />
                          </div>
                          <span className="text-white tracking-wide text-sm sm:text-base">Newsroom</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </Link>

                      {/* Resources - Standalone */}
                      <Link
                        to="/insights/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="group relative flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all text-left border border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F57B44] to-[#e06a33] flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
                          </div>
                          <span className="text-white tracking-wide text-sm sm:text-base">Resources</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </div>

                    {/* Premium Mobile CTA */}
                    <div className="relative p-6 mt-4 border-t border-white/10">
                      <Button
                        onClick={() => {
                          setDemoModalOpen(true);
                          setMobileMenuOpen(false);
                        }}
                        className="relative w-full overflow-hidden bg-white hover:bg-white/95 text-[#527E5F] py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F6B842]/10 to-[#F57B44]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        <span className="relative flex items-center justify-center gap-2 tracking-wide">
                          Request a Demo
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                        </span>
                      </Button>

                      {/* Quick links */}
                      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/70">
                        <button className="hover:text-white transition-colors">Privacy</button>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <button className="hover:text-white transition-colors">Terms</button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}