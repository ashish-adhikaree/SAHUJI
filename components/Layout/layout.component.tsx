import Head from "next/head";
import Sidebar from "../Navbar/sidebar.component";
import { Lexend } from "@next/font/google";
import { PropsWithChildren } from "react";

const lexend = Lexend({ subsets: ["latin"] });

interface LayoutRequiredProps extends PropsWithChildren {}

interface LayoutOptionalProps {
  title: string;
  description: string;
}

interface LayoutProps extends LayoutRequiredProps, LayoutOptionalProps {}

const defaultProps: LayoutOptionalProps = {
  title: "Sahuji",
  description:
    "Sahuji is a seller dashboard for sellers to track their store's performance.",
};

export default function Layout(props: LayoutProps) {
  const { title, description, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`overflow-y-hidden flex justify-between ${lexend.className} overflow-hidden`}>
        <Sidebar />
        <div className="flex-grow overflow-x-hidden">{children}</div>
      </main>
    </>
  );
}

Layout.defaultProps = defaultProps;
