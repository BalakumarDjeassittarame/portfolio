// Fliq — 6 screen components
// Each screen is 375×812px (iPhone 14 Pro content area)

// ── Shared tokens ──────────────────────────────────────────
const C = {
  rose: '#E8627A',
  salmon: '#F09070',
  peach: '#F5B08A',
  darkBg: '#160A06',
  screenDark: '#22100A',
  screenLight: '#F5EDE6',
  onboardLight: '#FDF2EC',
  textDark: '#FFFFFF',
  textSec: 'rgba(255,200,200,0.65)',
  textLight: '#22100A',
  textLightSec: '#9B7060'
};
const jakartaSans = '"Plus Jakarta Sans", sans-serif';

// Inject Google Font
if (!document.getElementById('fliq-font')) {
  const l = document.createElement('link');
  l.id = 'fliq-font';
  l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&display=swap';
  document.head.appendChild(l);
}

// ── Custom iPhone shell ────────────────────────────────────
function FliqPhone({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#2A1408',
      borderRadius: 56,
      padding: 3,
      boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#3A2010',
      borderRadius: 54,
      padding: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 375,
      height: 812,
      borderRadius: 50,
      overflow: 'hidden',
      position: 'relative',
      fontFamily: jakartaSans,
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 120,
      height: 34,
      borderRadius: 20,
      background: '#000',
      zIndex: 100
    }
  }), children))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(255,220,200,0.5)',
      letterSpacing: 0.5
    }
  }, label));
}

// ── Status bar (inside screens) ───────────────────────────
function StatusBar({
  dark = true
}) {
  const c = dark ? 'rgba(255,255,255,0.8)' : 'rgba(34,16,10,0.6)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 59,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: '0 28px 10px',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jakartaSans,
      fontWeight: 700,
      fontSize: 15,
      color: c
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "12",
    viewBox: "0 0 18 12"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: i * 4.5,
    y: 12 - (i + 1) * 3,
    width: "3.2",
    height: (i + 1) * 3,
    rx: "0.6",
    fill: c
  }))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 9.5 a0.8 0.8 0 1 0 0.01 0",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 7 Q8 4 11 7",
    fill: "none",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 4.5 Q8 -0.5 13.5 4.5",
    fill: "none",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "25",
    height: "12",
    viewBox: "0 0 25 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "21",
    height: "11",
    rx: "3",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "17",
    height: "8",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 4v4c.8-.4 1.3-1.2 1.3-2s-.5-1.6-1.3-2z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ── Progress dots ─────────────────────────────────────────
function ProgressDots({
  total = 4,
  active = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 6,
      width: i === active ? 22 : 6,
      borderRadius: 3,
      background: i === active ? C.rose : 'rgba(255,200,150,0.2)',
      transition: 'all 0.3s ease'
    }
  })));
}

// ── Primary button ────────────────────────────────────────
function PrimaryBtn({
  children,
  glass = false,
  style = {}
}) {
  if (glass) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.18)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1.5px solid rgba(255,255,255,0.4)',
      borderRadius: 18,
      padding: '17px 0',
      textAlign: 'center',
      fontFamily: jakartaSans,
      fontSize: 17,
      fontWeight: 700,
      color: '#fff',
      cursor: 'pointer',
      ...style
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #E8627A, #F09070)',
      borderRadius: 18,
      padding: '18px 0',
      textAlign: 'center',
      fontFamily: jakartaSans,
      fontSize: 17,
      fontWeight: 700,
      color: '#fff',
      boxShadow: '0 8px 24px rgba(232,98,122,0.4)',
      cursor: 'pointer',
      ...style
    }
  }, children);
}

