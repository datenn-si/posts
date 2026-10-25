import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const prompt = createInterface({ input: stdin, output: stdout });

try {
  const slug = (await prompt.question('slug: ')).trim();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error('slugは英小文字・数字・ハイフンで入力してください。');
  }

  const config = JSON.parse(await readFile(join(root, 'post.config.json'), 'utf8')) as {
    author?: unknown;
  };
  if (config.author !== undefined && (typeof config.author !== 'string' || !config.author.trim())) {
    throw new Error('post.config.jsonに有効なauthorを設定してください。');
  }
  const author = typeof config.author === 'string' ? config.author : '';

  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const folder = join(root, `${date}-${slug}`);
  await mkdir(folder);
  await writeFile(
    join(folder, 'README.mdx'),
    `---\ntitle: ""\nauthor: ${JSON.stringify(author)}\ncategory: ""\ntags: []\n---\n`,
    { flag: 'wx' },
  );

  console.log(`作成しました: ${date}-${slug}/README.mdx`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
} finally {
  prompt.close();
}
