export type Action =  {type: "ADD_TOKEN"; payload: string};

export const addtoken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
});