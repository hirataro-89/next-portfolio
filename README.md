## エクスポートルール（命名・設計の方針）

このプロジェクトでは、可読性・保守性・補完性を高めるために以下のルールで `export` を使い分けています。

| ファイル種別         | exportの種類   | 命名・構成のルール |
|----------------------|----------------|--------------------|
| **ページファイル** (`page.tsx`) | `default export` | Next.js App Router の仕様に従い、ページは default export |
| **UIコンポーネント** (`Button.tsx`など) | `named export` | `export const Button = ...` のように明示的にエクスポート |
| **カスタムフック** (`useXxx.ts`) | `named export` | 複数のフックを同一ファイルにまとめることも想定し named export |
| **ユーティリティ関数** (`formatDate.ts`など) | `named export`（単一でも） | 検索性・補完性を考慮し、基本は named export を採用 |


### 使用例

```tsx
// 👎 avoid（default export for shared components）
export default function Button() {
  return <button>Click</button>;
}

// 👍 recommended（named export）
export const Button = () => {
  return <button>Click</button>;
};
```


## 本プロジェクトのscripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
