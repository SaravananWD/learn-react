import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import "@/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Saravanan Devaraj",
  description:
    "Saravanan's React prototype hub app for experimentation and sharing of react knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
