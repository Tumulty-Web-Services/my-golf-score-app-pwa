import React from 'react'
import styles from '../styles/FlexTable.module.css'
import { TableItem } from '../interfaces'

type Props = {
  tableItems: TableItem[]
}

export default function FlexTable({ tableItems }: Props): JSX.Element {
  return (
    <>
      {tableItems.map((item) => (
        <div
          data-testid="flex-table"
          key={item.itemOne}
          className={`${styles.flexTable} stories-flexTable`}
        >
          <div>{item.itemOne}</div>
          {item.itemThree ? (
            <div>
              {item.itemTwo} | {item.itemThree}
            </div>
          ) : (
            <div>{item.itemTwo}</div>
          )}
        </div>
      ))}
    </>
  )
}
