export const RIGHT = "RIGHT";
export function testRight() {
  return {
    type: RIGHT
  }
}

export const LEFT = "LEFT";
export function testLeft() {
  return {
    type: LEFT
  }
}

export const ENTER = "ENTER";
export function testEnter(number) {
  return {
    type: ENTER,
    number
  }
}

export const LEAVE = "LEAVE";
export function testLeave(number) {
  return {
    type: LEAVE,
    number
  }
}