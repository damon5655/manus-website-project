import { type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { brand, navItems, footerLinks, primaryCTA } from "@/lib/siteData";

function Header() {
  const [location] = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top info bar */}
      <div className="hidden border-b border-slate-100 bg-slate-50 lg:block">
        <div className="container flex items-center justify-between py-2 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#5dab3b]" />
              Mon – Sat, 8am – 6pm
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#5dab3b]" />
              {brand.serviceArea}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${brand.email}`} className="flex items-center gap-1.5 transition hover:text-[#79abdc]">
              <Mail className="h-3.5 w-3.5" />
              {brand.email}
            </a>
            <a href={brand.phoneHref} className="flex items-center gap-1.5 font-semibold text-[#79abdc] transition hover:text-[#5dab3b]">
              <Phone className="h-3.5 w-3.5" />
              {brand.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#79abdc] text-sm font-extrabold text-white shadow-md">
            AG
          </div>
          <div>
            <div className="text-base font-extrabold tracking-tight text-slate-900">
              AG Best Cleaning
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#5dab3b]">
              Services
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "text-[#79abdc] font-semibold" : "text-slate-600"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" className="rounded-full border-slate-200 bg-white px-5 text-slate-700 hover:border-[#79abdc] hover:text-[#79abdc]">
            <a href={brand.phoneHref}>
              <Phone className="mr-2 h-4 w-4" />
              {brand.phoneDisplay}
            </a>
          </Button>
          <Button asChild className="rounded-full bg-[#5dab3b] px-5 text-white hover:bg-[#4d9430] shadow-md">
            <Link href={primaryCTA.href}>
              {primaryCTA.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full border-slate-200 bg-white lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] border-slate-100 bg-white sm:max-w-md">
            <div className="mt-8 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-slate-100 px-4 py-3 text-base font-semibold text-slate-800 transition hover:border-[#79abdc] hover:text-[#79abdc]"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={brand.phoneHref}
                className="mt-2 flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 font-semibold text-slate-700"
              >
                <Phone className="h-4 w-4 text-[#79abdc]" />
                {brand.phoneDisplay}
              </a>
              <Button asChild className="mt-1 rounded-xl bg-[#5dab3b] text-white hover:bg-[#4d9430]">
                <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.4fr,1fr,1fr,1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#79abdc] text-sm font-extrabold text-white">
              AG
            </div>
            <div>
              <p className="text-base font-extrabold text-white">{brand.legalName}</p>
              <p className="text-xs text-slate-400">Abington & Greater Boston</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-400">
            Professional residential and commercial cleaning services in Abington and the Greater Boston area. Trusted by families and businesses for over 6 years.
          </p>
          <div className="space-y-2 text-sm">
            <a href={brand.phoneHref} className="flex items-center gap-2 text-slate-400 transition hover:text-white">
              <Phone className="h-4 w-4 text-[#79abdc]" />
              {brand.phoneDisplay}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-slate-400 transition hover:text-white">
              <Mail className="h-4 w-4 text-[#5dab3b]" />
              {brand.email}
            </a>
          </div>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/70">
              {group.title}
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              {group.items.map((item) => (
                <a key={item.label} href={item.href} className="block transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AG Best Cleaning Services. All rights reserved.</p>
          <p>{brand.address}</p>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
