import {Controller, useForm} from "react-hook-form";
import {Web3Input} from "@sushiswap/wagmi";
import {Button, Form, KynosFormControl, KynosFormSection, KynosInput, Typography} from "@sushiswap/ui";

export const RecipientAddress = () => {
  const {control} = useForm();

  return (<KynosFormSection>
    <header className="flex justify-between">
      <Typography variant="lg" weight={600} className="text-typo-primary mb-3">Recipient
        Address</Typography>
      <Typography variant="lg" weight={600} className="text-accent mb-3">Upload CSV</Typography>
    </header>
    <div className="w-full h-0.5 bg-input"></div>
    <div className="flex flex-wrap gap-5 lg:flex-nowrap">
      <KynosFormControl label="Amount" className="w-full lg:w-1/2">
        <Controller
          control={control}
          name="frequencyInterval"
          render={({field: {value}, fieldState: {error}}) => {
            return (
              <>
                <KynosInput.Numeric
                  value={value}
                  error={!!error?.message}
                  className="text-typo-primary font-bold placeholder:text-typo-primary placeholder:font-bold"
                />
                <Form.Error message={error?.message}/>
              </>
            )
          }}
        />
      </KynosFormControl>
      <KynosFormControl label="Token" className="w-full lg:w-1/2">
        <Controller
          control={control}
          name="frequencyInterval"
          render={({field: {value}, fieldState: {error}}) => {
            return (
              <>
                <KynosInput.Numeric
                  value={value}
                  error={!!error?.message}
                  className="text-typo-primary font-bold placeholder:text-typo-primary placeholder:font-bold"
                />
                <Form.Error message={error?.message}/>
              </>
            )
          }}
        />
      </KynosFormControl>
    </div>
    <KynosFormControl label="Contract Title" className="w-full">
      <Controller
        control={control}
        name="contractTitle"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <>
            <Web3Input.Ens
              variant={"unstyled"}
              id="ensInput"
              value={value}
              onChange={onChange}
              error={!!error?.message}
              placeholder="e.g. VC Seed Round"
              className="pl-8 shadow-none bg-input bg-opacity-100 font-bold outline-none focus:outline-none placeholder:font-bold placeholder:text-red"
            />
            <Form.Error message={error?.message}/>
          </>
        )}
      />
    </KynosFormControl>
    <KynosFormControl label="Recipient Wallet Address" className="w-full">
      <Controller
        control={control}
        name="recipientWalletAddress"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <>
            <Web3Input.Ens
              variant={"unstyled"}
              id="ensInput"
              value={value}
              onChange={onChange}
              error={!!error?.message}
              placeholder="Please double check the address"
              className="pl-8 shadow-none bg-input bg-opacity-100 font-bold outline-none focus:outline-none placeholder:font-bold placeholder:text-red"
            />
            <Form.HelperText message="Make sure this is not a centralized exchange address." />
            <Form.Error message={error?.message}/>
          </>
        )}
      />
    </KynosFormControl>
    <KynosFormControl label="Recipient Email Address" className="w-full">
      <Controller
        control={control}
        name="recipientEmailAddress"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <>
            <Web3Input.Ens
              variant={"unstyled"}
              id="ensInput"
              value={value}
              onChange={onChange}
              error={!!error?.message}
              placeholder="Optional email to notify"
              className="pl-8 shadow-none bg-input bg-opacity-100 font-bold outline-none focus:outline-none placeholder:font-bold placeholder:text-red"
            />
            <Form.Error message={error?.message}/>
          </>
        )}
      />
    </KynosFormControl>
    <Form.Buttons>
      <Button type="submit" className="w-full bg-disabled" disabled={true}>
        Create Vesting Contract
      </Button>
    </Form.Buttons>
  </KynosFormSection>)
}
