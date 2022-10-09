import {SideNav} from "./SideNav";
import {NewVesting} from "./Transactions";

export const KynosDashboard = () => {
  return (<div className="font-poppins flex items-start">
    <aside className="w-[300px] fixed lg:relative">
      <SideNav/>
    </aside>
    <main className="flex flex-col p-8 lg:flex-row gap-x-[40px]">
      <h1 className="w-1/2 text-secondary">Hello World</h1>
      <NewVesting/>
    </main>
  </div>)
}