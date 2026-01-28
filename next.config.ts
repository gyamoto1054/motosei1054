import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // これを追加：静的サイトとして書き出す設定
  images: {
    unoptimized: true, // これを追加：画像のエラーを防ぐ
  },
};

export default nextConfig;
