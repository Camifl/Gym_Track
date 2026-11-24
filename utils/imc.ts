export function calculateBmi(weightKg: number, heightM: number): number {
  // El peso se expresa en kilogramos y la estatura en metros.
  return weightKg / (heightM * heightM);
}

export function classifyBmi(bmi: number): string {
  if (bmi < 18.5) return 'Bajo peso';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Sobrepeso';
  if (bmi < 35) return 'Obesidad grado I';
  if (bmi < 40) return 'Obesidad grado II';
  return 'Obesidad grado III';
}
