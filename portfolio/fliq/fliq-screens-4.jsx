// Fliq — Screens 17–21

const jk4 = '"Plus Jakarta Sans", sans-serif';
const rose4 = '#E8627A';
const salmon4 = '#F09070';
const peach4 = '#F5B08A';
const dark4 = '#22100A';
const textSec4 = 'rgba(255,200,200,0.65)';

// ── Screen 17 — Settings ──────────────────────────────────
const settingsSections = [
  {
    title: 'Account',
    rows: [
      { icon: '👤', label: 'Edit profile', detail: '' },
      { icon: '📍', label: 'Location', detail: 'London' },
      { icon: '📱', label: 'Phone number', detail: '+44 ••• ••• 12' },
      { icon: '🔑', label: 'Password & security', detail: '' },
    ],
  },
  {
    title: 'Notifications',
    rows: [
      { icon: '💬', label: 'New messages', toggle: true, on: true },
      { icon: '❤️', label: 'New likes', toggle: true, on: true },
      { icon: '⚡', label: 'New matches', toggle: true, on: true },
      { icon: '📣', label: 'App updates', toggle: false, on: false },
    ],
  },
  {
    title: 'Privacy & Safety',
    rows: [
      { icon: '👁️', label: 'Profile visibility', detail: 'Everyone' },
      { icon: '🚫', label: 'Blocked accounts', detail: '2' },
      { icon: '🛡️', label: 'Safety center', detail: '' },
    ],
  },
];

function SettingsToggle({ on: initialOn }) {
  const [on, setOn] = React.useState(initialOn);
  return (
    <div onClick={() => setOn(!on)} style={{
      width: 40, height: 22, borderRadius: 11,
      background: on ? `linear-gradient(135deg,${rose4},${salmon4})` : 'rgba(255,200,150,0.1)',
      position: 'relative', cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0,
    }}>
      <div style={{
        position: 'absolute', top: 3, left: on ? 20 : 3,
        width: 16, height: 16, borderRadius: '50%', background: '#fff',
        transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
      }} />
    </div>
  );
}

