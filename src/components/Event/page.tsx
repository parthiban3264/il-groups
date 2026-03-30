import React, { useEffect, useState } from 'react';
import './page.css';
import { fetchEvents, registerForEvent, Event } from '../../services/eventService';

const typeColors: Record<string, string> = {
  workshop: '#f59e0b',
  hackathon: '#ef4444',
  conference: '#6366f1',
  webinar: '#10b981',
};

interface ModalProps {
  event: Event;
  onClose: () => void;
}

const RegisterModal: React.FC<ModalProps> = ({ event, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      setMessage('Name and Email are required.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await registerForEvent({
        eventId: event.id,
        name: form.name,
        email: form.email,
        phone: form.phone,
      });
      setStatus('success');
      setMessage(res.message || 'Registration successful!');
    } catch (err) {
      setStatus('error');
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3 className="modal-title">Register for Event</h3>
        <p className="modal-event-name">{event.title}</p>
        <p className="modal-event-date">📅 {event.date} &nbsp;|&nbsp; 📍 {event.location}</p>
        {status === 'success' ? (
          <div className="modal-success">
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🎉</div>
            <p>{message}</p>
          </div>
        ) : (
          <>
            <div className="modal-fields">
              <input type="text" name="name" placeholder="உங்கள் பெயர் *" value={form.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone Number (optional)" value={form.phone} onChange={handleChange} />
            </div>
            {status === 'error' && <p className="modal-error">{message}</p>}
            <button className="modal-submit" onClick={handleSubmit} disabled={status === 'loading'}>
              {status === 'loading' ? 'Registering...' : 'Confirm Registration →'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const EventPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError("Failed to load events. Please check your backend connection.");
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  return (
    <div className="event-page">
      <div className="page-hero">
        <div className="section-tag">Events</div>
        <h1 className="section-title">Learn, <span>Connect</span> &amp; Grow</h1>
        <p>Workshops, hackathons, conferences, and webinars — be part of India's most exciting community.</p>
      </div>

      <section className="events-grid-section">
        <div className="container">
          {/* <div className="section-tag">Events</div> */}
          <h2 className="section-title">Our <span>All Events</span></h2>

          {loading && (
            <div className="events-status">
              <div className="spinner" />
              <p>Events loading...</p>
            </div>
          )}

          {!loading && error && (
            <div className="events-status error">
              <p>⚠️ {error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="events-grid">
              {events.map((e, i) => (
                <div className="event-card" key={e.id || i}>
                    <div className="event-card-photo">
                      <img src={`${e.photo}`} alt={e.title} />
                      <span className="event-type-badge" style={{ background: typeColors[e.type] ?? '#6366f1' }}>
                        {e.type}
                      </span>
                    </div>
                  <div className="event-card-body">
                      <h3 className="event-card-title">{e.title}</h3>
                      <p className="event-card-desc">{e.desc}</p>
                      <div className="event-card-footer">
                        <span className="event-location">📅 {e.date?.split(" ")[0]}</span>
                        <span className="event-location">📍 {e.location}</span>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedEvent && <RegisterModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
};

export default EventPage;
