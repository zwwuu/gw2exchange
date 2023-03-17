export interface IDaemon {
  readonly name: string;
  start: () => void;
}
