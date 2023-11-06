// Type assertion:
let anything: any;
anything = "naim";
anything = 23;
// (anything as string).concat
// (anything as number).toFixed

const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `this is converted value is: ${convertedValue}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

const result = kgToGm(200) as number;
const result2 = kgToGm("49") as string;
