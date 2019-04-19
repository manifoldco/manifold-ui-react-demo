import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    black: "#000",
    black0: "rgba(0, 0, 0, 0)",
    black7: "rgba(0, 0, 0, 0.07)",
    black10: "rgba(0, 0, 0, 0.1)",
    black20: "rgba(0, 0, 0, 0.2)",
    black30: "rgba(0, 0, 0, 0.3)",
    black40: "rgba(0, 0, 0, 0.4)",
    black50: "rgba(0, 0, 0, 0.5)",
    black60: "rgba(0, 0, 0, 0.6)",
    black75: "rgba(0, 0, 0, 0.75)",
    black80: "rgba(0, 0, 0, 0.8)",
    black90: "rgba(0, 0, 0, 0.9)",
    blue: "#1E50DA",
    blueDark: "#1A4898",
    blueLight: "#4A90E2",
    bluePale: "#DDE9FE",
    bluePaler: "#C3D6F7",
    green: "#31BAA2",
    greenDark: "#008A54",
    greenPale: "#A4EACF",
    magenta: "#B45877",
    offWhite: "#F7F7F8",
    orange: "#FE714B",
    orangeDark: "#E46407",
    orangePale: "#FFCAA5",
    purple: "#7748D1",
    red: "#D50F49",
    redPale: "#FFC4D2",
    teal: "#0FB5D0",
    white: "#FFF",
    yellow: "#FFDE52",
    yellowPale: "#FFF2B9"
  },
  easing: {
    // This is the most common easing curve.
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  },
  font: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
    base: "16px",

    // Manifold Type Scale by ntassone
    // Increases or decreases 2.25× every 6th step. Infinitely nestable!
    up12: "5.0625em",
    up11: "4.4225011027em",
    up10: "3.8634105686em",
    up9: "3.375em",
    up8: "2.9483340685em",
    up7: "2.5756070457em",
    up6: "2.25em",
    up5: "1.9655560457em",
    up4: "1.7170713638em",
    up3: "1.5em",
    up2: "1.3103706971em",
    up1: "1.1447142426em",
    up0: "1em",
    down0: "1em",
    down1: "0.8735804647em",
    down2: "0.7631428284em",
    down3: "0.6666666667em",
    down4: "0.5823869765em",
    down5: "0.5087618856em",
    down6: "0.4444444444em",
    down7: "0.3882579843em",
    down8: "0.3391745904em",
    down9: "0.2962962963em",
    down10: "0.2588386562em",
    down11: "0.2261163936em"
  }
};

export default theme;
