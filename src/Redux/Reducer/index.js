import { auth } from "../../Firebase/firebase";
import { SET_LODING, SET_USER} from "../Actions/types";

export function Reducer(state, action) {
  switch (action.type) {
    case SET_LODING: {
      return {
        loding: action.stateLoding,
      };
    }
    case SET_USER: {
      const new_state = { ...state };
      new_state.loding = !action.user ? true : action.user.emailVerified ? false : true
      const User = !action.user ? null : action.user.emailVerified ? action.user : alert('تأكد من زيارة بريدك الإلكتروني لتفعيل حسابك')
      new_state.loding = false
      new_state.user = User
      return new_state;
    }
    default:
      return state;
  }
}