function Screen17Settings() {
  return (
    <div style={{ width: '100%', height: '100%', background: dark4, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <StatusBar />

      {/* header */}
      <div style={{ padding: '62px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ fontFamily: jk4, fontWeight: 900, fontSize: 22, color: '#fff', letterSpacing: '-1px', flex: 1 }}>Settings</div>
        <div style={{ fontFamily: jk4, fontSize: 13, fontWeight: 700, color: rose4, cursor: 'pointer' }}>Log out</div>
      </div>

      {/* profile mini */}
      <div style={{ margin: '0 18px 18px', background: 'rgba(255,255,255,0.04)', borderRadius: 20, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14, border: '1px solid rgba(255,200,200,0.07)' }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
          <img src="https://i.pravatar.cc/300?img=33" alt="You" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: jk4, fontWeight: 800, fontSize: 16, color: '#fff' }}>Arjun, 28</div>
          <div style={{ fontFamily: jk4, fontSize: 13, color: textSec4, marginTop: 2 }}>View & edit profile →</div>
        </div>
        <div style={{ background: `linear-gradient(135deg,${rose4},${salmon4})`, borderRadius: 12, padding: '5px 10px', fontFamily: jk4, fontSize: 11, fontWeight: 700, color: '#fff' }}>✨ Gold</div>
      </div>

      {/* sections */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {settingsSections.map((sec, si) => (
          <div key={si}>
            <div style={{ fontFamily: jk4, fontSize: 11, fontWeight: 700, color: 'rgba(255,200,200,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8, paddingLeft: 4 }}>{sec.title}</div>
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 18, border: '1px solid rgba(255,200,200,0.06)', overflow: 'hidden' }}>
              {sec.rows.map((row, ri) => (
                <div key={ri} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '13px 16px',
                  borderBottom: ri < sec.rows.length - 1 ? '1px solid rgba(255,200,200,0.05)' : 'none',
                  cursor: 'pointer',
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(232,98,122,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{row.icon}</div>
                  <div style={{ fontFamily: jk4, fontSize: 14, fontWeight: 600, color: '#fff', flex: 1 }}>{row.label}</div>
                  {row.toggle !== undefined
                    ? <SettingsToggle on={row.on} />
                    : <>
                        {row.detail && <span style={{ fontFamily: jk4, fontSize: 13, color: textSec4 }}>{row.detail}</span>}
                        <span style={{ color: 'rgba(255,200,200,0.25)', fontSize: 14 }}>›</span>
                      </>
                  }
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* danger zone */}
        <div style={{ textAlign: 'center', paddingTop: 4, paddingBottom: 24 }}>
          <span style={{ fontFamily: jk4, fontSize: 13, fontWeight: 600, color: 'rgba(244,67,54,0.45)', cursor: 'pointer' }}>Delete account</span>
        </div>
      </div>
    </div>
  );
}

// ── Screen 18 — Notifications ─────────────────────────────
const notifs = [
  { type: 'match', photo: 'https://i.pravatar.cc/300?img=47', name: 'Priya', msg: "It's a fliq! You and Priya liked each other.", time: '2m', unread: true },
  { type: 'msg', photo: 'https://i.pravatar.cc/300?img=48', name: 'Asha', msg: 'Asha sent you a message: "Hey!! Your profile is..."', time: '15m', unread: true },
  { type: 'like', photo: 'https://i.pravatar.cc/300?img=5', name: 'Meera', msg: 'Meera liked your profile. Like back?', time: '1h', unread: true },
  { type: 'msg', photo: 'https://i.pravatar.cc/300?img=11', name: 'Riya', msg: 'Riya replied to your message.', time: '3h', unread: false },
  { type: 'boost', photo: null, name: 'fliq', msg: 'Your boost is active — you\'re getting 3× more views right now! ⚡', time: '5h', unread: false },
  { type: 'like', photo: 'https://i.pravatar.cc/300?img=49', name: 'Ananya', msg: 'Ananya liked your profile.', time: 'Yesterday', unread: false },
];

const notifIcon = { match: '⚡', msg: '💬', like: '❤️', boost: '🚀' };
const notifColor = { match: rose4, msg: '#5B8DEF', like: rose4, boost: '#FFD700' };

function Screen18Notifications() {
  return (
    <div style={{ width: '100%', height: '100%', background: dark4, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <StatusBar />

      <div style={{ padding: '62px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: jk4, fontWeight: 900, fontSize: 22, color: '#fff', letterSpacing: '-1px' }}>Notifications</div>
        <div style={{ fontFamily: jk4, fontSize: 13, fontWeight: 700, color: textSec4, cursor: 'pointer' }}>Mark all read</div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        {notifs.map((n, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12, padding: '13px 18px',
            background: n.unread ? 'rgba(232,98,122,0.05)' : 'transparent',
            borderBottom: '1px solid rgba(255,200,200,0.05)',
            cursor: 'pointer',
          }}>
            {/* avatar or icon */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              {n.photo
                ? <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden' }}><img src={n.photo} alt={n.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                : <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,215,0,0.12)', border: '1px solid rgba(255,215,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>⚡</div>
              }
              <div style={{
                position: 'absolute', bottom: -2, right: -2,
                width: 20, height: 20, borderRadius: '50%',
                background: notifColor[n.type],
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, border: `2px solid ${dark4}`,
              }}>{notifIcon[n.type]}</div>
            </div>
            {/* text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: jk4, fontSize: 13, fontWeight: n.unread ? 600 : 400, color: n.unread ? 'rgba(255,230,220,0.9)' : 'rgba(255,200,200,0.5)', lineHeight: 1.45 }}>{n.msg}</div>
              <div style={{ fontFamily: jk4, fontSize: 11, color: 'rgba(255,200,200,0.3)', marginTop: 4 }}>{n.time}</div>
            </div>
            {n.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: rose4, flexShrink: 0, marginTop: 6 }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Screen 19 — Super Like ────────────────────────────────
function Screen19SuperLike() {
  const [sent, setSent] = React.useState(false);
  return (
    <div style={{ width: '100%', height: '100%', background: dark4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <StatusBar />

      {/* background glow */}
      <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,215,0,0.14) 0%,transparent 70%)', pointerEvents: 'none' }} />

      {!sent ? (
        <>
          {/* profile preview card */}
          <div style={{ width: 260, height: 300, borderRadius: 28, overflow: 'hidden', position: 'relative', marginBottom: 28, boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,215,0,0.3)' }}>
            <img src="https://i.pravatar.cc/300?img=47" alt="Priya" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: 'linear-gradient(transparent,rgba(18,6,3,0.92))', padding: '16px 16px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 4 }}>
              <div style={{ fontFamily: jk4, fontWeight: 900, fontSize: 22, color: '#fff' }}>Priya, 26 🇮🇳</div>
              <div style={{ fontFamily: jk4, fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>📍 London · 3 km</div>
            </div>
            {/* star badge */}
            <div style={{ position: 'absolute', top: 14, right: 14, width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#FFD700,#FFA500)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, boxShadow: '0 4px 16px rgba(255,215,0,0.5)' }}>⭐</div>
          </div>

          <div style={{ textAlign: 'center', padding: '0 36px', marginBottom: 32 }}>
            <div style={{ fontFamily: jk4, fontWeight: 900, fontSize: 24, color: '#fff', letterSpacing: '-1px', marginBottom: 8 }}>
              Super Like Priya?
            </div>
            <div style={{ fontFamily: jk4, fontSize: 14, color: textSec4, lineHeight: 1.6 }}>
              She'll see that you Super Liked her before deciding to swipe. You have <span style={{ color: '#FFD700', fontWeight: 700 }}>2 left today</span>.
            </div>
          </div>

          <div style={{ width: '100%', padding: '0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div onClick={() => setSent(true)} style={{ background: 'linear-gradient(135deg,#FFD700,#FFA500)', borderRadius: 18, padding: '18px 0', textAlign: 'center', fontFamily: jk4, fontSize: 17, fontWeight: 900, color: '#160A06', boxShadow: '0 8px 28px rgba(255,215,0,0.35)', cursor: 'pointer' }}>
              ⭐ Send Super Like
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,200,200,0.1)', borderRadius: 18, padding: '16px 0', textAlign: 'center', fontFamily: jk4, fontSize: 15, fontWeight: 700, color: textSec4, cursor: 'pointer' }}>
              Just like instead
            </div>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '0 36px' }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>⭐</div>
          <div style={{ fontFamily: jk4, fontWeight: 900, fontSize: 26, color: '#fff', letterSpacing: '-1px', marginBottom: 10 }}>Super Like sent!</div>
          <div style={{ fontFamily: jk4, fontSize: 15, color: textSec4, lineHeight: 1.6 }}>Priya will see you at the top of her stack. Fingers crossed! 🤞</div>
        </div>
      )}
    </div>
  );
}

// ── Screen 20 — Report profile ────────────────────────────
const reportReasons = [
  'Fake profile or impersonation',
  'Inappropriate photos',
  'Harassment or spam',
  'Underage user',
  'Hate speech',
  'Other',
];

function Screen20Report() {
  const [selected, setSelected] = React.useState(null);
  const [step, setStep] = React.useState(1);
  return (
    <div style={{ width: '100%', height: '100%', background: dark4, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <StatusBar />

      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '62px 20px 0' }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: textSec4, cursor: 'pointer' }}>←</div>
        <div style={{ fontFamily: jk4, fontWeight: 900, fontSize: 20, color: '#fff', letterSpacing: '-0.8px' }}>Report profile 🚨</div>
      </div>

      {step === 1 ? (
        <>
          {/* who */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 20px 0', background: 'rgba(255,255,255,0.04)', borderRadius: 18, padding: '12px 16px', border: '1px solid rgba(255,200,200,0.07)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img src="https://i.pravatar.cc/300?img=47" alt="Priya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontFamily: jk4, fontWeight: 700, fontSize: 15, color: '#fff' }}>Priya, 26</div>
              <div style={{ fontFamily: jk4, fontSize: 12, color: textSec4 }}>Reporting this profile</div>
            </div>
          </div>

          <div style={{ fontFamily: jk4, fontSize: 13, fontWeight: 700, color: 'rgba(255,200,200,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '20px 20px 10px' }}>Why are you reporting?</div>

          <div style={{ flex: 1, overflow: 'hidden', padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {reportReasons.map((r, i) => (
              <div key={i} onClick={() => setSelected(i)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: selected === i ? 'rgba(232,98,122,0.1)' : 'rgba(255,255,255,0.03)',
                border: `1.5px solid ${selected === i ? 'rgba(232,98,122,0.35)' : 'rgba(255,200,200,0.06)'}`,
                borderRadius: 16, padding: '14px 16px', cursor: 'pointer', transition: 'all 0.18s',
              }}>
                <span style={{ fontFamily: jk4, fontSize: 14, fontWeight: 600, color: selected === i ? '#fff' : 'rgba(255,220,210,0.7)' }}>{r}</span>
                <div style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${selected === i ? rose4 : 'rgba(255,200,200,0.2)'}`, background: selected === i ? rose4 : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {selected === i && <span style={{ color: '#fff', fontSize: 11, fontWeight: 900 }}>✓</span>}
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '16px 20px 44px', display: 'flex', gap: 10 }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,200,200,0.1)', borderRadius: 18, padding: '16px 0', textAlign: 'center', fontFamily: jk4, fontSize: 15, fontWeight: 700, color: textSec4, cursor: 'pointer' }}>
              Block only
            </div>
            <div onClick={() => selected !== null && setStep(2)} style={{
              flex: 2, background: selected !== null ? 'linear-gradient(135deg,#F44336,#C62828)' : 'rgba(244,67,54,0.2)',
              borderRadius: 18, padding: '16px 0', textAlign: 'center', fontFamily: jk4, fontSize: 15, fontWeight: 700, color: '#fff',
              boxShadow: selected !== null ? '0 6px 20px rgba(244,67,54,0.3)' : 'none',
              cursor: selected !== null ? 'pointer' : 'default', transition: 'all 0.2s',
            }}>Report & block</div>
          </div>
        </>
      ) : (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 36px', textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>🛡️</div>
          <div style={{ fontFamily: jk4, fontWeight: 900, fontSize: 22, color: '#fff', marginBottom: 10, letterSpacing: '-0.8px' }}>Report submitted</div>
          <div style={{ fontFamily: jk4, fontSize: 14, color: textSec4, lineHeight: 1.6 }}>Thank you. Our team will review this profile within 24h. Priya has been blocked.</div>
        </div>
      )}
    </div>
  );
}

// ── Screen 21 — Profile edit ──────────────────────────────
function Screen21ProfileEdit() {
  const [bio, setBio] = React.useState("Architecture lover, weekend hiker and certified chai addict ☕. Half London, half Bangalore.");
  const photos = [
    'https://i.pravatar.cc/300?img=33',
    'https://i.pravatar.cc/300?img=52',
    null, null,
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: dark4, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <StatusBar />
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '62px 20px 16px' }}>
        <div style={{ fontFamily: jk4, fontSize: 14, fontWeight: 700, color: textSec4, cursor: 'pointer' }}>Cancel</div>
        <div style={{ fontFamily: jk4, fontWeight: 900, fontSize: 20, color: '#fff', letterSpacing: '-0.8px', flex: 1, textAlign: 'center' }}>Edit profile ✏️</div>
        <div style={{ fontFamily: jk4, fontSize: 14, fontWeight: 700, color: rose4, cursor: 'pointer' }}>Save</div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', padding: '0 18px' }}>
        {/* photo grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(2, 90px)', gap: 8, marginBottom: 18 }}>
          {photos.map((src, i) => (
            <div key={i} style={{
              borderRadius: i === 0 ? 20 : 16,
              overflow: 'hidden', position: 'relative',
              gridRow: i === 0 ? '1 / 3' : undefined,
              background: src ? 'transparent' : 'rgba(255,200,150,0.05)',
              border: src ? 'none' : '1.5px dashed rgba(255,200,150,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}>
              {src
                ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <span style={{ fontSize: 22, color: 'rgba(255,200,150,0.3)' }}>+</span>
              }
              {src && (
                <div style={{ position: 'absolute', bottom: 6, right: 6, width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>✏️</div>
              )}
            </div>
          ))}
        </div>

        {/* bio */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: jk4, fontSize: 12, fontWeight: 700, color: 'rgba(255,200,200,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>Bio</div>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '13px 14px', border: '1.5px solid rgba(232,98,122,0.25)' }}>
            <div style={{ fontFamily: jk4, fontSize: 14, color: 'rgba(255,230,220,0.85)', lineHeight: 1.55 }}>{bio}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
              <span style={{ fontFamily: jk4, fontSize: 11, color: 'rgba(255,200,200,0.3)' }}>{bio.length}/300</span>
            </div>
          </div>
        </div>

        {/* quick fields */}
        {[
          { label: 'Height', value: "5'10\"", emoji: '📏' },
          { label: 'Job', value: 'Software Engineer', emoji: '💼' },
          { label: 'Education', value: 'King\'s College London', emoji: '🎓' },
        ].map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: '12px 14px', marginBottom: 8, border: '1px solid rgba(255,200,200,0.06)' }}>
            <span style={{ fontSize: 18 }}>{f.emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: jk4, fontSize: 11, fontWeight: 600, color: textSec4, textTransform: 'uppercase', letterSpacing: '0.3px' }}>{f.label}</div>
              <div style={{ fontFamily: jk4, fontSize: 14, fontWeight: 600, color: '#fff', marginTop: 2 }}>{f.value}</div>
            </div>
            <span style={{ color: 'rgba(255,200,200,0.25)', fontSize: 16 }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  Screen17Settings,
  Screen18Notifications,
  Screen19SuperLike,
  Screen20Report,
  Screen21ProfileEdit,
});
