import { describe, expect, test } from 'bun:test';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const projectRoot = join(import.meta.dir, '..');
const outputRoot = join(projectRoot, 'dist');

function outputFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? outputFiles(path) : [relative(outputRoot, path)];
  });
}

describe('production output', () => {
  test('contains complete German and social metadata', () => {
    const html = readFileSync(join(outputRoot, 'index.html'), 'utf8');

    expect(html).toContain('<html lang="de">');
    expect(html).toContain('<title>Snäx – einfach besser snacken</title>');
    expect(html).toContain('name="description"');
    expect(html).toContain('rel="canonical" href="https://snax.you/"');
    expect(html).toContain('property="og:locale" content="de_CH"');
    expect(html).toContain('property="og:image" content="https://snax.you/og-snax.jpg"');
    expect(html).toContain('name="twitter:card" content="summary_large_image"');
  });

  test('ships crawl files and approved launch graphics', () => {
    expect(existsSync(join(outputRoot, 'favicon.svg'))).toBe(true);
    expect(existsSync(join(outputRoot, 'og-snax.jpg'))).toBe(true);
    expect(existsSync(join(outputRoot, 'robots.txt'))).toBe(true);
    expect(existsSync(join(outputRoot, 'sitemap-index.xml'))).toBe(true);
  });

  test('excludes reference boards and inspiration captures', () => {
    const files = outputFiles(outputRoot);

    expect(files.some((file) => /Jan Moser|(^|\/)inspo(\/|$)/i.test(file))).toBe(false);
  });
});
