import type { Validator } from '@dydxprotocol/v4-proto/src/codegen/cosmos/staking/v1beta1/staking';
import { describe, expect, it } from 'vitest';

import { getValidatorWithFewestTokens } from '../useStakingValidator';

const validator = (operatorAddress: string, tokens: string) =>
  ({ operatorAddress, tokens }) as Validator;

describe('getValidatorWithFewestTokens', () => {
  it('returns undefined when no validators are available', () => {
    expect(getValidatorWithFewestTokens([])).toBeUndefined();
  });

  it('selects the validator with the fewest tokens', () => {
    const validators = [validator('first', '20'), validator('second', '10')];

    expect(getValidatorWithFewestTokens(validators)).toBe(validators[1]);
  });
});
