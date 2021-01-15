import React from 'react'
import useSWR from 'swr'
import Autocomplete from 'react-autocomplete'
import { postFetcher } from '../utils/fetch'
import styles from '../styles/AutoCompleteInput.module.css'

type Props = {
  user: string
  course: string
  handleInput: any
}

export default function AutoCompleteInput({
  user,
  course,
  handleInput,
}: Props): JSX.Element {
  const { data: courseHistory, error: courseHistoryErr } = useSWR(
    [`/.netlify/functions/course-history`, user],
    postFetcher
  )

  if (courseHistoryErr) return <div>There was an err.</div>

  return (
    <>
      {courseHistory && (
        <Autocomplete
          getItemValue={(item) => JSON.stringify(item)}
          items={courseHistory.replayGameHistory}
          renderItem={(item, isHighlighted) => (
            <div
              key={item.label}
              data-length={item.dataLength}
              className={`${styles.autocompleteItem} stories-autocomplete-item`}
              style={{ background: isHighlighted ? 'lightgray' : 'white' }}
            >
              {item.label}
            </div>
          )}
          renderInput={(props) => (
            <input
              className={`${styles.autocomplete} stories-autocomplete`}
              {...props}
              placeholder="Search previous course"
            />
          )}
          value={course}
          onSelect={(val) => handleInput(val)}
          menuStyle={{
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '2px 0',
            fontSize: '90%',
            position: 'fixed',
            overflow: 'auto',
            fontFamily: 'Roboto',
          }}
        />
      )}
    </>
  )
}
