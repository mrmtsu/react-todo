import React from 'react'
import styled from 'styled-components'
import * as color from './color'
import { CardFilter } from './CardFilter'

export function Header({
  filterValue,
  onFilterChange,
  className,
}: {
  filterValue?: string
  onFilterChange?(value: string): void
  className?: string
}) {
  return (
    <Container className={className}>
      <Logo>TODO LIST</Logo>

      <CardFilter value={filterValue} onChange={onFilterChange} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${color.LightGreen};
`

const Logo = styled.div`
  color: ${color.LightBrack};
  font-size: 20px;
  font-weight: bold;
`
