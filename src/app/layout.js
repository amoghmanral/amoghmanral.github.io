import "./globals.css";

export const metadata = {
  title: "Amogh Manral",
  description: "Computer Science Student at Duke University with a concentration in AI/ML, passionate about building innovative software solutions and conducting research.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
