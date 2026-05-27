import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Wallet,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export function PaymentSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            支払条件・支給の流れ
          </h2>
          <p className="text-muted-foreground">
            紹介手当の支給条件と支給までの流れをご確認ください
          </p>
        </div>

        {/* 支払条件 */}
        <div className="mx-auto max-w-4xl mb-12">
          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                支払条件
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">
                    社員が自身の友人・知人を紹介する「直接紹介」のみ。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">
                    試用期間終了時点で、被紹介者が在籍していること。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">
                    手当支給月の末日までに紹介者・被紹介者が在籍していること。
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 支給の流れ */}
        <div className="mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            手当支給の流れ（例：被紹介者が4月1日入社の場合）
          </h3>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="absolute top-8 left-0 right-0 h-1 bg-border" />
              <div className="grid grid-cols-4 gap-4">
                {[
                  {
                    icon: Calendar,
                    date: "4月1日",
                    title: "入社",
                    description: "被紹介者が入社",
                  },
                  {
                    icon: Clock,
                    date: "6月30日",
                    title: "試用期間終了",
                    description: "試用期間が終了",
                  },
                  {
                    icon: CheckCircle2,
                    date: "7月1日",
                    title: "支払対象に",
                    description: "試用期間終了後、支払対象に",
                  },
                  {
                    icon: Wallet,
                    date: "9月25日",
                    title: "手当支給",
                    description: "8月分給与と併せて支給",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <Badge variant="secondary" className="mt-3 mb-2">
                      {step.date}
                    </Badge>
                    <h4 className="font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-center text-xs text-muted-foreground mt-1">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {[
                {
                  icon: Calendar,
                  date: "4月1日",
                  title: "入社",
                  description: "被紹介者が入社",
                },
                {
                  icon: Clock,
                  date: "6月30日",
                  title: "試用期間終了",
                  description: "試用期間が終了",
                },
                {
                  icon: CheckCircle2,
                  date: "7月1日",
                  title: "支払対象に",
                  description: "試用期間終了後、支払対象に",
                },
                {
                  icon: Wallet,
                  date: "9月25日",
                  title: "手当支給",
                  description: "8月分給与と併せて支給",
                },
              ].map((step, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-1">
                        {step.date}
                      </Badge>
                      <h4 className="font-semibold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            詳細は「社員紹介制度規程」をご確認ください。
          </p>
        </div>
      </div>
    </section>
  );
}
