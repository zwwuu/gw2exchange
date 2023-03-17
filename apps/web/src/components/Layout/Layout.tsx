import { ReactNode } from "react";

import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";

type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div className={"flex min-h-screen flex-col justify-between"}>
      <Header />
      <div className={"container mx-auto my-12 px-2"}>{children}</div>
      <Footer />
    </div>
  );
}
