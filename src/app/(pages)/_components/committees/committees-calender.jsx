"use client";

import { useState, useEffect } from "react";
import { FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import styles from "@/app/(pages)/committees/committees.module.scss";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(event => ({
          month: new Date(event.start.dateTime || event.start.date)
            .toLocaleString('en-US', { month: 'short' }).toUpperCase(),
          day: new Date(event.start.dateTime || event.start.date)
            .getDate().toString().padStart(2, '0'),
          name: event.summary || 'Untitled Event',
          time: event.start.dateTime
            ? `${new Date(event.start.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${new Date(event.end.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
            : 'All day',
          location: event.location || 'TBD',
        }));
        setEvents(formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const visible = showAll ? events : events.slice(0, 2);

  return (
    <div className={styles.events_section}>
      <h2 className={styles.heading}>
        Upcoming Events <FaRegCalendarAlt size={22} />
      </h2>

      {loading && <p>Loading events...</p>}
      {!loading && events.length === 0 && <p>No upcoming events.</p>}

      {!loading && events.length > 0 && (
        <>
          <div className={styles.list}>
            {visible.map((event, i) => (
              <div key={i} className={styles.eventCard}>
                <div className={styles.dateBox}>
                  <span className={styles.month}>{event.month}</span>
                  <span className={styles.day}>{event.day}</span>
                </div>
                <div className={styles.details}>
                  <h3 className={styles.eventName}>{event.name}</h3>
                  <div className={styles.meta}>
                    <span><FaRegClock size={14} /> {event.time}</span>
                    <span><IoLocationOutline size={14} /> {event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.toggleBtn} onClick={() => setShowAll(!showAll)}>
            <span>{showAll ? 'show less' : 'more events'}</span>
            <span className={styles.arrow}>{showAll ? '∧' : '∨'}</span>
          </button>
        </>
      )}
    </div>
  );
}