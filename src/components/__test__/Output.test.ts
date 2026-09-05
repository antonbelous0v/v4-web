import { describe, expect, it } from 'vitest';

import { OutputType, ShowSign, formatNumberOutput } from '../Output';

const localeOptions = {
  decimalSeparator: '.',
  groupSeparator: ',',
  selectedLocale: 'en-US',
};

describe('formatNumberOutput', () => {
  it('formats each numeric output without changing signs', () => {
    expect(formatNumberOutput(-1_234.5, OutputType.Fiat, localeOptions)).toBe('−$1,234.50');
    expect(
      formatNumberOutput(1_234.5, OutputType.Number, {
        ...localeOptions,
        fractionDigits: 1,
        showSign: ShowSign.Both,
      })
    ).toBe('+1,234.5');
    expect(formatNumberOutput(1_234, OutputType.CompactNumber, localeOptions)).toBe('1.23K');
  });
});
