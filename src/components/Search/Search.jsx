import React from 'react';
import cn from "./style.module.css"

const Search = ({value, setValue, setList}) => {
    return (
      <div className={cn.wrapper}>
          <h1 style={{color:'white'}}>ToDo List</h1>
          <div className={cn.flex}>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" className={cn.input} placeholder='Enter task'/>
            <button onClick={setList} className={cn.button}>ADD</button>
          </div>
      </div>
    );
}

export default Search;