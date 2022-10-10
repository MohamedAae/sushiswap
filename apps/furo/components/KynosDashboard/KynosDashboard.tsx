import {SideNav} from "./SideNav";
import {DashboardHeader} from "./DashboardHeader";
import {VestingTabs, Overview} from "./Transactions";

export const KynosDashboard = () => {
  return (<div className="font-poppins flex items-start">
    <aside className="w-[300px] fixed lg:relative">
      <SideNav/>
    </aside>
    <div className="flex flex-wrap bg-input">
      <DashboardHeader tabTitle={tabTitle} subTabTitle={subTabTitle}/>
      <main className="flex flex-col items-start gap-y-[40px] p-8 lg:flex-row lg:gap-x-[40px] lg:gap-y-0">
        <VestingTabs width="w-full lg:w-1/2"/>
        <NewVesting width="w-full lg:w-1/2"/>
      </main>
    </div>
  </div>)
}