import {Controller, useForm} from "react-hook-form";
import {
  Button,
  Form,
  KynosFormControl,
  KynosFormSection,
  KynosInput, KynosSelectButton, KynosSelectOption, KynosSelectOptions, Select
} from "@sushiswap/ui";
import {StepConfig} from "../../../vesting";

const whoCanCancel = Object.freeze(["Only Senders", "Only", "Senders", "ly Send"]);
const whoCanTransfer = Object.freeze(["Only Recipient", "Recipient", "Only", "On Reci"]);
const stepConfigurations: StepConfig[] = [
  { label: 'Weekly', time: 604800 },
  { label: 'Bi-weekly', time: 2 * 604800 },
  { label: 'Monthly', time: 2620800 },
  { label: 'Quarterly', time: 3 * 2620800 },
  { label: 'Yearly', time: 31449600 },
]

export const PaymentTerms = () => {
  const {control} = useForm();

  return (
    <KynosFormSection>
      <KynosFormControl label="Release Amount" className="w-full">
        <Controller
          control={control}
          name="release"
          render={({field: {onChange, value}, fieldState: {error}}) => {
            return (
              <>
                <KynosInput.Numeric
                  value={value}
                  error={!!error?.message}
                  className="!ring-offset-slate-900"
                />
                <Form.Error message={error?.message}/>
              </>
            )
          }}
        />
      </KynosFormControl>
      <div className="flex flex-wrap gap-5 lg:flex-nowrap">
        <KynosFormControl label="Release Frequency" className="w-full lg:w-1/2">
          <Controller
            control={control}
            name="frequencyInterval"
            render={({field: {value}, fieldState: {error}}) => {
              return (
                <>
                  <KynosInput.Numeric
                    value={value}
                    error={!!error?.message}
                    className="!ring-offset-slate-900"
                  />
                  <Form.Error message={error?.message}/>
                </>
              )
            }}
          />
        </KynosFormControl>
        <KynosFormControl className="w-full lg:w-1/2">
          <Controller
            control={control}
            name="stepConfig"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <Select
                  button={
                    <KynosSelectButton error={!!error?.message} className="shadow-none w-full bg-input">
                      {value?.label ? value.label : 'Second'}
                    </KynosSelectButton>
                  }
                  value={value}
                  onChange={onChange}
                >
                  <KynosSelectOptions>
                    {Object.values(stepConfigurations).map((stepConfig) => (
                      <KynosSelectOption key={stepConfig.label} value={stepConfig}>
                        {stepConfig.label}
                      </KynosSelectOption>
                    ))}
                  </KynosSelectOptions>
                </Select>
                <Form.Error message={error?.message} />
              </>
            )}
          />
        </KynosFormControl>
      </div>
      <div className="flex flex-wrap gap-5 lg:flex-nowrap">
        <KynosFormControl label="Start Date" className="w-full lg:w-1/2">
          <Controller
            control={control}
            name="startDate"
            render={({field: {onChange, value}, fieldState: {error}}) => {
              return (
                <>
                  <KynosInput.DateLocal
                    onChange={onChange}
                    value={value}
                    error={!!error?.message}
                    className="!ring-offset-slate-900"
                  />
                  <Form.Error message={error?.message}/>
                </>
              )
            }}
          />
        </KynosFormControl>
        <KynosFormControl label="End Date" className="w-full lg:w-1/2">
          <Controller
            control={control}
            name="endDate"
            render={({field: {onChange, value}, fieldState: {error}}) => {
              return (
                <>
                  <KynosInput.DateLocal
                    onChange={onChange}
                    value={value}
                    error={!!error?.message}
                    className="!ring-offset-slate-900"
                  />
                  <Form.Error message={error?.message}/>
                </>
              )
            }}
          />
        </KynosFormControl>
      </div>
      <div className="flex flex-wrap gap-5 lg:flex-nowrap">
        <KynosFormControl label="Who Can Transfer Contract?" className="w-full lg:w-1/2">
          <Controller
            control={control}
            name="transferContract"
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <>
                <Select
                  button={
                    <KynosSelectButton error={!!error?.message} className="shadow-none w-full bg-input">
                      {value ? value : 'Only Recipient'}
                    </KynosSelectButton>
                  }
                  value={value}
                  onChange={onChange}
                >
                  <KynosSelectOptions>
                    {whoCanTransfer.map((person, index) => (
                      <KynosSelectOption key={index} value={person}>
                        {person}
                      </KynosSelectOption>
                    ))}
                  </KynosSelectOptions>
                </Select>
                <Form.Error message={error?.message}/>
              </>
            )}
          />
        </KynosFormControl>
        <KynosFormControl label="Who Can Cancel Contract?" className="w-full lg:w-1/2">
          <Controller
            control={control}
            name="cancelContract"
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <>
                <Select
                  button={
                    <KynosSelectButton error={!!error?.message} className="shadow-none w-full bg-input">
                      {value ? value : 'Only Sender'}
                    </KynosSelectButton>
                  }
                  value={value}
                  onChange={onChange}
                >
                  <KynosSelectOptions>
                    {whoCanCancel.map((person, index) => (
                      <KynosSelectOption key={index} value={person}>
                        {person}
                      </KynosSelectOption>
                    ))}
                  </KynosSelectOptions>
                </Select>
                <Form.Error message={error?.message}/>
              </>
            )}
          />
        </KynosFormControl>
      </div>
      <Form.Buttons>
        <Button type="submit" className="w-full bg-disabled hover:ring-0" disabled={true}>
          Create Vesting Contract
        </Button>
      </Form.Buttons>
    </KynosFormSection>
  )
}