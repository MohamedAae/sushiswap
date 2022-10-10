import {NextSeo} from 'next-seo'
import {DashboardLayout} from "../../components/KynosDashboard";
import {Typography} from "@sushiswap/ui";

export default function KynosPage() {

  return (
      <>
        <NextSeo title="Dashboard Development"/>
        <DashboardLayout>
          <Typography className="text-typo-primary">Todo;</Typography>
        </DashboardLayout>
      </>
  )
}
