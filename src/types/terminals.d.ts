export interface Terminal {
  id: number;
  address: string;
  coords: [number, number];
  statistic: {
    dayViews: number,
    monthViews: number
  },
  cluster: number[]
}

export interface TerminalState {
  terminals: Terminal[]
}
