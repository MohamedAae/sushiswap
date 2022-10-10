import {NextSeo} from 'next-seo'
import {
  DashboardLayout, Overview,
  PaymentTabs
} from "../../../components/KynosDashboard";

export default function KynosPage() {
  return (
    <>
      <NextSeo title="Dashboard Development"/>
      <DashboardLayout>
        <PaymentTabs width="w-full lg:w-1/2"/>
        <Overview width="w-full lg:w-1/2"/>
      </DashboardLayout>
    </>
  )
}
