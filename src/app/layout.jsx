
import MainHeader from "@/components/mainHeader";
import BottomNav from "@/components/BottomNav";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <MainHeader />
          <main style={{ paddingTop: "56px", paddingBottom: "60px" }}>
            {children}
          </main>
          <BottomNav />
        </AuthProvider>
      </body>
    </html>
  );
}
