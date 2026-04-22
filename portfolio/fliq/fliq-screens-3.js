// Fliq — Screens 12–16

const jk = '"Plus Jakarta Sans", sans-serif';
const rose = '#E8627A';
const salmon = '#F09070';
const peach = '#F5B08A';
const dark = '#22100A';
const textSec = 'rgba(255,200,200,0.65)';

// ── Screen 12 — Filters ───────────────────────────────────
function RangeSlider({
  min,
  max,
  valMin,
  valMax,
  label,
  unit = ''
}) {
  const [lo, setLo] = React.useState(valMin);
  const [hi, setHi] = React.useState(valMax);
  const pct = v => (v - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jk,
      fontSize: 14,
      fontWeight: 700,
      color: '#fff'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jk,
      fontSize: 14,
      fontWeight: 700,
      color: peach
    }
  }, lo, unit, " \u2013 ", hi, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 4,
      background: 'rgba(255,200,150,0.12)',
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: `${pct(lo)}%`,
      right: `${100 - pct(hi)}%`,
      height: '100%',
      background: `linear-gradient(90deg,${rose},${salmon})`,
      borderRadius: 2
    }
  }), [lo, hi].map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      top: '50%',
      left: `${i === 0 ? pct(lo) : pct(hi)}%`,
      transform: 'translate(-50%, -50%)',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: `linear-gradient(135deg,${rose},${salmon})`,
      boxShadow: `0 2px 10px rgba(232,98,122,0.5)`,
      border: '2px solid #fff',
      cursor: 'pointer'
    }
  }))));
}
function ToggleSwitch({
  on = false,
  onChange
}) {
  const [val, setVal] = React.useState(on);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      setVal(!val);
      onChange && onChange(!val);
    },
    style: {
      width: 44,
      height: 24,
      borderRadius: 12,
      background: val ? `linear-gradient(135deg,${rose},${salmon})` : 'rgba(255,200,150,0.12)',
      position: 'relative',
      cursor: 'pointer',
      transition: 'background 0.2s',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 3,
      left: val ? 23 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 0.2s',
      boxShadow: '0 1px 4px rgba(0,0,0,0.3)'
    }
  }));
}
const originChips = ['🇮🇳 Indian', '🇵🇰 Pakistani', '🇱🇰 Sri Lankan', '🇧🇩 Bangladeshi', '🇳🇵 Nepalese', '🌍 Mixed'];
const intentionChips = ['🌹 Serious', '🌺 Open', '✨ Friendship', '🌶️ Casual'];
function Screen12Filters() {
  const [origins, setOrigins] = React.useState(new Set([0, 1]));
  const [intents, setIntents] = React.useState(new Set([0]));
  const toggleSet = (set, setSet, i) => {
    const n = new Set(set);
    n.has(i) ? n.delete(i) : n.add(i);
    setSet(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: dark,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '62px 20px 0'
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
      fontFamily: jk,
      fontWeight: 900,
      fontSize: 20,
      color: '#fff',
      letterSpacing: '-0.8px'
    }
  }, "Discover preferences \uD83D\uDD0D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 13,
      fontWeight: 700,
      color: rose,
      cursor: 'pointer'
    }
  }, "Reset")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      padding: '24px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 20,
      padding: '18px 18px 14px',
      marginBottom: 14,
      border: '1px solid rgba(255,200,200,0.07)'
    }
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    label: "Distance",
    unit: " km",
    min: 1,
    max: 100,
    valMin: 5,
    valMax: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jk,
      fontSize: 13,
      color: textSec
    }
  }, "Show global profiles"), /*#__PURE__*/React.createElement(ToggleSwitch, {
    on: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 20,
      padding: '18px 18px 6px',
      marginBottom: 14,
      border: '1px solid rgba(255,200,200,0.07)'
    }
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    label: "Age range",
    min: 18,
    max: 60,
    valMin: 22,
    valMax: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 20,
      padding: '16px 18px',
      marginBottom: 14,
      border: '1px solid rgba(255,200,200,0.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 14,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 12
    }
  }, "Origins"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, originChips.map((c, i) => {
    const sel = origins.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => toggleSet(origins, setOrigins, i),
      style: {
        padding: '6px 12px',
        borderRadius: 20,
        cursor: 'pointer',
        background: sel ? `linear-gradient(135deg,${rose},${salmon})` : 'rgba(255,200,150,0.07)',
        border: `1.5px solid ${sel ? 'transparent' : 'rgba(255,200,150,0.12)'}`,
        fontFamily: jk,
        fontSize: 12,
        fontWeight: 700,
        color: sel ? '#fff' : textSec,
        transition: 'all 0.18s'
      }
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 20,
      padding: '16px 18px',
      border: '1px solid rgba(255,200,200,0.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 14,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 12
    }
  }, "Looking for"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, intentionChips.map((c, i) => {
    const sel = intents.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => toggleSet(intents, setIntents, i),
      style: {
        padding: '6px 14px',
        borderRadius: 20,
        cursor: 'pointer',
        background: sel ? `linear-gradient(135deg,${rose},${salmon})` : 'rgba(255,200,150,0.07)',
        border: `1.5px solid ${sel ? 'transparent' : 'rgba(255,200,150,0.12)'}`,
        fontFamily: jk,
        fontSize: 12,
        fontWeight: 700,
        color: sel ? '#fff' : textSec,
        transition: 'all 0.18s'
      }
    }, c);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${rose},${salmon})`,
      borderRadius: 18,
      padding: '18px 0',
      textAlign: 'center',
      fontFamily: jk,
      fontSize: 17,
      fontWeight: 700,
      color: '#fff',
      boxShadow: '0 8px 24px rgba(232,98,122,0.4)',
      cursor: 'pointer'
    }
  }, "Apply filters")));
}

// ── Screen 13 — Premium ───────────────────────────────────
const goldFeatures = [{
  icon: '❤️',
  label: 'Unlimited likes',
  sub: 'No daily limit'
}, {
  icon: '👀',
  label: 'See who liked you',
  sub: 'Before you swipe'
}, {
  icon: '⚡',
  label: 'Priority in discovery',
  sub: '3× more visibility'
}, {
  icon: '🌍',
  label: 'Global mode',
  sub: 'Match across Europe'
}, {
  icon: '↩️',
  label: 'Rewind last swipe',
  sub: 'Change your mind'
}, {
  icon: '🔍',
  label: 'Advanced filters',
  sub: 'Height, education & more'
}];
function Screen13Premium() {
  const [period, setPeriod] = React.useState('monthly');
  const price = period === 'monthly' ? '€14.99' : '€8.99';
  const label = period === 'monthly' ? '/month' : '/month, billed yearly';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#120806',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 320,
      height: 320,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(232,98,122,0.22) 0%,transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '66px 24px 20px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontWeight: 900,
      fontSize: 30,
      letterSpacing: '-1.5px',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: `linear-gradient(135deg,${peach},${rose})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "fliq"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FFD700',
      marginLeft: 4
    }
  }, "Gold \u2728")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 14,
      color: textSec,
      marginTop: 6,
      fontWeight: 500
    }
  }, "Dating with the full experience")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 14,
      margin: '0 24px',
      padding: 4,
      position: 'relative',
      zIndex: 1
    }
  }, ['monthly', 'yearly'].map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    onClick: () => setPeriod(p),
    style: {
      flex: 1,
      padding: '10px 0',
      borderRadius: 11,
      textAlign: 'center',
      background: period === p ? `linear-gradient(135deg,${rose},${salmon})` : 'transparent',
      fontFamily: jk,
      fontSize: 13,
      fontWeight: 700,
      color: period === p ? '#fff' : textSec,
      cursor: 'pointer',
      transition: 'all 0.2s',
      position: 'relative'
    }
  }, p === 'yearly' ? 'Yearly' : 'Monthly', p === 'yearly' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -10,
      right: 8,
      background: '#FFD700',
      color: '#160A06',
      fontSize: 9,
      fontWeight: 900,
      padding: '2px 6px',
      borderRadius: 8
    }
  }, "-40%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '16px 0 14px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jk,
      fontWeight: 900,
      fontSize: 36,
      color: '#fff',
      letterSpacing: '-1.5px'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jk,
      fontSize: 13,
      color: textSec,
      marginLeft: 4
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 22px',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, goldFeatures.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 16,
      padding: '11px 16px',
      border: '1px solid rgba(255,215,0,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'rgba(232,98,122,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      flexShrink: 0
    }
  }, f.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontWeight: 700,
      fontSize: 14,
      color: '#fff'
    }
  }, f.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 12,
      color: textSec,
      marginTop: 1
    }
  }, f.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      color: '#FFD700',
      fontSize: 16
    }
  }, "\u2713"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px 40px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#FFD700,#FFA500)',
      borderRadius: 18,
      padding: '18px 0',
      textAlign: 'center',
      fontFamily: jk,
      fontSize: 17,
      fontWeight: 900,
      color: '#160A06',
      boxShadow: '0 8px 28px rgba(255,215,0,0.35)',
      cursor: 'pointer',
      letterSpacing: '-0.3px'
    }
  }, "Try fliq Gold \u2014 ", price), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 12,
      fontFamily: jk,
      fontSize: 12,
      color: 'rgba(255,200,200,0.3)'
    }
  }, "Cancel anytime \xB7 Auto-renews \xB7 Secure payment")));
}