// ══════════════════════════════════════════════════════════
// SCREEN 1 — Splash
// ══════════════════════════════════════════════════════════
function Screen1Splash() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(160deg, #D44E6A 0%, #E8627A 45%, #F09070 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -60,
      right: -60,
      width: 240,
      height: 240,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 60,
      left: -80,
      width: 280,
      height: 280,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '40%',
      right: -40,
      width: 160,
      height: 160,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.07)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '25%',
      left: -50,
      width: 180,
      height: 180,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.05)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: 30,
      background: 'rgba(255,255,255,0.20)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1.5px solid rgba(255,255,255,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 44
    }
  }, "\u26A1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontWeight: 900,
      fontSize: 56,
      color: '#fff',
      letterSpacing: '-3px',
      lineHeight: 1,
      marginTop: 8
    }
  }, "fliq"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 16,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.85)',
      textAlign: 'center',
      letterSpacing: 0.2
    }
  }, "Modern dating for the Desi community")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 52,
      left: 28,
      right: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(PrimaryBtn, {
    glass: true,
    style: {
      width: '100%'
    }
  }, "Get started"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: jakartaSans,
      fontSize: 15,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.50)',
      cursor: 'pointer'
    }
  }, "I already have an account")));
}

// ══════════════════════════════════════════════════════════
// SCREEN 2 — Intentions
// ══════════════════════════════════════════════════════════
const intentionOptions = [{
  emoji: '🌹',
  label: 'Serious relationship',
  sub: 'Long-term commitment',
  color: '#E8627A',
  grad: 'linear-gradient(145deg,#E8627A,#C04560)'
}, {
  emoji: '🌺',
  label: 'See where it goes',
  sub: 'Open to anything',
  color: '#F09070',
  grad: 'linear-gradient(145deg,#F09070,#D06040)'
}, {
  emoji: '✨',
  label: 'Friendship',
  sub: 'Building connections',
  color: '#F5B08A',
  grad: 'linear-gradient(145deg,#F5B08A,#D08050)'
}, {
  emoji: '🌶️',
  label: 'Casual',
  sub: 'Keeping it light',
  color: '#E8627A',
  grad: 'linear-gradient(145deg,#D44E6A,#E8627A)'
}];
function Screen2Intentions() {
  const [selected, setSelected] = React.useState(0);
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
      paddingTop: 70,
      paddingHorizontal: 28,
      padding: '70px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontWeight: 900,
      fontSize: 26,
      color: '#fff',
      letterSpacing: '-1px',
      lineHeight: 1.2
    }
  }, "What are you looking for? \uD83D\uDC40"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 15,
      fontWeight: 500,
      color: C.textSec,
      marginTop: 8
    }
  }, "Be honest \u2014 no judgment here.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      padding: '28px 28px 0',
      flex: 1
    }
  }, intentionOptions.map((opt, i) => {
    const sel = selected === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => setSelected(i),
      style: {
        borderRadius: 24,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        cursor: 'pointer',
        background: sel ? opt.grad : `rgba(${i === 0 ? '232,98,122' : i === 1 ? '240,144,112' : i === 2 ? '245,176,138' : '212,78,106'},0.12)`,
        border: `1.5px solid ${sel ? 'transparent' : `rgba(${i === 0 ? '232,98,122' : i === 1 ? '240,144,112' : i === 2 ? '245,176,138' : '212,78,106'},0.35)`}`,
        boxShadow: sel ? `0 8px 32px ${opt.color}44` : 'none',
        position: 'relative',
        transition: 'all 0.25s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: sel ? '#fff' : 'rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s'
      }
    }, sel && /*#__PURE__*/React.createElement("span", {
      style: {
        color: opt.color,
        fontSize: 12,
        fontWeight: 900
      }
    }, "\u2713")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: 'rgba(255,255,255,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22
      }
    }, opt.emoji), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: jakartaSans,
        fontWeight: 800,
        fontSize: 14,
        color: '#fff',
        lineHeight: 1.3
      }
    }, opt.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: jakartaSans,
        fontSize: 12,
        fontWeight: 500,
        color: C.textSec,
        marginTop: 2
      }
    }, opt.sub)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px 44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(ProgressDots, {
    total: 4,
    active: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #E8627A, #F09070)',
      borderRadius: 18,
      padding: '14px 32px',
      fontFamily: jakartaSans,
      fontSize: 16,
      fontWeight: 700,
      color: '#fff',
      boxShadow: '0 8px 24px rgba(232,98,122,0.4)',
      cursor: 'pointer'
    }
  }, "Continue")));
}

