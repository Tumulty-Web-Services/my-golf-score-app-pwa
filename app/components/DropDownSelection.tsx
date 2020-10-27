import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { DropDownItem } from '../interfaces'
import styles from '../styles/DropDown.module.css'

type Props = {
  dropDownItems: DropDownItem[]
  title: string
}

export default function DropDownSelection({
  dropDownItems,
  title,
}: Props): JSX.Element {
  const [isOpen, setOpen] = useState(false)
  const [items] = useState(dropDownItems)
  const [selectedItem, setSelectedItem] = useState(null)

  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = (e) => {
    const id = e.getAttribute('data-id')
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id)
    setOpen(!isOpen)
  }

  return (
    <div className={`${styles.dropDown} stories-dropDown`}>
      <div
        className={`${styles.dropDownHeader} stories-dropDownHeader`}
        onClick={toggleDropdown}
      >
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : title}
        <FontAwesomeIcon
          icon={faChevronRight}
          className="icon"
          style={{ transform: isOpen && 'rotate(90deg)' }}
        />
      </div>
      <div
        className={`${styles.dropDownBody} stories-dropDownBody`}
        style={{ display: isOpen && 'block' }}
        data-testid="dropdown-body"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.dropDownItem} dropDownItem`}
            onClick={(e) => handleItemClick(e.target)}
            data-id={item.id}
          >
            <span
              className={`${styles.dropDownItemDot}
              dropDownItemDot ${item.id == selectedItem && 'selected'}`}
            >
              •{' '}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
