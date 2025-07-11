# Invoicer SaaS - 請求書管理システム

## 概要
Invoicerは請求書の作成から入金管理まで、面倒な作業をすべて自動化する請求書管理システムです。<br>
制作会社向けのポートフォリオプロジェクトとして開発しました。

## 主要機能

### 🏠 ランディングページ
- モダンなHeroセクション
- 機能紹介セクション
- デモセクション
- 顧客レビュー
- CTA（Call To Action）

### 📊 管理画面
- **ダッシュボード**: 売上概要、請求書状況の統計表示
- **請求書管理**: 請求書の作成、編集、ステータス管理
- **顧客管理**: 顧客情報の管理
- **料金設定**: プランごとの料金表示
- **設定**: システム設定管理

### 💰 請求書機能
- 請求書の作成・編集
- ステータス管理（未入金、入金済み、督促中、キャンセル）
- 日本語対応の請求書フォーマット
- 自動的な請求書ID生成

## 技術スタック

### フロントエンド
- **Next.js 15.2.3** - React フレームワーク
- **React 19.1.0** - UI ライブラリ
- **TypeScript 5.8.2** - 型安全な開発
- **Mantine 8.0.1** - モダンなUIコンポーネントライブラリ
- **Tabler Icons** - アイコンセット

### 状態管理
- **Zustand 5.0.5** - 軽量な状態管理ライブラリ

### データビジュアライゼーション
- **Recharts 2.15.3** - チャートライブラリ
- **Mantine Charts** - Mantineのチャート拡張

### 開発ツール
- **ESLint** - コード品質チェック
- **Prettier** - コードフォーマット
- **Stylelint** - CSSリンティング
- **Husky** - Git hooks管理
- **Jest** - テストフレームワーク

### パフォーマンス最適化
- **Bundle Analyzer** - バンドルサイズ分析
- **PostCSS** - CSS処理
- **Mantine PostCSS Preset** - Mantine向けCSS最適化

## プロジェクト構成

```
next-portfolio/
├── app/                     # Next.js App Router
│   ├── admin/              # 管理画面
│   │   ├── dashboard/      # ダッシュボード
│   │   ├── invoices/       # 請求書管理
│   │   ├── clients/        # 顧客管理
│   │   └── settings/       # 設定
│   ├── pricing/            # 料金プラン
│   └── stores/            # Zustand ストア
├── components/             # 共通コンポーネント
│   ├── Admin/             # **管理画面用コンポーネント**
│   ├── TopComponents/     # LPコンポーネント
│   └── lp/               # LP専用コンポーネント
├── styles/                # グローバルスタイル
└── test-utils/           # テストユーティリティ
```

## 開発コマンド

### 基本コマンド
```bash
# 開発サーバー起動
yarn dev

# 本番ビルド
yarn build

# 本番サーバー起動
yarn start

# 型チェック
yarn typecheck

# リンティング
yarn lint

# テスト実行
yarn test

# バンドル分析
yarn analyze
```

### 開発ツール
```bash
# コードフォーマット
yarn prettier:write

# テスト（ウォッチモード）
yarn jest:watch
```

## 特徴

### 🎨 モダンなデザイン
- Mantineを使用したモダンなUIデザイン
- レスポンシブ対応
- ダークモード対応

### 📱 多言語対応
- 日本語UI
- 日本の商習慣に対応した請求書フォーマット

### 🔧 開発体験
- TypeScriptによる型安全な開発
- ESLintとPrettierによるコード品質管理
- Huskyによる自動的なコード品質チェック

### 🚀 パフォーマンス
- Next.js 15の最新機能活用
- Bundle Analyzerによるバンドルサイズ最適化
- パッケージインポート最適化

## 環境要件
- Node.js 18.0以上
- Yarn 4.9.1
- 最新のモダンブラウザ

## デプロイ
本プロジェクトは以下のプラットフォームでデプロイ可能です：
- Vercel
- Netlify
- AWS
- その他Next.js対応プラットフォーム

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
