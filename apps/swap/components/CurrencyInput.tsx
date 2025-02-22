import { TradeType } from '@sushiswap/exchange'
import { Web3Input } from '@sushiswap/wagmi'
import { CurrencyInputProps } from '@sushiswap/wagmi/components/Web3Input/Currency'
import React, { FC } from 'react'

import { useTrade } from './TradeProvider'

interface CurrencyInput extends CurrencyInputProps {
  inputType: TradeType
  tradeType: TradeType
}

export const CurrencyInput: FC<CurrencyInput> = ({
  className,
  value: _value,
  onChange,
  onSelect,
  currency,
  customTokenMap,
  tokenMap,
  onAddToken,
  onRemoveToken,
  chainId,
  inputType,
  tradeType,
  disabled,
}) => {
  const { trade, isLoading } = useTrade()
  const value = inputType === tradeType ? _value : trade ? trade?.outputAmount?.toExact() : ''
  return (
    <Web3Input.Currency
      className={className}
      value={value}
      onChange={onChange}
      currency={currency}
      onSelect={onSelect}
      customTokenMap={customTokenMap}
      onAddToken={onAddToken}
      onRemoveToken={onRemoveToken}
      chainId={chainId}
      tokenMap={tokenMap}
      loading={inputType !== tradeType ? isLoading : false}
      disabled={disabled}
    />
  )
}
