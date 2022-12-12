import { useState } from "react";

export const Usetodo = (value,list,setList,setValue) => {
    const createToDo = () => {
        const obj = {
            id: Date.now(),
            title: value,
            finish: false,
        }
        setList([...list, obj]);
        setValue('');
        
    }
    const changeFinish = (el) => {
        const copy = [...list];
        copy.find((elem) => {
            if (elem.id === el.id) {
                el.finish = !el.finish;
            }
        })
        setList(copy);
    }
    const removeToDo = (el) => {
        const newList = list.filter((f) => f.id !== el.id);
        setList(newList);
    }
    return {createToDo, changeFinish, removeToDo};
}