import {test} from 'node:test';
import assert from 'node:assert/strict';
import {articles} from '../articles.js';
import {metadata} from '../metadata.js';
import {renderIndex,renderArticle} from '../render.js';
test('index and detail retain content',()=>{for(const a of articles){assert.ok(renderIndex().includes(a.title));assert.ok(renderArticle(a.slug).includes(a.body));}assert.equal(renderArticle('missing'),null);});
test('integration: article and list metadata belongs to each article',()=>{for(const a of articles) { assert.deepEqual(metadata(a), {slug:a.slug,publishedAt:a.publishedAt,authorName:a.authorName,authorTitle:a.authorTitle}); assert.ok(renderArticle(a.slug).includes(`data-source="${a.slug}"`)); assert.ok(renderIndex().includes(`data-slug="${a.slug}" data-source="${a.slug}"`)); }});
