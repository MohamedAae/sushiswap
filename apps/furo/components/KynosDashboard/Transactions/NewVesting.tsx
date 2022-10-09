import React from 'react'
import {Select, Typography, KynosSelectButton, KynosSelectOptions, KynosSelectOption} from '@sushiswap/ui'

const whoCanCancel = Object.freeze(["Only Senders", "Only Senders", "Only Senders", "Only Senders"]);

export const NewVesting = () => {
  return (<section className="flex flex-col gap-[15px] p-8 overflow-hidden overflow-x-auto rounded-xl sm:rounded-2xl bg-primary lg:w-1/2">
    <Typography variant="xl" weight={600} className="text-typo-primary">New Vesting</Typography>
    <p className="text-base text-left text-muted">
      Ideal for vesting! Set up the æ•nount you want to vest, start-end date, release frequency youte good to go. Additionally, you can specify the cliff date and arnount when the initial tokens will be to the recöient or set Transfer and preferences.
    </p>
    <div
      className="w-full p-8 text-left bg-input rounded-xl">
      <Typography variant="lg" weight={600} className="text-typo-primary">Overview</Typography>
      <Select
        button={<KynosSelectButton>Only Sender</KynosSelectButton>}
      >
        <KynosSelectOptions>
          { whoCanCancel.map((person, index) => (
            <KynosSelectOption key={index} value={person}>
              {person}
            </KynosSelectOption>))
          }
        </KynosSelectOptions>
      </Select>
      <p className="text-sm text-muted">
        First 0% (0.00) released on 2022-08-23 at 13:14. And then 0% (0.00 ) released every second. until Tue 23rd Aug, 2022 - 13:21.
      </p>
    </div>
  </section>)
}
