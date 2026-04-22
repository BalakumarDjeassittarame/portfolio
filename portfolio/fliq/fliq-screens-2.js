// Fliq — Screens 7–11

// ── Screen 7 — Onboarding basic info ──────────────────────
function Screen7Onboarding() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState(null);
  const genders = [{
    id: 'man',
    label: 'Man',
    emoji: '👨'
  }, {
    id: 'woman',
    label: 'Woman',
    emoji: '👩'
  }, {
    id: 'nb',
    label: 'Non-binary',
    emoji: '🌈'
  }, {
    id: 'other',
    label: 'Other',
    emoji: '✨'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#FDF2EC',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '66px 24px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(34,16,10,0.07)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      cursor: 'pointer'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 4,
      background: 'rgba(232,98,122,0.15)',
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '25%',
      height: '100%',
      background: 'linear-gradient(90deg,#E8627A,#F09070)',
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(34,16,10,0.35)'
    }
  }, "1 / 4")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontWeight: 900,
      fontSize: 26,
      color: '#22100A',
      letterSpacing: '-1px',
      lineHeight: 1.2
    }
  }, "Let's start with", /*#__PURE__*/React.createElement("br", null), "the basics \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 15,
      color: '#9B7060',
      marginTop: 8,
      fontWeight: 500
    }
  }, "This is how you'll appear on your profile.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 24px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      fontWeight: 700,
      color: '#9B7060',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "First name"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: name ? '2px solid #E8627A' : '1.5px solid rgba(155,112,96,0.18)',
      borderRadius: 16,
      padding: '15px 18px',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 17,
      fontWeight: 600,
      color: name ? '#22100A' : 'rgba(155,112,96,0.4)',
      boxShadow: name ? '0 4px 16px rgba(232,98,122,0.12)' : 'none'
    }
  }, name || 'Your first name')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      fontWeight: 700,
      color: '#9B7060',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Age"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1.5px solid rgba(155,112,96,0.18)',
      borderRadius: 16,
      padding: '15px 18px',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 17,
      fontWeight: 600,
      color: 'rgba(155,112,96,0.4)'
    }
  }, "Your age")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      fontWeight: 700,
      color: '#9B7060',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "I identify as"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, genders.map(g => {
    const sel = gender === g.id;
    return /*#__PURE__*/React.createElement("div", {
      key: g.id,
      onClick: () => setGender(g.id),
      style: {
        background: sel ? 'linear-gradient(145deg,#FFF0EB,#fff)' : '#fff',
        border: sel ? '2px solid #E8627A' : '1.5px solid rgba(155,112,96,0.14)',
        borderRadius: 16,
        padding: '14px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        boxShadow: sel ? '0 4px 16px rgba(232,98,122,0.15)' : '0 1px 6px rgba(0,0,0,0.04)',
        transition: 'all 0.2s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, g.emoji), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontWeight: sel ? 700 : 600,
        fontSize: 14,
        color: sel ? '#E8627A' : '#22100A'
      }
    }, g.label), sel && /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: '#E8627A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
        color: '#fff',
        fontWeight: 900
      }
    }, "\u2713"));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 44px',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: gender ? 'linear-gradient(135deg,#E8627A,#F09070)' : 'rgba(232,98,122,0.25)',
      borderRadius: 18,
      padding: '18px 0',
      textAlign: 'center',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 17,
      fontWeight: 700,
      color: '#fff',
      boxShadow: gender ? '0 8px 24px rgba(232,98,122,0.35)' : 'none',
      transition: 'all 0.25s',
      cursor: gender ? 'pointer' : 'default'
    }
  }, "Continue \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 14,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      color: 'rgba(155,112,96,0.5)',
      fontWeight: 500
    }
  }, "By continuing you agree to our Terms & Privacy")));
}

