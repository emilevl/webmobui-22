export function round(n, decimalPlaces =2) {
    const power = 10 ** decimalPlaces;
    return Math.round(n * power ) / power;
}
