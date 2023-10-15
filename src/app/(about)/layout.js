import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "US Cup Tasters Champion",
  "3+ Years of Development Experience",
  "10 years Roasting Experience",
  "3 Years US Barista Semi Finalist",
  "AI Applications ",
  "Latte Art Skills",
  "SEO Experience",
];

export default function AboutLayout({children}) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  )
}