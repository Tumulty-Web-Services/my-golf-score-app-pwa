import React from 'react'
import useSWR from 'swr'
import { postFetcher } from 'utils/fetch'

type Props = {
  user: string
  onChange: any
}

export default function ReplayCourseTable({
  user,
  onChange,
}: Props): JSX.Element {
  const { data: courseHistory, error: courseHistoryErr } = useSWR(
    [`/api/game/replay-game/course-history`, user],
    postFetcher
  )

  if (courseHistoryErr) return <div>There was an err.</div>

  return (
    <>
      {courseHistory && (
        <>
          {courseHistory.replayGameHistory.map((round) => (
            <tr key={round.label}>
              <td width="20">
                <input
                  type="checkbox"
                  id={`course-${round.label}`}
                  name="replay-course"
                  data-length={round.dataLength}
                  value={round.label}
                  onChange={onChange}
                />
              </td>
              <td className="text-left">{round.label}</td>
            </tr>
          ))}
        </>
      )}
    </>
  )
}
