// Shared by detail and list rendering. Keep this interface usable by both.
let cached;
export function metadata(article) {
  cached ??= { slug: article.slug, publishedAt: article.publishedAt, authorName: article.authorName, authorTitle: article.authorTitle };
  return cached;
}
