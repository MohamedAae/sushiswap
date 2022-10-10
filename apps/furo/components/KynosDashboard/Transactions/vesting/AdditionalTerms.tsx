import React, {useState} from "react";
import {KynosFormSection, Button, Form, KynosSwitch, Typography} from "@sushiswap/ui";
import {CheckIcon, XIcon} from "@heroicons/react/outline";

export const AdditionalTerms = () => {
  const [automaticWithdraw, setAutomaticWithdraw] = useState(false)

  return (<KynosFormSection>
    <Typography variant="lg" weight={600} className="capitalize text-typo-primary mb-3">
      Withdraw Settings
    </Typography>
    <div className="flex items-center justify-between">
      <Typography variant="base" weight={400} className="text-typo-primary">
        Automatic Withdraw
      </Typography>
      <KynosSwitch
        checked={automaticWithdraw}
        onChange={() => setAutomaticWithdraw((prevState) => !prevState)}
        uncheckedIcon={<XIcon/>}
        checkedIcon={<CheckIcon/>}
        size="sm"
      />
    </div>
    <Form.Buttons>
      <Button type="submit" className="w-full bg-accent text-white hover:ring-0" disabled={false}>
        Create Vesting Contract
      </Button>
    </Form.Buttons>
  </KynosFormSection>);
}
