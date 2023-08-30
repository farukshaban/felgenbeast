import React, { Fragment } from 'react'
import { Header } from '@pxwlab/katana-snx'

function Demo() {
  return (
    <Fragment>
      <Header onSearch={(data) => console.log(data)}>
        <Header.NavigationItem label='1st level' href='#' />
        <Header.NavigationItem label='1st level nested'>
          <Header.NavigationItem label='2nd level' href='#' />
          <Header.NavigationItem label='2nd level' href='#' />
          <Header.NavigationItem label='2nd level' href='#' />
        </Header.NavigationItem>
        <Header.NavigationItem label='1st level 2xnested'>
          {/* Note the nested prop here */}
          <Header.NavigationItem label='2nd level nested' nested>
            <Header.NavigationItem label='3rd level' href='#' />
            <Header.NavigationItem label='3rd level' href='#' />
            <Header.NavigationItem label='3rd level' href='#' />
          </Header.NavigationItem>
        </Header.NavigationItem>
      </Header>
    </Fragment>
  )
}

export default Demo
