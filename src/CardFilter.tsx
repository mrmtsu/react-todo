import React from 'react'
import styled from 'styled-components'
import * as color from './color'
import { SearchIcon as _SearchIcon } from './icon'

export function CardFilter({
  value,
  onChange,
}: {
  value?: string
  onChange?(value: string): void
}) {
  return (
    <Container>
      <SearchIcon />
      <Input
        placeholder="Filter cards"
        value={value}
        onChange={ev => onChange?.(ev.currentTarget.value)}
      />
    </Container>
  )
}

const Container = styled.label`
  display: flex;
  align-items: center;
  min-width: 300px;
  border-bottom: solid 2px ${color.White};
`

const SearchIcon = styled(_SearchIcon)`
  margin: 0 4px 0 8px;
  font-size: 16px;
  color: ${color.Silver};
`

const Input = styled.input.attrs({ type: 'search' })`
  width: 100%;
  padding: 6px 8px 6px 0;
  color: ${color.Black};
  font-size: 14px;

  :focus {
    outline: none;
  }
`
