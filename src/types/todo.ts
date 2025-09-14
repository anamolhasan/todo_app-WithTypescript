// import type React from "react";

export interface Todo {
    id:string;
    text:string;
    completed:boolean;
}

export type TodoFormEvent = React.FormEvent<HTMLFormElement>