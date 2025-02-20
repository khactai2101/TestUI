import "bulma/css/bulma.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha384-1ycn6IcaQQ40/J/mmyt6SyG6FVpGtMeph2x64GLNf4y0VYMgNfw/NFx9M4G5j0K8"
          crossOrigin="anonymous"
        />
      </head>


      <body>
        <Navbar />
        <main className="is-fludid mt-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
