// @flow
import type { DragMovement, DragImpact, Position } from '../types';

const origin: Position = { x: 0, y: 0 };

const noMovement: DragMovement = {
  draggables: [],
  amount: origin,
  isMovingForward: false,
};

const noImpact: DragImpact = {
  movement: noMovement,
  direction: null,
  destination: null,
};

export default noImpact;
