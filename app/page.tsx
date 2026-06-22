export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'system-ui' }}>
      <h1>🌌 Aurora Spirit Skies Booking</h1>
      <p>Your Aurora viewing experience in Bethel, Alaska</p>
      <a href="/booking" style={{ background: '#22d3ee', color: 'black', padding: '15px 30px', borderRadius: '8px', fontSize: '18px', display: 'inline-block', marginTop: '20px' }}>
        Book Your Aurora Tour →
      </a>
      <p style={{ marginTop: '40px' }}>✅ Checkout + SMS are fixed and working</p>
      <button onClick={() => window.location.href = 'https://auroraspiritskies.com/booking'}>
        Go to Booking Calendar
      </button>
    </div>
  );
}
