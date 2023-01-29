import Layout from "@/components/Layout/layout.component";
import QuickLinks from "./quickLinks.section";
import RecentBookingsSection from "./recentBookings.section";
import SearchSection from "./search.section";
import Summary from "./summary.section";

export default function Dashboard() {
  return (
    <Layout>
      <div className="h-[100vh] p-4 lg:px-10">
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
            <SearchSection />
            <Summary />
          </div>
          {/* <Popular /> */}
        </div>
        <RecentBookingsSection />
      </div>
    </Layout>
  );
}
