
declare type AppState = Object;

declare type Action = Object;

declare type AppReducer = (state: AppState, action: Action) => AppState;