// ── Screen 8 — It's a Fliq! (Match overlay) ──────────────
function Confetti() {
  const pieces = React.useMemo(() => Array.from({
    length: 48
  }, (_, i) => ({
    id: i,
    x: Math.random() * 375,
    delay: Math.random() * 1.2,
    dur: 1.8 + Math.random() * 1.4,
    size: 6 + Math.random() * 8,
    color: ['#E8627A', '#F09070', '#F5B08A', '#fff', '#FFD700', '#C04060'][Math.floor(Math.random() * 6)],
    rotate: Math.random() * 360,
    shape: Math.random() > 0.5 ? 'circle' : 'rect'
  })), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes confettiFall {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(860px) rotate(720deg); opacity: 0; }
        }
      `), pieces.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      position: 'absolute',
      left: p.x,
      top: -10,
      width: p.shape === 'circle' ? p.size : p.size * 0.6,
      height: p.shape === 'circle' ? p.size : p.size * 1.4,
      borderRadius: p.shape === 'circle' ? '50%' : 3,
      background: p.color,
      animation: `confettiFall ${p.dur}s ${p.delay}s ease-in infinite`,
      transform: `rotate(${p.rotate}deg)`
    }
  })));
}
function Screen8Match() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, #1A0808 0%, #22100A 50%, #160A06 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(Confetti, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(232,98,122,0.25) 0%, transparent 70%)',
      filter: 'blur(40px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: -16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 110,
      borderRadius: '50%',
      background: 'linear-gradient(145deg,#E8627A,#C04060)',
      border: '4px solid #22100A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 56,
      zIndex: 2,
      boxShadow: '0 8px 32px rgba(232,98,122,0.4)',
      marginRight: -20,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/300?img=33",
    alt: "You",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#E8627A,#F09070)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      zIndex: 5,
      boxShadow: '0 4px 20px rgba(232,98,122,0.6)',
      border: '3px solid #22100A'
    }
  }, "\u2764\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 110,
      borderRadius: '50%',
      background: 'linear-gradient(145deg,#D4889A,#E8A8B0)',
      border: '4px solid #22100A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 56,
      zIndex: 2,
      boxShadow: '0 8px 32px rgba(232,98,122,0.3)',
      marginLeft: -20,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/300?img=47",
    alt: "Priya",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: 10,
      textAlign: 'center',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontWeight: 900,
      fontSize: 38,
      color: '#fff',
      letterSpacing: '-2px',
      lineHeight: 1.1,
      marginBottom: 6
    }
  }, "It's a fliq! \u26A1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 16,
      fontWeight: 500,
      color: 'rgba(255,200,180,0.7)',
      lineHeight: 1.5
    }
  }, "You and ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F5B08A',
      fontWeight: 700
    }
  }, "Priya"), " liked each other.", /*#__PURE__*/React.createElement("br", null), "Don't let this moment pass.")), /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: 10,
      width: '100%',
      padding: '40px 28px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#E8627A,#F09070)',
      borderRadius: 18,
      padding: '18px 0',
      textAlign: 'center',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 17,
      fontWeight: 700,
      color: '#fff',
      boxShadow: '0 10px 32px rgba(232,98,122,0.45)',
      cursor: 'pointer'
    }
  }, "\uD83D\uDCAC Send a message"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 18,
      padding: '16px 0',
      textAlign: 'center',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 16,
      fontWeight: 600,
      color: 'rgba(255,200,200,0.5)',
      cursor: 'pointer',
      border: '1.5px solid rgba(255,200,200,0.12)'
    }
  }, "Keep swiping")));
}

// ── Screen 9 — Full profile view ──────────────────────────
function Screen9Profile() {
  const [tab, setTab] = React.useState('about');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: C.screenLight,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 420,
      position: 'relative',
      flexShrink: 0,
      background: 'linear-gradient(160deg,#D4889A,#E8A8B0,#F0C8B8)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 56,
      left: 18,
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'rgba(0,0,0,0.25)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      color: '#fff',
      cursor: 'pointer',
      zIndex: 10
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: 5,
      zIndex: 10
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 3,
      width: i === 0 ? 24 : 8,
      borderRadius: 2,
      background: i === 0 ? '#fff' : 'rgba(255,255,255,0.4)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/300?img=47",
    alt: "Priya",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 120,
      background: 'linear-gradient(transparent, #F5EDE6)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingTop: 4,
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontWeight: 900,
      fontSize: 28,
      color: '#22100A',
      letterSpacing: '-1px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "Priya, 26 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, "\uD83C\uDDEE\uD83C\uDDF3")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      color: '#9B7060',
      fontWeight: 500,
      marginTop: 3
    }
  }, "\uD83D\uDCCD London \xB7 3 km away")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      boxShadow: '0 3px 14px rgba(244,67,54,0.18)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F44336',
      fontWeight: 900
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#E8627A,#F09070)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      boxShadow: '0 4px 16px rgba(232,98,122,0.4)',
      cursor: 'pointer'
    }
  }, "\u2764\uFE0F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginBottom: 16,
      background: 'rgba(34,16,10,0.07)',
      borderRadius: 14,
      padding: 4
    }
  }, ['about', 'interests', 'details'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    onClick: () => setTab(t),
    style: {
      flex: 1,
      padding: '9px 0',
      borderRadius: 11,
      textAlign: 'center',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: 700,
      background: tab === t ? '#fff' : 'transparent',
      color: tab === t ? '#22100A' : '#9B7060',
      boxShadow: tab === t ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      textTransform: 'capitalize'
    }
  }, t))), tab === 'about' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(232,98,122,0.1)',
      border: '1px solid rgba(232,98,122,0.25)',
      borderRadius: 20,
      padding: '5px 12px',
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\uD83C\uDF39"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: 700,
      color: '#E8627A'
    }
  }, "Serious relationship")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 15,
      color: '#4A2C20',
      fontWeight: 400,
      lineHeight: 1.6,
      fontStyle: 'italic'
    }
  }, "\"Architecture lover, weekend hiker and certified chai addict \u2615. Half London, half Bangalore. Looking for someone to explore farmers markets with.\"")), tab === 'interests' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['🎵 Music', '✈️ Travel', '🏋️ Fitness', '🍜 Food', '📸 Photography', '🎨 Art'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '8px 14px',
      borderRadius: 20,
      background: i < 3 ? 'linear-gradient(135deg,#E8627A,#F09070)' : '#fff',
      border: i < 3 ? 'none' : '1.5px solid rgba(155,112,96,0.18)',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: 700,
      color: i < 3 ? '#fff' : '#22100A',
      boxShadow: i < 3 ? '0 4px 12px rgba(232,98,122,0.3)' : '0 1px 6px rgba(0,0,0,0.05)'
    }
  }, t))), tab === 'details' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['📏', 'Height', '5\'6"'], ['🎓', 'Education', 'UCL Architecture'], ['💼', 'Job', 'Junior Architect'], ['🗣️', 'Languages', 'English, Hindi, Kannada']].map(([icon, label, val], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#fff',
      borderRadius: 14,
      padding: '12px 16px',
      boxShadow: '0 1px 6px rgba(0,0,0,0.05)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 11,
      fontWeight: 600,
      color: '#9B7060',
      textTransform: 'uppercase',
      letterSpacing: '0.4px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      fontWeight: 700,
      color: '#22100A',
      marginTop: 1
    }
  }, val)))))));
}

// ── Screen 10 — Chat list ─────────────────────────────────
const matchAvatars = [{
  photo: 'https://i.pravatar.cc/300?img=47',
  name: 'Priya',
  new: true
}, {
  photo: 'https://i.pravatar.cc/300?img=48',
  name: 'Asha',
  new: true
}, {
  photo: 'https://i.pravatar.cc/300?img=11',
  name: 'Riya',
  new: false
}, {
  photo: 'https://i.pravatar.cc/300?img=49',
  name: 'Ananya',
  new: false
}, {
  photo: 'https://i.pravatar.cc/300?img=5',
  name: 'Meera',
  new: false
}];
const convos = [{
  photo: 'https://i.pravatar.cc/300?img=47',
  name: 'Priya',
  msg: 'Haha yes exactly!! That chai place near Borough Market is 🔥',
  time: '2m',
  unread: 3
}, {
  photo: 'https://i.pravatar.cc/300?img=48',
  name: 'Asha',
  msg: 'Okay but have you been to the one in Brick Lane?',
  time: '1h',
  unread: 1
}, {
  photo: 'https://i.pravatar.cc/300?img=11',
  name: 'Riya',
  msg: 'Sounds good! Saturday works for me 😊',
  time: '3h',
  unread: 0
}, {
  photo: 'https://i.pravatar.cc/300?img=49',
  name: 'Ananya',
  msg: 'You: Haha totally, same here!',
  time: 'Thu',
  unread: 0
}];
function Screen10ChatList() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: C.screenDark,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '62px 20px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontWeight: 900,
      fontSize: 24,
      color: '#fff',
      letterSpacing: '-1px'
    }
  }, "Messages"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#E8627A,#F09070)',
      borderRadius: 12,
      padding: '6px 12px',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      fontWeight: 700,
      color: '#fff'
    }
  }, "4 new \u26A1")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: 700,
      color: 'rgba(255,200,200,0.45)',
      paddingLeft: 20,
      marginBottom: 12,
      letterSpacing: '0.3px',
      textTransform: 'uppercase'
    }
  }, "New fliq's"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      paddingLeft: 20,
      paddingRight: 20,
      overflowX: 'hidden'
    }
  }, matchAvatars.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: m.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 28,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: m.photo,
    alt: m.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), m.new && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#E8627A',
      border: '2px solid #22100A'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      fontWeight: 600,
      color: 'rgba(255,220,200,0.7)'
    }
  }, m.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,200,200,0.06)',
      margin: '0 20px 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: 700,
      color: 'rgba(255,200,200,0.45)',
      paddingLeft: 20,
      marginBottom: 10,
      letterSpacing: '0.3px',
      textTransform: 'uppercase'
    }
  }, "Conversations"), convos.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 20px',
      background: i === 0 ? 'rgba(232,98,122,0.06)' : 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.photo,
    alt: c.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontWeight: 800,
      fontSize: 15,
      color: '#fff'
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      fontWeight: 500,
      color: c.unread ? '#E8627A' : 'rgba(255,200,200,0.35)'
    }
  }, c.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: c.unread ? 600 : 400,
      color: c.unread ? 'rgba(255,230,220,0.85)' : 'rgba(255,200,200,0.4)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.msg)), c.unread > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#E8627A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 11,
      fontWeight: 800,
      color: '#fff',
      flexShrink: 0
    }
  }, c.unread)))));
}

// ── Screen 11 — Open conversation ─────────────────────────
const messages = [{
  from: 'them',
  text: 'Hey!! Your profile is really interesting 😊',
  time: '14:02'
}, {
  from: 'me',
  text: "Haha thank you! Yours too \u2014 love that you hike, I've been wanting to do the Brecon Beacons \uD83C\uDFD4\uFE0F",
  time: '14:05'
}, {
  from: 'them',
  text: "Oh yes!! I did it last spring, it was absolutely stunning. Did you do any hiking recently?",
  time: '14:07'
}, {
  from: 'me',
  text: "Not recently but I'm planning a trip to Scotland in August \uD83C\uDF3F",
  time: '14:09'
}, {
  from: 'them',
  text: 'That chai place near Borough Market is 🔥',
  time: '14:12'
}, {
  from: 'me',
  text: 'Omg yes!! The masala one right?? 🧡',
  time: '14:14'
}];
function Screen11Chat() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: C.screenDark,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '58px 16px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderBottom: '1px solid rgba(255,200,200,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      color: 'rgba(255,200,200,0.6)',
      cursor: 'pointer'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/300?img=47",
    alt: "Priya",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontWeight: 800,
      fontSize: 16,
      color: '#fff'
    }
  }, "Priya"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      fontWeight: 500,
      color: '#3DBE6E'
    }
  }, "\u25CF Online")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      cursor: 'pointer'
    }
  }, "\u22EF")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      overflow: 'hidden',
      justifyContent: 'flex-end'
    }
  }, messages.map((m, i) => {
    const isMe = m.from === 'me';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: isMe ? 'flex-end' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '78%',
        background: isMe ? 'linear-gradient(135deg,#E8627A,#F09070)' : 'rgba(255,255,255,0.08)',
        borderRadius: isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        padding: '10px 14px',
        boxShadow: isMe ? '0 4px 16px rgba(232,98,122,0.3)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontSize: 14,
        fontWeight: 500,
        color: isMe ? '#fff' : 'rgba(255,230,220,0.9)',
        lineHeight: 1.45
      }
    }, m.text), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontSize: 10,
        fontWeight: 600,
        color: isMe ? 'rgba(255,255,255,0.55)' : 'rgba(255,200,200,0.3)',
        marginTop: 4,
        textAlign: 'right'
      }
    }, m.time)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 36px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderTop: '1px solid rgba(255,200,200,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'rgba(255,255,255,0.07)',
      border: '1.5px solid rgba(255,200,200,0.1)',
      borderRadius: 24,
      padding: '11px 16px',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 15,
      fontWeight: 400,
      color: 'rgba(255,200,200,0.3)'
    }
  }, "Message Priya\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#E8627A,#F09070)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      boxShadow: '0 4px 16px rgba(232,98,122,0.4)',
      cursor: 'pointer'
    }
  }, "\u2191")));
}
Object.assign(window, {
  Screen7Onboarding,
  Screen8Match,
  Screen9Profile,
  Screen10ChatList,
  Screen11Chat
});