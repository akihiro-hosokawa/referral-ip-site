import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Mail, ExternalLink } from "lucide-react";

export function HowToSection() {
  return (
    <section id="how-to" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ご紹介方法
          </h2>
          <p className="text-muted-foreground">
            以下の方法でご紹介いただけます
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
          <Card className="bg-card">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                社員紹介フォーム
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                社員紹介フォームよりご連絡ください
              </p>
              <Button variant="outline" asChild className="gap-2">
                <a href="https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=u5VuxIBxEECCzks8S_fMVsbX0h-VNq5OkJZoceWhgKVUOUhaMEw5NzlCWVBaNlhKSUU3TjZERks4TC4u" target="_blank" rel="noopener noreferrer">
                  フォームへアクセス
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                メールでのお問合せ
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                人財戦略部 採用企画チームまで
              </p>
              <Button variant="outline" asChild className="gap-2">
                <a href="mailto:fun_recruiting@funlead.co.jp">
                  <Mail className="h-4 w-4" />
                  fun_recruiting@funlead.co.jp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
