import ReactQueryClientProvider from '../components/ReactQueryClientProvider';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryClientProvider>
      <html lang="ko">
        <body>
          <div>{children}</div>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
