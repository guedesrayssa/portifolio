export function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="tag-list" aria-label="Tecnologias">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
