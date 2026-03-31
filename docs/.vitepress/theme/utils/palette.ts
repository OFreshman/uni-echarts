import { colord } from "colord";

export function createPalette(value: string) {
  const color = colord(value);

  const { h, s, l } = color.toHsl();

  return {
    light: {
      color1: color.toHex(),
      color2: colord({ h: h - 1.22, s: s - 9.6, l: l + 9.21 }).toHex(),
      color3: colord({ h: h - 2.37, s: s - 12.18, l: l + 13.13 }).toHex(),
      soft: colord({ h: h + 6.71, s: s + 17.18, l: l + 10.98 }).alpha(0.14).toRgbString()
    },
    dark: {
      color1: colord({ h: h - 2.42, s: s - 1.79, l: l + 25.49 }).toHex(),
      color2: colord({ h: h - 2.37, s: s - 12.18, l: l + 13.13 }).toHex(),
      color3: colord({ h: h - 1.76, s: s - 14.29, l: l + 5.49 }).toHex(),
      soft: colord({ h: h + 6.71, s: s + 17.18, l: l + 10.98 }).alpha(0.16).toRgbString()
    }
  };
}