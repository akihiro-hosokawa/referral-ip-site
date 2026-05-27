import { Card, CardContent } from "@/components/ui/card";
import { Gift, MessageCircle } from "lucide-react";

export function CasualReferralSection() {
  return (
    <section className="bg-accent/10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-accent bg-card shadow-lg">
            <CardContent className="p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <Gift className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  選考時に商品券を贈呈
                </h2>
              </div>

              <p className="mb-8 text-lg leading-relaxed text-foreground">
                転職を考えている知人の方が実際に選考に進まれた場合に、
                <br />
                社員の方に
                <span className="font-bold text-accent">5,000円分の商品券</span>
                を贈呈いたします。
              </p>

              <div className="rounded-xl bg-secondary/50 p-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  こんな方でも大歓迎です。紹介に悩んだらまずはご相談ください！
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>転職を検討し始めたばかりの方</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>まだ何も決まっていないけど話だけ聞いてみたい方</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>興味があるのでオフィス見学してみたい方</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
