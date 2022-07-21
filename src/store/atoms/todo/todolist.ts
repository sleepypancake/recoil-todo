import { atom } from "recoil";
import { TodoContent } from "../../../types";

export const todoContentState = atom<TodoContent[]>({
    key: "TODO_LIST",
    default: [],
})