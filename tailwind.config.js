/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  important: false,
  separator: ":",
  darkMode: ['media'],
  theme: {
    screens: {
      phone: { max: "640px" },
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "#ffffff",
      black: "#000000",

      dark: {
        default: "#050810",
        1: "#0D1515",
        2: "#1A1A26",
        3: "#2F2547",
        4: "#3A2A58",
      },

      gray: {
        default: "#f8f9fa",
        1: "#f1f3f5",
        2: "#e9ecef",
        3: "#dee2e6",
        4: "#ced4da",
      },

      primary: {
        default: "#7e53ff",
        1: "#7E52FD",
        2: "#744EE2",
        3: "#5F40A8",
        4: "#543A8D",
      },

      secondary: {
        default: "#4967ff",
        1: "#4867FF",
        2: "#495DE4",
        3: "#4B49AA",
        4: "#4C3F8F",
      },

      tertiary: {
        default: "#c775ff",
        1: "#C775FE",
        2: "#A261D5",
        3: "#8955B9",
        4: "#6F489B",
      },

      danger: {
        default: "#ff6b6b",
        1: "#fa5252",
        2: "#f03e3e",
        3: "#C53030",
        4: "#A72424",
      },
    },

    container: {
      padding: "1rem",
    },

     spacing: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      30: "7.5rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
      96: "24rem",
      128: "32rem",
    },

    backgroundColor: (theme) => theme("colors"),

    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },

    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },

    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },

    borderWidth: {
      0: "0",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },

    borderRadius: {
      default: "0.25rem",
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      xl: "2rem",
      circle: "9999px",
    },

    borderColor: (theme) => ({
      ...theme("colors"),
    }),

    boxShadow: {
      none: "none",
      xs:
        "0 calc(0.0625rem) calc(0.1875rem) #0000000d,0 calc(0.0625rem) calc(0.125rem) #0000001a",
      sm: "0 calc(0.0625rem) calc(0.1875rem) #0000000d,#0000000d 0 calc(0.625rem) calc(0.9375rem) calc(-0.3125rem),#0000000a 0 calc(0.4375rem) calc(0.4375rem) calc(-0.3125rem)",
      md: "0 calc(0.0625rem) calc(0.1875rem) #0000000d,#0000000d 0 calc(1.25rem) calc(1.5625rem) calc(-0.3125rem),#0000000a 0 calc(0.625rem) calc(0.625rem) calc(-0.3125rem)",
      lg: "0 calc(0.0625rem) calc(0.1875rem) #0000000d,#0000000d 0 calc(1.75rem) calc(1.4375rem) calc(-0.4375rem),#0000000a 0 calc(0.75rem) calc(0.75rem) calc(-0.4375rem)",
      xl: "0 calc(0.0625rem) calc(0.1875rem) #0000000d,#0000000d 0 calc(2.25rem) calc(1.75rem) calc(-0.4375rem),#0000000a 0 calc(1.0625rem) calc(1.0625rem) calc(-0.4375rem)",
    },

    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },

    fill: (theme) => theme("colors"),

    flex: {
      none: "none",
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
    },

    flexGrow: {
      default: "1",
      0: "0",
    },

    flexShrink: {
      default: "1",
      0: "0",
    },

    fontFamily: {
      default: ["-apple-system", "Inter", "sans-serif"],
      serif: ["ui-monospace", "Inter", 'sans-serif'],
      headings: ["-apple-system", 'Inter', 'sans-serif'],
    },

    fontSize: (theme) => ({
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.5rem",
      xl: "1.75rem",
      ...theme("spacing"),
    }),

    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),

    inset: {
      0: "0",
      auto: "auto",
    },

    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },

    lineHeight: {
      none: "1",
      xs: "1.4",
      sm: "1.45",
      md: "1.55",
      lg: "1.6",
      xl: "1.65",
    },

    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },

    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),

    maxHeight: {
      full: "100%",
      screen: "100vh",
    },

    maxWidth: {
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
    },

    minHeight: {
      0: "0",
      full: "100%",
      screen: "100vh",
    },

    minWidth: {
      0: "0",
      full: "100%",
      screen: "100vw",
    },

    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },

    opacity: {
      0: "0.00",
      10: "0.10",
      20: "0.20",
      25: "0.25",
      50: "0.50",
      60: "0.60",
      75: "0.75",
      80: "0.80",
      100: "1.00",
    },

    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },

    padding: (theme) => theme("spacing"),

    stroke: {
      current: "currentColor",
    },

    textColor: (theme) => theme("colors"),

    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
    }),

    zIndex: {
      auto: "auto",
      app: 100,
      modal: 200,
      popover: 300,
      overlay: 400,
      max: 9999,
    },

    extend: {
      keyframes: {
        typing: {
          from: {
            width: 0,
          },
          to: {
            width: "100%",
          },
        },
        zerotohundred: {
          from: {
            width: 0,
          },
          to: {
            width: "100%",
          },
        },
        hundredtozero: {
          from: {
            width: "100%",
          },
          to: {
            width: 0,
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        appearfromtop: {
          from: {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "anim-typing": "typing 0.75s steps(40, end)",
        "anim-spin": "spin 0.75s infinite",
        "anim-fade": "fade 0.2s ease-in-out",
        "anim-toastempty": "zerotohundred 5s ease-in-out",
        "anim-toastcomplete": "hundredtozero 5s ease-in-out",
        "anim-toastappear": "fade 0.5s ease-in-out",
      },
    },
  },

  variants: {
    extend: {},
  },

  corePlugins: {},

  plugins: [require("tailwindcss-animation-delay")],
};
