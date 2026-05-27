import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PositionCardProps {
  title: string;
  icon: LucideIcon;
  reward: string;
  description: string;
  items: string[];
  highlight?: boolean;
}

export function PositionCard({
  title,
  icon: Icon,
  reward,
  description,
  items,
  highlight = false,
}: PositionCardProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
        highlight ? "border-primary ring-2 ring-primary/20" : "border-border"
      }`}
    >

      <CardHeader className="pb-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">
          {title}
        </CardTitle>
        <div className="mt-2">
          <span className="text-sm text-muted-foreground">紹介手当</span>
          <p className="text-3xl font-bold text-primary">{reward}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
