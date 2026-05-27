"use client";

import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span>社員紹介制度のご案内</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Funleadの新しい仲間を
            <br />
            <span className="text-primary">ご紹介ください！</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            ご紹介いただいた社員の方に「社員紹介手当」をお支払いする制度です。
            <br className="hidden md:block" />
            友人・知人をご紹介いただくと、
            <span className="font-semibold text-foreground">
              最大30万円
            </span>
            の紹介手当を支給します。
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 px-8"
              onClick={() => scrollToSection("positions")}
            >
              <Users className="h-5 w-5" />
              募集職種を見る
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8"
              onClick={() => scrollToSection("how-to")}
            >
              紹介方法を確認
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
