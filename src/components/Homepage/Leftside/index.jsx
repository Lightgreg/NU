/* eslint-disable no-sequences */
import { useEffect, useState } from "react";
import Rightsquare from "../Rightside/Rightsquare";
import { FaTrash } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';
import "./style.css"

function Leftside() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('')
  const [fillist, setFillist] = useState('')
  const [listx, setListx] = useState([])

  const newList = listx.filter((e) => fillist === '' ? true : e.type === fillist)
  
  const newValue = newList.reduce((init, end) => init + end.value, 0)
  console.log(newValue) 


  const list = (e) => {
    e.preventDefault();
    if (description === '' || value === '' || type === '') {
      return toast('Todos os campos são obrigatorios')
    } else {
      const data1 = {
        description: description,
        value: Number(value),
        type: type
      }
      const data2 = {
        description: description,
        value: -value,
        type: type
      }
      if (type === 'entrada') {
        setListx([...listx, data1]);
      } else {
        setListx([...listx, data2]);
      }
      console.log(listx) 
    };
  }

  function remove(item) {
    const itemToRemove = listx.filter((x) => x !== item);
    setListx(itemToRemove)
   }

  return (
    <>
      <section >
        <form className="left" onSubmit={list}>
          <div className="left-top">
            <p>Descrição</p>
            <input onChange={(e) => setDescription(e.target.value)} className="left-description" type="text" placeholder="Digite aqui sua descrição" value={description} />
            <span className="left-ex">Ex: Compras diversas</span>
          </div>
          <div className="left-center">
            <div>
              <p className="left-little-text">Valor</p>
              <div className="left-square-n">
                <input onChange={(e) => setValue(e.target.value)} className="left-n" type="number" placeholder="1" value={value} />
                <p className="left-little-text">R$</p>
              </div>
            </div>
            <div className="left-square-v">
              <span className="left-little-text">Tipo de valor</span>
              <select onChange={(e) => setType(e.target.value)} className="left-v" value={type}>
                <option></option>
                <option value="entrada">Entrada</option>
                <option value="despesa">Despesa</option>
              </select>
            </div>
          </div>
          <Toaster />
          <button type="submit" className="insert-value">Inserir valor</button>
        </form>
        <div className="left-foot">
          <div className="result">
            <h3>Valor total:</h3>
            <p>$ {newValue}</p>
          </div>
          <span>O valor se refere ao saldo</span>
        </div>
      </section>
      <section className="right">
        <div className="right-top">
          <p>Resumo financeiro</p>
          <div className="btn-sec">
            <button className="btn" onClick={() => setFillist('')}>Todos</button>
            <button className="btn" onClick={() => setFillist('entrada')}>Entradas</button>
            <button className="btn" onClick={() => setFillist('despesa')}>Despesas</button>
          </div>
        </div>
        {newList.length ? (
          <ul>
            {newList.map((e, index) => {
              const type = e.type
              return (<li key={index} className={`${type === 'entrada' ? 'enter' : 'exit'}`}>
                <div className='description-square'>
                  <span className="e-description" >{e.description}</span>
                  <span className="e-type" >{e.type}</span>
                </div>
                <div className="value-square">
                  <p>R$ {e.value}</p>
                  <FaTrash className="trash" onClick={() => remove(e)} />
                </div>
              </li>)
            })}
          </ul>
        ) : (
          <>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <main>
              <Rightsquare />
              <Rightsquare />
              <Rightsquare />
            </main>
          </>

        )}
      </section>
    </>
  )
}

export default Leftside;