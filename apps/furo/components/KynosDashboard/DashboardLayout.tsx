import {SideNav} from "./SideNav";
import {DashboardHeader} from "./DashboardHeader";
import {Overview, VestingTabs} from "./Transactions";

// TODO: get current tab & sub-tab from url
const tabTitle = "Transactions";
const subTabTitle = "Vesting";

export const DashboardLayout = ({children}) => {
  return(
      <div className="font-poppins flex items-start">
        <aside className="w-[300px] fixed lg:relative">
          <SideNav/>
        </aside>
        <div className="w-full flex flex-wrap bg-input">
          <DashboardHeader tabTitle={tabTitle} subTabTitle={subTabTitle}/>
          <main className="flex flex-col items-start gap-y-[40px] p-8 lg:flex-row lg:gap-x-[40px] lg:gap-y-0">
            {children}
          </main>
        </div>
      </div>

  )
}