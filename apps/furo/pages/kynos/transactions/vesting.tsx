import {NextSeo} from 'next-seo'
import {
  DashboardLayout,
  NewVesting,
  VestingTabs
} from "../../../components/KynosDashboard";

export default function KynosPage() {
  return (
    <>
      <NextSeo title="Dashboard Development"/>
      <DashboardLayout>
        <VestingTabs width="w-full lg:w-1/2"/>
        <NewVesting width="w-full lg:w-1/2"/>
      </DashboardLayout>
    </>
  )
}
