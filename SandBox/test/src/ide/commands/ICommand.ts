import { CommandTypes } from "./CommandTypes";

export interface ICommand {
    type: CommandTypes
    payload: any;
    keyBind: {win: string; mac: string;}
}