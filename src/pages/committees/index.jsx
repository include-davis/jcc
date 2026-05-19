import { committeesData } from "./data";
import Link from "next/link";
import styles from "./committees.module.scss";
import { useState, useEffect } from "react";
import { FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

export default function Committees() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(event => ({
          month: new Date(event.start.dateTime || event.start.date)
            .toLocaleString('en-US', { month: 'long' }).toUpperCase(),
          day: new Date(event.start.dateTime || event.start.date)
            .getDate().toString().padStart(2, '0'),
          name: event.summary,
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
    <div className={styles.container}>
      Committees
      
      <div className={styles.committees_top}>
        <div className={styles.committees_top_content}>
          <div className={styles.committees_top_content_left}>
            <h1>JCC Committees</h1>
            <p>Our clinic consists of five distinct committees, each specializing in a different area of health. Each team collaborates together to bring support and care for the Davis community through its wellness initiatives.</p>
            <div className={styles.buttons}>
              <div className={styles.button}>Committees</div>
              <div className={styles.button}>Collaboration</div>
            </div>
          </div>
          <div className={styles.committees_top_content_right_logo_frame}>
            <img src="/Dark_Blue_Logo.png" alt="JCC Logo"/>
          </div>
        </div> 
      </div>

      <div className={styles.committees_bottom}>
        {/* Here will be committee cards map */}
      </div>

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

    </div>
  );
}