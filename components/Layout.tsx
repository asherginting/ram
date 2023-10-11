import Footer from "./Footer";
import Header from "./header/Header";

type Props = {
    children: React.ReactNode;
  };
  
  export default function Layout({ children }: Props) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  }