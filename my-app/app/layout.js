import "./globals.css";
export const metadata = {
  title: "Responsive Layout",
  description: "Frontend Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     { children }
        </body>
    </html>
  );
}
