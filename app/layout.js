import './globals.css' // global css 정의를 여기서 한다.

export const metadata = { //이게 header 이다.
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head></head> */}
      <body>
        {children}</body>
    </html>
  );
}
