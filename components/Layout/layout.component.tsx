import Head from "next/head";
import { Sidebar } from "components";
import { Lexend } from "@next/font/google";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { QuickLinks } from "sections";

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

export const Layout = (props: LayoutProps) => {
  const { title, description, children } = props;
  const isHomePage = useRouter().asPath === "/";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className={`overflow-y-hidden flex justify-between ${lexend.className} overflow-hidden`}
      >
        <Sidebar />
        <div className="flex-grow overflow-x-hidden max-w-7xl h-[100vh] p-4 lg:px-10">
          {!isHomePage && (
            <div className="flex items-center justify-between">
              <span className="text-[20px] md:text-3xl capitalize">
                {title}
              </span>
              <QuickLinks />
            </div>
          )}
          {children}
        </div>
      </main>
    </>
  );
};

Layout.defaultProps = defaultProps;