// ── Screen 14 — Profile stats ─────────────────────────────
function StatCard({
  value,
  label,
  sub,
  color = rose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 20,
      padding: '16px 14px',
      border: '1px solid rgba(255,200,200,0.07)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontWeight: 900,
      fontSize: 28,
      color,
      letterSpacing: '-1px'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontWeight: 700,
      fontSize: 13,
      color: '#fff'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 11,
      color: textSec
    }
  }, sub));
}
const weekBars = [38, 52, 45, 70, 88, 62, 95];
const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const likedPhotos = ['https://i.pravatar.cc/300?img=48', 'https://i.pravatar.cc/300?img=49', 'https://i.pravatar.cc/300?img=5', 'https://i.pravatar.cc/300?img=11'];
function Screen14Stats() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: dark,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '62px 20px 0'
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
      color: 'rgba(255,200,200,0.6)'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontWeight: 900,
      fontSize: 20,
      color: '#fff',
      letterSpacing: '-0.8px'
    }
  }, "Your impact \uD83D\uDCCA"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      padding: '20px 18px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "247",
    label: "Profile views",
    sub: "This week",
    color: peach
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "38",
    label: "Likes received",
    sub: "This week",
    color: rose
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "62%",
    label: "Match rate",
    sub: "Above average",
    color: "#3DBE6E"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 20,
      padding: '16px 18px',
      marginBottom: 14,
      border: '1px solid rgba(255,200,200,0.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 14,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 14
    }
  }, "Views this week"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: 70
    }
  }, weekBars.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${h}%`,
      borderRadius: 4,
      background: i === 6 ? `linear-gradient(180deg,${rose},${salmon})` : 'rgba(255,200,150,0.12)',
      boxShadow: i === 6 ? `0 4px 12px rgba(232,98,122,0.3)` : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jk,
      fontSize: 10,
      color: i === 6 ? rose : textSec,
      fontWeight: i === 6 ? 700 : 500
    }
  }, weekDays[i]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 20,
      padding: '16px 18px',
      border: '1px solid rgba(255,200,200,0.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 14,
      fontWeight: 700,
      color: '#fff'
    }
  }, "Who liked you \u2764\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${rose},${salmon})`,
      borderRadius: 10,
      padding: '4px 10px',
      fontFamily: jk,
      fontSize: 11,
      fontWeight: 700,
      color: '#fff',
      cursor: 'pointer'
    }
  }, "\u2728 Unlock")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, likedPhotos.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      aspectRatio: '3/4',
      borderRadius: 14,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'blur(8px) brightness(0.6)'
    }
  }), i === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
    }
  }, "\uD83D\uDD12"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      aspectRatio: '3/4',
      borderRadius: 14,
      background: 'rgba(255,200,150,0.07)',
      border: '1px dashed rgba(255,200,150,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: jk,
      fontSize: 13,
      color: textSec,
      fontWeight: 700
    }
  }, "+34")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${rose},${salmon})`,
      borderRadius: 18,
      padding: '16px 0',
      textAlign: 'center',
      fontFamily: jk,
      fontSize: 16,
      fontWeight: 700,
      color: '#fff',
      boxShadow: '0 8px 24px rgba(232,98,122,0.35)',
      cursor: 'pointer'
    }
  }, "\u26A1 Boost your profile")));
}

// ── Screen 15 — Empty state ───────────────────────────────
function Screen15Empty() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: dark,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 280,
      height: 280,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(232,98,122,0.1) 0%,transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: 'linear-gradient(145deg,rgba(232,98,122,0.15),rgba(240,144,112,0.08))',
      border: '1px solid rgba(232,98,122,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 56
    }
  }, "\uD83C\uDF19"), [{
    top: -16,
    right: 8,
    size: 20
  }, {
    top: 10,
    right: -20,
    size: 14
  }, {
    top: -8,
    left: -18,
    size: 16
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      top: s.top,
      right: s.right,
      left: s.left,
      fontSize: s.size,
      opacity: 0.6
    }
  }, "\u2726"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '0 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontWeight: 900,
      fontSize: 24,
      color: '#fff',
      letterSpacing: '-1px',
      lineHeight: 1.2,
      marginBottom: 10
    }
  }, "You've seen everyone nearby"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 15,
      color: textSec,
      fontWeight: 500,
      lineHeight: 1.6,
      marginBottom: 32
    }
  }, "Expand your radius or check back tomorrow \u2014 new profiles join every day.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${rose},${salmon})`,
      borderRadius: 18,
      padding: '17px 0',
      textAlign: 'center',
      fontFamily: jk,
      fontSize: 16,
      fontWeight: 700,
      color: '#fff',
      boxShadow: '0 8px 24px rgba(232,98,122,0.35)',
      cursor: 'pointer'
    }
  }, "\uD83C\uDF0D Expand to 50 km"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,200,150,0.07)',
      border: '1.5px solid rgba(255,200,150,0.12)',
      borderRadius: 18,
      padding: '16px 0',
      textAlign: 'center',
      fontFamily: jk,
      fontSize: 15,
      fontWeight: 700,
      color: textSec,
      cursor: 'pointer'
    }
  }, "\u26A1 Boost my profile"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: jk,
      fontSize: 14,
      color: 'rgba(255,200,200,0.3)',
      cursor: 'pointer',
      marginTop: 4
    }
  }, "Adjust my filters")));
}

