import Image from "next/image";

export function ClosingSection() {
  return (
    <section className="pt-4 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">

          <div className="flex justify-center">
            <Image
              src="/image01.jpg"
              alt="カジュアル面談イメージ"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>

          <p className="text-base md:text-lg font-semibold text-accent">
            まずはカジュアル面談で話を聞きたい！という
            ご相談だけでも大歓迎です。
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            皆様からのご紹介をお待ちしています！
          </h2>
        </div>
      </div>
    </section>
  );
}
