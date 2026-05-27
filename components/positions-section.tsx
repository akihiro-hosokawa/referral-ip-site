import { Monitor, Briefcase, ExternalLink } from "lucide-react";
import { PositionCard } from "@/components/position-card";
import { Button } from "@/components/ui/button";

export function PositionsSection() {
  return (
    <section id="positions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">募集職種・手当</h2>
          <p className="text-muted-foreground">
            採用HPにて募集している職種を受け付けています。
            <br />
            募集職種の詳細は<a href="https://www.funlead.co.jp/recruit/job/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">当社採用サイト</a>をご覧ください。
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          <PositionCard
            title="ITエンジニア"
            icon={Monitor}
            reward="300,000円"
            description="エンジニアとしての実務経験があれば、業務フェーズや役割は問いません！経験豊富なベテランも、キャリアアップをめざす若手～中堅も大歓迎！"
            items={[
              "開発（DX推進・クラウド・AI・ローコードほか）",
              "インフラ、社内SE",
              "PM、PMO",
              "要件定義/設計、製造/構築、運用、保守",
            ]}
            highlight={true}
          />

          <PositionCard
            title="営業・バックオフィス"
            icon={Briefcase}
            reward="50,000円"
            description="営業・バックオフィスの実務経験があれば、お会いしてみたいと思いますので簡単なプロフィールが分かればご相談ください！"
            items={["経理・財務", "その他バックオフィス業務"]}
            highlight={true}
          />
        </div>

        <p className="mt-8 text-center text-2xl md:text-3xl font-bold text-primary">
          🏢 名古屋・大阪支店でも積極採用しています！
        </p>

        <p className="mt-4 text-center text-sm md:text-base text-muted-foreground">
          プロジェクト事例や支社メンバーのコメントなど、支社の雰囲気が分かる詳細な案内は、こちらのページをご確認ください。
        </p>

        <div className="mt-4 flex justify-center">
          <Button variant="outline" asChild className="gap-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              名古屋・大阪支社紹介ページ
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
