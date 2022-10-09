import {KynosTabGroup, KynosTabList, KynosTab, Tab, Typography, classNames} from "@sushiswap/ui";
import {VestingTerms} from "./CreateForm";
import {RecipientAddress} from "./RecepientAddress";
import {AdditionalTerms} from "./AdditionalTerms";

export const VestingTabs = ({width}) => {
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
        Vesting Terms
      </KynosTab>
      <KynosTab
        as={Typography}
        weight={600}
      >
        Recipient Address
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
        <VestingTerms />
      </Tab.Panel>
      <Tab.Panel>
        <RecipientAddress />
      </Tab.Panel>
      <Tab.Panel>
        <AdditionalTerms />
      </Tab.Panel>
    </Tab.Panels>
    </KynosTabGroup>)
}