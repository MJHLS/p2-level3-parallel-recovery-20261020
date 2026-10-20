import { articles } from './articles.js';
export function renderIndex() {
 return '<h1>Articles</h1><ul>' + articles.map(a => `<li data-slug="${a.slug}"><a href="/articles/${a.slug}">${a.title}</a></li>`).join('') + '</ul>';
}
export function renderArticle(slug) {
 const a = articles.find(a => a.slug === slug);
 return a ? `<article><h1>${a.title}</h1><p>${a.body}</p></article>` : null;
}
