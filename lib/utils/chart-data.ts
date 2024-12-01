export function generateChartData(days: number = 30, seed: number = 1) {
  const data = [];
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Normalize time to midnight for consistency
  
  // Deterministic random number generator
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Use seeded random for consistent values
    const randomValue = seededRandom(seed + i);
    data.push({
      timestamp: date.toISOString(),
      value: 50 + randomValue * 50 + Math.sin(i / 5) * 20,
    });
  }
  
  return data;
}

export function calculateChange(data: Array<{ value: number }>) {
  if (data.length < 2) return 0;
  const firstValue = data[0].value;
  const lastValue = data[data.length - 1].value;
  return ((lastValue - firstValue) / firstValue) * 100;
}