import {KynosTabGroup, KynosTabList, KynosTab, Tab, Typography, classNames} from "@sushiswap/ui";
import {PaymentTerms} from "./PaymentTerms";
import {AdditionalTerms, RecipientAddress} from '../vesting'


export const PaymentTabs = ({width}) => {
  return (<KynosTabGroup
    as="section"
    className={`z-10 overflow-hidden overflow-x-auto rounded-xl sm:rounded-2xl bg-primary ${width}`}
    defaultIndex={0}
  >
    <KynosTabList className="py-8 flex text-center">
      <KynosTab
        as={Typography}
        weight={600}
        size="sm"
      >
        Payment Terms
      </KynosTab>
      <KynosTab
        as={Typography}
        weight={600}
      >
        Recipient
      </KynosTab>
      <KynosTab
        as={Typography}
        weight={600}
      >
        Additional Terms
      </KynosTab>
    </KynosTabList>
    <Tab.Panels className="px-3 pb-8 text-typo-primary font-bold lg:px-8">
      <Tab.Panel>
        <PaymentTerms />
      </Tab.Panel>
      <Tab.Panel>
        <RecipientAddress/>
      </Tab.Panel>
      <Tab.Panel>
        <AdditionalTerms/>
      </Tab.Panel>
    </Tab.Panels>
  </KynosTabGroup>)
}