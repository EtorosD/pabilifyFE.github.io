import { loginFailure, loginStart, loginSucess } from "./userRedux."
import { registerStart, registerSucess, registerFailure } from "./register";
import { publicRequest } from "../requestMethods"

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSucess(res.data));
    }catch(err){
        dispatch(loginFailure(err))
    }
};

export const register = async (dispatch,user) => {
    dispatch(registerStart());
    try{
        const res = await publicRequest.post("/auth/register",user);
        dispatch(registerSucess(res.data));
    }catch(err){
        dispatch(registerFailure(err))
    }
};

