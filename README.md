# posts

English | [日本語](README.ja.md)

This repository manages the bodies and images for articles published on `blog.datenn.si`. Each article has its own folder, and its body is written in MDX.

## Repository structure (Excerpt)

```text
posts/
├── YYYY-MM-DD-slug/         # One folder per article
│   └── README.mdx           # Article body
├── .markdownlint-cli2.yaml  # markdownlint configuration
├── .oxfmtrc.json            # oxfmt configuration
├── LICENSE                  # Full text of the MIT-0 license
├── package.json             # Dependency definitions
└── pnpm-workspace.yaml      # pnpm configuration
```

### Article folder naming

Each article folder is named `YYYY-MM-DD-slug`.

- `YYYY-MM-DD`: The article's date (year, month, day).
- `slug`: A short identifier for the article, written in lowercase letters and hyphens.

## License

See [COPYING.md](COPYING.md).
