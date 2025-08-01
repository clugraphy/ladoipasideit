import { promises as fs } from 'fs';
import path from 'path';

async function getNoteSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, '/'));
}

export default async function sitemap() {
  const notesDirectory = path.join(process.cwd(), 'app', 'b');
  const slugs = await getNoteSlugs(notesDirectory);

  const blog = slugs.map((slug) => ({
    url: `https://ldpdeit.ceverything.ro/b/${slug}`,
    lastModified: new Date().toISOString(),
      }));

  const routes = ['', '/work', '/contact', '/projects'].map((route) => ({
    url: `https://ldpdeit.ceverything.ro${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blog];
}
