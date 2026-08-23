type SectionIndexProps = {
  numeral: string;
  tone?: "dark" | "light";
};

/* Roman numeral that indexes each chapter of the page. */
export function SectionIndex({ numeral, tone = "light" }: SectionIndexProps) {
  return (
    <p className={`section-index section-index-${tone}`} aria-hidden="true">
      <i />
      <span>{numeral}</span>
      <i />
    </p>
  );
}
