// import { GeistSans } from "geist/font/sans"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import "@/app/globals.css"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={GeistSans.className}>
//       <body className={`${GeistSans.className} min-h-screen flex flex-col`}>
//         <Navbar />
//         <main className="flex-grow">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }

import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
