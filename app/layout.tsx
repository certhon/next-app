import './globals.css';
export const metadata = {
  title: '礼乘官网',
  description: '礼乘公司官方网站',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
