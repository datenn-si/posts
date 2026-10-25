# posts

[English](README.md) | 日本語

このリポジトリでは、`blog.datenn.si` で公開している記事の本文と画像を管理しています。記事ごとにフォルダを分け、本文はMDXで書いています。

## リポジトリの構成 (抜粋)

```text
posts/
├── YYYY-MM-DD-slug/         # 記事1本ごとのフォルダ
│   └── README.mdx           # 記事の本文
├── post.config.json         # 新規投稿の設定
├── scripts/new-post.ts      # 新規投稿CLI
├── .markdownlint-cli2.yaml  # markdownlint の設定
├── .oxfmtrc.json            # oxfmtの設定
├── LICENSE                  # MIT-0ライセンスの全文
├── package.json             # 依存パッケージの定義
└── pnpm-workspace.yaml      # pnpmの設定
```

### 記事フォルダの命名規則

記事のフォルダは、`YYYY-MM-DD-slug` という形式で名付けています。

- `YYYY-MM-DD`: 記事の日付(年・月・日)です。
- `slug`: 記事を表す短い識別子です。英小文字と数字をハイフンで区切って書きます。

## 新規投稿を作成する

`pnpm new-post` を実行し、slugを入力します。フォルダと`README.mdx`が作成されます。authorのデフォルト値は`post.config.json`で変更できます。

## ライセンス

[COPYING.md](COPYING.md) を参照してください。
