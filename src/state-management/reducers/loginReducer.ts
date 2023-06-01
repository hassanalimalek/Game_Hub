interface IAction {
  type: string;
  payload?: string;
}

export const loginReducer = (state: any, action: IAction) => {
  console.log(' action --->', action);
  switch (action?.type) {
    case 'LOGIN':
      return { ...state, status: true };
    case 'LOGOUT':
      return { ...state, status: false };
  }
};
