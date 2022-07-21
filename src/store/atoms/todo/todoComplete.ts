import { atomFamily } from "recoil";
import { TODO_COMPLETE } from "../../keys";

export const todoCompleteState = atomFamily<boolean, string>({
    key: TODO_COMPLETE,
    default: false,
})