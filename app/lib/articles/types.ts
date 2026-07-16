// 知识频道文章类型定义
// 新增文章：在本目录加一个 <slug>.ts 文件，并在 ../news-data.ts 的列表中登记

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] };

export type Article = {
  slug: string;
  title: string;
  category: '办事指南' | '政策解读' | '常见问题';
  date: string; // YYYY-MM-DD
  excerpt: string;
  blocks: ArticleBlock[];
  seoDescription: string;
};
