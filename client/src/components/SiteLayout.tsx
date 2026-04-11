/*
Design philosophy for this file: Refined Corporate Modernism.
The shell must feel structured, premium, and easy to navigate on mobile and desktop.
Use disciplined spacing, calm transparency, and visible quote actions without overloading the header.
*/
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { brand, footerLinks, navItems, primaryCTA } from "@/lib/siteData";
import { ArrowRight, Menu, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useLocation } from "wouter";

function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
      <div className="border-b border-slate-200/70 bg-slate-950 text-slate-100">
        <div className="container flex items-center justify-between gap-4 py-2 text-sm">
          <div className="flex items-center gap-2 text-slate-200">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300" />
            <span>Boston commercial cleaning coverage across Greater Boston</span>
          </div>
          <a href={brand.phoneHref} className="hidden items-center gap-2 font-semibold text-white sm:inline-flex">
            <Phone className="h-4 w-4" />
            {brand.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white shadow-lg shadow-slate-900/15">
              HS
            </div>
            <div>
              <div className="font-[Manrope] text-lg font-extrabold tracking-[-0.04em] text-slate-950">
                Harbor Shine
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Commercial Cleaning
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "text-slate-950" : "text-slate-600"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white px-5">
            <a href={brand.phoneHref}>{brand.phoneDisplay}</a>
          </Button>
          <Button asChild className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800">
            <Link href={primaryCTA.href}>
              {primaryCTA.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full border-slate-300 bg-white lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] border-slate-200 bg-white sm:max-w-md">
            <div className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-slate-200 px-4 py-3 font-[Manrope] text-lg font-semibold text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={brand.phoneHref}
                className="rounded-2xl bg-slate-100 px-4 py-3 font-semibold text-slate-800"
              >
                Call {brand.phoneDisplay}
              </a>
              <Button asChild className="mt-2 rounded-2xl bg-slate-950 text-white hover:bg-slate-800">
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
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.25fr,1fr,1fr,1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-extrabold text-slate-950">
              HS
            </div>
            <div>
              <p className="font-[Manrope] text-lg font-extrabold text-white">{brand.legalName}</p>
              <p className="text-sm text-slate-400">Boston-focused janitorial and facility cleaning support.</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Professional commercial cleaning for offices, medical spaces, schools, and multi-tenant
            properties across Greater Boston.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="font-[Manrope] text-sm font-bold uppercase tracking-[0.22em] text-white/80">
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
        <div className="container flex flex-col gap-2 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Harbor Shine Commercial Cleaning. All rights reserved.</p>
          <p>{brand.address}</p>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
