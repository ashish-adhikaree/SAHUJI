import { Layout } from "components";
import { Popular, QuickLinks, Search, Summary, RecentBookings } from "sections";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[20px] md:text-3xl uppercase">
            good morning,
            <br />
            Ashish
          </span>
          <QuickLinks />
        </div>
        <div className="grid lg:grid-cols-[3fr_2fr] lg:gap-10 xl:gap-20">
          <div>
            <Search />
            <Summary />
          </div>
          {/* <Popular /> */}
        </div>
        <RecentBookings />
      </div>
    </Layout>
  );
}