// ══════════════════════════════════════════════════════════
// SCREEN 3 — Origins
// ══════════════════════════════════════════════════════════
const origins = [{
  code: 'in',
  name: 'Indian',
  sub: 'India & diaspora'
}, {
  code: 'pk',
  name: 'Pakistani',
  sub: 'Pakistan & diaspora'
}, {
  code: 'lk',
  name: 'Sri Lankan',
  sub: 'Sri Lanka & diaspora'
}, {
  code: 'bd',
  name: 'Bangladeshi',
  sub: 'Bangladesh & diaspora'
}, {
  code: 'np',
  name: 'Nepalese',
  sub: 'Nepal & diaspora'
}, {
  code: 'tn',
  name: 'Mixed / Other',
  sub: 'Many roots',
  isOther: true
}];
function Screen3Origins() {
  const [selected, setSelected] = React.useState(new Set([0]));
  const toggle = i => setSelected(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: C.onboardLight,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 70,
      padding: '70px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontWeight: 900,
      fontSize: 26,
      color: C.textLight,
      letterSpacing: '-1px',
      lineHeight: 1.2
    }
  }, "Where are you from? \uD83C\uDF0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 15,
      fontWeight: 500,
      color: C.textLightSec,
      marginTop: 8
    }
  }, "Select all that apply")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      padding: '24px 20px 0',
      flex: 1
    }
  }, origins.map((o, i) => {
    const sel = selected.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => toggle(i),
      style: {
        background: sel ? 'linear-gradient(145deg, #FFF5EC, #fff)' : '#fff',
        borderRadius: 20,
        border: sel ? `2px solid ${C.rose}` : '1.5px solid rgba(155,112,96,0.12)',
        boxShadow: sel ? '0 6px 20px rgba(232,98,122,0.18)' : '0 2px 10px rgba(0,0,0,0.06)',
        padding: '14px 14px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.22s ease'
      }
    }, sel && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -8,
        right: -8,
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: C.rose,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 11,
        color: '#fff',
        fontWeight: 900
      }
    }, "\u2713"), o.isOther ? /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: 48,
        borderRadius: 8,
        background: 'linear-gradient(90deg,#E8627A,#F09070,#F5B08A)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22
      }
    }, "\uD83C\uDF0D") : /*#__PURE__*/React.createElement("img", {
      src: `https://flagcdn.com/w80/${o.code}.png`,
      alt: o.name,
      style: {
        width: '100%',
        height: 48,
        objectFit: 'cover',
        borderRadius: 8
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: jakartaSans,
        fontWeight: 700,
        fontSize: 14,
        color: C.textLight
      }
    }, o.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: jakartaSans,
        fontSize: 11,
        fontWeight: 500,
        color: C.textLightSec,
        marginTop: 2
      }
    }, o.sub)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(ProgressDots, {
    total: 4,
    active: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #E8627A, #F09070)',
      borderRadius: 18,
      padding: '14px 32px',
      fontFamily: jakartaSans,
      fontSize: 16,
      fontWeight: 700,
      color: '#fff',
      boxShadow: '0 8px 24px rgba(232,98,122,0.4)',
      cursor: 'pointer'
    }
  }, "Continue")));
}

