import React from 'react'
import styled from 'styled-components'
import { Header as _Header } from './Header'
import { Column } from './Column'

export function App() {
  return (
    <Container>
      <Header />

      <MainArea>
        <HorizontalScroll>
          <Column
            title="TODO"
            cards={[
              { id: 'a', text: '朝ランニングする' },
              { id: 'b', text: 'NEWSPICKをチェックする' },
              { id: 'c', text: 'コーヒーを淹れる' },
            ]}
          />
          <Column
            title="Doing"
            cards={[
              { id: 'd', text: '顔を洗う' },
              { id: 'e', text: '洗濯する' },
            ]}
          />
          <Column title="Waiting" cards={[]} />
          <Column
            title="Done"
            cards={[{ id: 'f', text: 'コーヒーを淹れる' }]}
          />
        </HorizontalScroll>
      </MainArea>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const Header = styled(_Header)`
  flex-shrink: 0;
  height: 70px;
`

const MainArea = styled.div`
  height: 100%;
  padding: 50px 16px;
  overflow-y: auto;
`

const HorizontalScroll = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;

  > * {
    margin-left: 16px;
    flex-shrink: 0;
  }

  ::after {
    display: block;
    flex: 0 0 16px;
    content: '';
  }
`
