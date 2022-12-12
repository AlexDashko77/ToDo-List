import cn from "./style.module.css"
import React from 'react';
import {BsTrash} from 'react-icons/bs'

const List = ({list, setFinish, removeToDo}) => {
    return (
            <ul className={cn.wrapper}>
                {list.map((el) => (
                    <li className={el.finish ? cn.active : cn.li} key={el.id}>
                       <div className={cn.flex}>
                          <div onClick={() => setFinish(el)} className={el.finish ? cn.circleFinish : cn.circle}></div>
                         <div className={cn.between}>
                             <span className={cn.text}>{el.title}</span>
                            <BsTrash onClick={() => removeToDo(el)} className={cn.white}/>
                         </div>
                       </div>
                        </li>
                ))}
            </ul>
    );
}

export default List;