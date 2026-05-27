export function Footer() {
  return (
    <footer className="border-t border-border bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div>
            <h3 className="text-lg font-bold text-foreground">
              株式会社ファンリード
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              人財戦略部　採用企画チーム
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} funlead corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
