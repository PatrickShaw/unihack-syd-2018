function padZeroes(value, digitCount) {
  while (value.length < digitCount) {
    value = `0${value}`;
  }
  return value;
}

export function severityToColor(severity) {
  const redness = Math.max(0, Math.min(1, severity));
  // 0-255, how white/black the grey tone will be.
  const maxRed = 222;
  const baseGreyTone = 60;
  const greyRange = 40;
  const redOffset = 20;
  const redRange = maxRed - (baseGreyTone + redOffset);
  const blue = Math.round(baseGreyTone);
  const red = Math.round(redOffset + baseGreyTone + redRange * Math.sqrt(redness));
  const green = Math.round(baseGreyTone+ redRange * (1 - Math.sqrt(redness)));
  const blueHex = padZeroes(blue.toString(16), 2);
  const redHex = padZeroes(red.toString(16), 2);
  const greenHex = padZeroes(green.toString(16), 2);
  const colorHex = `${redHex}${greenHex}${blueHex}`;
  return colorHex;
}
