import {NextSeo} from 'next-seo'
import {KynosDashboard} from "../components/KynosDashboard";

export default function KynosPage() {

  return (
      <>
        <NextSeo title="Dashboard Development"/>
        <KynosDashboard />
      </>
  )
}