// ── Screen 16 — Identity verification ────────────────────
const verifySteps = [{
  icon: '🤳',
  title: 'Take a selfie',
  done: false,
  active: true
}, {
  icon: '🪪',
  title: 'Upload ID',
  done: false,
  active: false
}, {
  icon: '✅',
  title: 'Confirmed',
  done: false,
  active: false
}];
function Screen16Verify() {
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
      width: '33%',
      height: '100%',
      background: `linear-gradient(90deg,${rose},${salmon})`,
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jk,
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(34,16,10,0.35)'
    }
  }, "1 / 3")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontWeight: 900,
      fontSize: 24,
      color: '#22100A',
      letterSpacing: '-1px',
      lineHeight: 1.2
    }
  }, "Verify your identity \u2705"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 14,
      color: '#9B7060',
      marginTop: 8,
      lineHeight: 1.5,
      fontWeight: 500
    }
  }, "Get a blue badge and build trust with matches.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '22px 28px',
      gap: 0
    }
  }, verifySteps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: s.active ? `linear-gradient(135deg,${rose},${salmon})` : s.done ? '#3DBE6E' : 'rgba(155,112,96,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      boxShadow: s.active ? '0 4px 14px rgba(232,98,122,0.35)' : 'none'
    }
  }, s.done ? '✓' : s.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jk,
      fontSize: 11,
      fontWeight: 700,
      color: s.active ? '#E8627A' : '#9B7060',
      whiteSpace: 'nowrap'
    }
  }, s.title)), i < verifySteps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: 'rgba(155,112,96,0.15)',
      margin: '-14px 8px 0'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 24px',
      flex: 1,
      maxHeight: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'rgba(34,16,10,0.06)',
      borderRadius: 28,
      border: `2.5px dashed rgba(232,98,122,0.3)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      height: 160,
      borderRadius: '50%',
      border: `3px solid rgba(232,98,122,0.4)`,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 64
    }
  }, "\uD83E\uDD33"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jk,
      fontSize: 14,
      fontWeight: 600,
      color: '#9B7060',
      textAlign: 'center',
      padding: '0 20px'
    }
  }, "Position your face in the oval"), [{
    top: 12,
    left: 12
  }, {
    top: 12,
    right: 12
  }, {
    bottom: 12,
    left: 12
  }, {
    bottom: 12,
    right: 12
  }].map((pos, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      ...pos,
      width: 20,
      height: 20,
      borderColor: rose,
      borderStyle: 'solid',
      borderWidth: i === 0 ? '3px 0 0 3px' : i === 1 ? '3px 3px 0 0' : i === 2 ? '0 0 3px 3px' : '0 3px 3px 0',
      borderRadius: i === 0 ? '6px 0 0 0' : i === 1 ? '0 6px 0 0' : i === 2 ? '0 0 0 6px' : '0 0 6px 0'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '16px 24px 0',
      justifyContent: 'center'
    }
  }, ['🔒 Secure', '👁️ Not stored', '⚡ 30 seconds'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'rgba(232,98,122,0.08)',
      border: '1px solid rgba(232,98,122,0.15)',
      borderRadius: 20,
      padding: '5px 10px',
      fontFamily: jk,
      fontSize: 11,
      fontWeight: 600,
      color: '#9B7060'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${rose},${salmon})`,
      borderRadius: 18,
      padding: '18px 0',
      textAlign: 'center',
      fontFamily: jk,
      fontSize: 17,
      fontWeight: 700,
      color: '#fff',
      boxShadow: '0 8px 24px rgba(232,98,122,0.35)',
      cursor: 'pointer'
    }
  }, "\uD83D\uDCF8 Take selfie")));
}
Object.assign(window, {
  Screen12Filters,
  Screen13Premium,
  Screen14Stats,
  Screen15Empty,
  Screen16Verify
});