// ══════════════════════════════════════════════════════════
// SCREEN 4 — Profile
// ══════════════════════════════════════════════════════════
const passionTags = ['🎵 Music', '✈️ Travel', '🍜 Food', '📸 Photo', '🏋️ Fitness', '🎮 Gaming', '📚 Books'];
function Screen4Profile() {
  const [activeTags, setActiveTags] = React.useState(new Set([0, 1, 4]));
  const toggleTag = i => setActiveTags(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: C.screenDark,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 66,
      padding: '66px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontWeight: 900,
      fontSize: 24,
      color: '#fff',
      letterSpacing: '-1px'
    }
  }, "Create your profile \u2728"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 14,
      fontWeight: 500,
      color: 'rgba(255,200,150,0.5)',
      marginTop: 5
    }
  }, "Show them who you really are"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 12,
      fontWeight: 600,
      color: 'rgba(255,200,150,0.6)'
    }
  }, "Profile strength"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 12,
      fontWeight: 700,
      color: C.peach
    }
  }, "35% \uD83D\uDD25")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: 'rgba(255,200,150,0.1)',
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '35%',
      height: '100%',
      borderRadius: 3,
      background: 'linear-gradient(90deg, #E8627A, #F09070)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gridTemplateRows: 'repeat(3, 68px)',
      gap: 6,
      padding: '16px 24px 0',
      height: 222
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: '1 / 4',
      background: 'linear-gradient(160deg, #E8627A, #C04060)',
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      position: 'relative',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 48,
      opacity: 0.7
    }
  }, "\uD83D\uDC64"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: 700,
      color: C.rose
    }
  }, "+")), [1, 2, 3].map(j => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      background: 'rgba(255,200,150,0.07)',
      border: '1.5px dashed rgba(255,200,150,0.18)',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      color: 'rgba(255,200,150,0.3)',
      cursor: 'pointer'
    }
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 16,
      border: '1px solid rgba(255,200,150,0.1)',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 14,
      fontWeight: 400,
      color: 'rgba(255,200,150,0.25)',
      fontStyle: 'italic',
      lineHeight: 1.5
    }
  }, "Write something about yourself\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 11,
      color: 'rgba(255,200,150,0.2)'
    }
  }, "0/300")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 13,
      fontWeight: 700,
      color: 'rgba(255,200,150,0.5)',
      marginBottom: 10
    }
  }, "Your passions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, passionTags.map((tag, i) => {
    const active = activeTags.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => toggleTag(i),
      style: {
        padding: '7px 14px',
        borderRadius: 20,
        background: active ? 'linear-gradient(135deg, #E8627A, #F09070)' : 'rgba(255,200,150,0.07)',
        border: `1.5px solid ${active ? 'transparent' : 'rgba(255,200,150,0.15)'}`,
        fontFamily: jakartaSans,
        fontSize: 13,
        fontWeight: active ? 700 : 500,
        color: active ? '#fff' : 'rgba(255,200,150,0.5)',
        cursor: 'pointer',
        transition: 'all 0.2s'
      }
    }, tag);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 36px',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(PrimaryBtn, null, "Save profile")));
}

