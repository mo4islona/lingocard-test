import { NotFoundException } from '@nestjs/common';

export function castNumber(id: string, ex = NotFoundException) {
  const num = parseInt(id, 10);
  if (isNaN(num)) {
    throw new ex();
  }
  return num;
}
