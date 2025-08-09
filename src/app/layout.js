import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import "./global.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Saravanan Devaraj",
  description:
    "Saravanan's React prototype hub app for experimentation and sharing of react knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header></Header>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