// ══════════════════════════════════════════════════════════
// SCREEN 5 — Swipe neutral
// ══════════════════════════════════════════════════════════
function SwipeCard({
  style = {},
  content = false
}) {
  if (!content) return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 24,
      overflow: 'hidden',
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 24,
      overflow: 'hidden',
      background: '#1a0a06',
      zIndex: 3,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/300?img=47",
    alt: "Priya",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '45%',
      background: 'linear-gradient(to bottom, transparent, rgba(18,6,3,0.90))',
      padding: '24px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jakartaSans,
      fontWeight: 900,
      fontSize: 26,
      color: '#fff',
      letterSpacing: '-0.5px'
    }
  }, "Priya, 26"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\uD83C\uDDEE\uD83C\uDDF3")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: 'rgba(255,255,255,0.16)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.25)',
      borderRadius: 20,
      padding: '4px 10px',
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\uD83C\uDF39"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 12,
      fontWeight: 600,
      color: '#fff'
    }
  }, "Serious relationship")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 12,
      fontWeight: 500,
      color: 'rgba(255,255,255,0.65)'
    }
  }, "\uD83D\uDCCD London \xB7 3 km"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 13,
      fontWeight: 400,
      fontStyle: 'italic',
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.4
    }
  }, "\"Architecture lover, weekend hiker, chai addict \u2615\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 2
    }
  }, ['🎵 Music', '✈️ Travel', '🏋️ Fitness'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'rgba(255,255,255,0.14)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 12,
      padding: '3px 9px',
      fontFamily: jakartaSans,
      fontSize: 11,
      fontWeight: 600,
      color: '#fff'
    }
  }, t)))));
}
function Screen5Swipe() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: C.screenDark,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '58px 20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontWeight: 900,
      fontSize: 28,
      color: C.rose,
      letterSpacing: '-2px'
    }
  }, "fliq"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['🔔', '⚙️'].map((icon, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,200,200,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      cursor: 'pointer'
    }
  }, icon)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      margin: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 24,
      background: 'rgba(245,176,138,0.18)',
      transform: 'scale(0.90) translateY(18px)',
      transformOrigin: 'bottom center',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 24,
      background: 'rgba(232,98,122,0.22)',
      transform: 'scale(0.95) translateY(9px)',
      transformOrigin: 'bottom center',
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement(SwipeCard, {
    content: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      paddingBottom: 38,
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.07)',
      border: '1.5px solid rgba(244,67,54,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(244,67,54,0.15)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F44336',
      fontSize: 26,
      fontWeight: 900
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.07)',
      border: '1.5px solid rgba(255,215,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: 20
    }
  }, "\u2B50"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #E8627A, #F09070)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(232,98,122,0.5)',
      cursor: 'pointer',
      fontSize: 26
    }
  }, "\u2764\uFE0F")));
}

// ══════════════════════════════════════════════════════════
// SCREEN 6 — Swipe liking
// ══════════════════════════════════════════════════════════
function Screen6Liking() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: C.screenDark,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '58px 20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontWeight: 900,
      fontSize: 28,
      color: C.rose,
      letterSpacing: '-2px'
    }
  }, "fliq"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['🔔', '⚙️'].map((icon, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,200,200,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18
    }
  }, icon)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      margin: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 24,
      background: 'rgba(245,176,138,0.18)',
      transform: 'scale(0.90) translateY(18px)',
      transformOrigin: 'bottom center',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 24,
      background: 'rgba(232,98,122,0.22)',
      transform: 'scale(0.97) translateY(4px)',
      transformOrigin: 'bottom center',
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 24,
      overflow: 'hidden',
      background: '#1a0a06',
      transform: 'translate(55px, -18px) rotate(10deg)',
      transformOrigin: 'bottom center',
      zIndex: 3,
      outline: '3px solid #E8627A',
      boxShadow: '0 8px 40px rgba(232,98,122,0.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 18,
      zIndex: 10,
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#E8627A,#F09070)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      boxShadow: '0 4px 14px rgba(232,98,122,0.55)'
    }
  }, "\u2764\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://i.pravatar.cc/300?img=47",
    alt: "Priya",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '40%',
      background: 'linear-gradient(to bottom, transparent, rgba(18,6,3,0.92))',
      padding: '20px 20px 18px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: jakartaSans,
      fontWeight: 900,
      fontSize: 26,
      color: '#fff',
      letterSpacing: '-0.5px'
    }
  }, "Priya, 26"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\uD83C\uDDEE\uD83C\uDDF3")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: jakartaSans,
      fontSize: 13,
      fontStyle: 'italic',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "\"Architecture lover, chai addict \u2615\"")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      paddingBottom: 38,
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.07)',
      border: '1.5px solid rgba(244,67,54,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(244,67,54,0.15)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F44336',
      fontSize: 26,
      fontWeight: 900
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.07)',
      border: '1.5px solid rgba(255,215,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: 20
    }
  }, "\u2B50"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#E8627A,#F09070)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(232,98,122,0.5)',
      cursor: 'pointer',
      fontSize: 26
    }
  }, "\u2764\uFE0F")));
}

// Export all
Object.assign(window, {
  FliqPhone,
  StatusBar,
  Screen1Splash,
  Screen2Intentions,
  Screen3Origins,
  Screen4Profile,
  Screen5Swipe,
  Screen6Liking
});