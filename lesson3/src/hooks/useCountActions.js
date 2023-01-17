import * as actions from "../action/count-action";
import { bindActionCreators } from "redux";
import { AppDispatch } from "../store";
export const countActions = () => bindActionCreators(actions, AppDispatch);
