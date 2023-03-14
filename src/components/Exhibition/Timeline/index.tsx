import React from 'react'
import { TimelineList } from '@/components/Exhibition/Timeline/timeline.styles'

const Timeline = ({ timeline }: { timeline: { time: string; body: string }[] }) => (
  <TimelineList>
    {timeline.map((item, index) => {
      return (
        <li key={index}>
          <span>{item.time}</span>
          <p>{item.body}</p>
        </li>
      )
    })}
  </TimelineList>
)

export default Timeline
