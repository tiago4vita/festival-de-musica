/**
 * Core lines (English) + multilingual variants for the “Expression” background layer.
 * Motion is decorative; meaning is secondary to texture (see project brief).
 */

export type ExpressionLocale =
  | 'en'
  | 'ja'
  | 'ko'
  | 'ar'
  | 'es'
  | 'de'
  | 'fr'
  | 'pt'

/** line index 0..2 → locale → text */
export const expressionByLine: Record<
  number,
  Partial<Record<ExpressionLocale, string>>
> = {
  0: {
    en: 'The signal cuts through the noise.',
    ja: '信号はノイズを切り裂く。',
    ko: '신호는 노이즈를 가른다.',
    ar: 'الإشارة تقطع الضجيج.',
    es: 'La señal atraviesa el ruido.',
    de: 'Das Signal schneidet durch das Rauschen.',
    fr: 'Le signal traverse le bruit.',
    pt: 'O sinal corta o ruído.',
  },
  1: {
    en: 'Your face is the last interface.',
    ja: '顔は最後のインターフェースだ。',
    ko: '당신의 얼굴이 마지막 인터페이스다.',
    ar: 'وجهك هو الواجهة الأخيرة.',
    es: 'Tu rostro es la última interfaz.',
    de: 'Dein Gesicht ist die letzte Oberfläche.',
    fr: 'Ton visage est la dernière interface.',
    pt: 'Seu rosto é a última interface.',
  },
  2: {
    en: 'We meet where the light bends.',
    ja: '光が曲がる場所で出会う。',
    ko: '빛이 굽어지는 곳에서 만난다.',
    ar: 'نلتقي حيث ينحني الضوء.',
    es: 'Nos encontramos donde la luz se dobla.',
    de: 'Wir treffen uns, wo sich das Licht biegt.',
    fr: 'On se retrouve là où la lumière plie.',
    pt: 'Encontramo-nos onde a luz curva.',
  },
}

const locales: ExpressionLocale[] = [
  'en',
  'ja',
  'ko',
  'ar',
  'es',
  'de',
  'fr',
  'pt',
]

/** Flattened streams for marquee bands (each string repeats). */
export function buildExpressionStream(lineIndex: number): string {
  const parts = locales
    .map((loc) => expressionByLine[lineIndex]?.[loc])
    .filter(Boolean) as string[]
  return parts.join('     ·     ')
}
