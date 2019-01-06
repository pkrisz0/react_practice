export const BUY_ACORN = 'BUY_ACORN';
export const EAT_ACORN = 'EAT_ACORN';

export function buyAcorn() {
  return { type: BUY_ACORN }
}

export function eatAcorn() {
  return { type: EAT_ACORN }
}