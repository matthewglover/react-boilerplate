
declare type IncAction = {
  type: 'INC'
}

declare type DecAction = {
  type: 'DEC'
}

declare type Action =
  IncAction | DecAction;
