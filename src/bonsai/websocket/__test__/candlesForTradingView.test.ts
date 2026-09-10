import { describe, expect, it } from 'vitest';

import { getCandlesToPublish } from '../candlesForTradingView';

const candles = [
  { startedAt: '2026-09-23T10:00:00.000Z' },
  { startedAt: '2026-09-23T10:01:00.000Z' },
  { startedAt: '2026-09-23T10:02:00.000Z' },
];

describe('getCandlesToPublish', () => {
  it('bridges the REST to WebSocket gap with the latest snapshot candle', () => {
    expect(getCandlesToPublish(candles)).toEqual(candles.slice(-1));
  });

  it('publishes updates to the current candle and newer candles', () => {
    expect(getCandlesToPublish(candles, candles[1]!.startedAt)).toEqual(candles.slice(1));
  });
});
