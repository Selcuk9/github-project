import { func } from "prop-types"
import React, { useEffect, useState } from "react"
import Cards from "./Cards";
const baseUrl = "https://api.github.com";
const path ="/search/repositories?q="
 const styles = {
     btn:{
        //  width: '10rem',
        height: '3rem',
        //  borderRadius: '1rem',
        //  display: 'block'
        borderRadius: '1rem',
        display: 'block'
     },
     input: {
        display: 'block'
     },
     card: {
        backgroundColor: '#ccc'
     },
     comment: {
         width: '100%',
         height: '3rem'
     }
 }
 export default function Searcher() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
    const [text, setText] = useState()
  
    function GetSearchText(text) {
      try {
        fetch(baseUrl + path + text)
          .then(res => res.json())
          .then(
            result => {
              setIsLoaded(true)
              setItems(result.items)
            },
            error => {
              setIsLoaded(true)
              setError(error)
            }
          )
      } catch (error) {
        console.log(error)
      }
    }
    const repositories = items;

    return (
      <div className='row'>
        <input
          style={styles.input}
          className='form-control col-lg-4'
          placeholder='Поиск репозитории'
          value={text}
          onChange={event => setText(event.currentTarget.value)}
        ></input>
        <button className='btn-lorge col-lg-8' style={styles.btn} onClick={() => GetSearchText(text)}>
          Найти
        </button>
        <div className="cards">
            {repositories.count == 0 ? <p>Результат: 0</p> : <div></div> }
            {error ? <p>error</p> : repositories.map(item => (
                <div style={styles.card}  key={item.id}>
                    <a href={item.html_url}>
                    <p>Имя проекта: </p>    
                    <p>{item.name}</p>
                    <p>Автор:</p>    
                    <p>{item.owner.login}</p>
                    <p>Количество звезд: </p>    
                    <p>{item.stargazers_count}</p>
                    <p>Количество просмотров:</p>
                    <p>{item.watchers_count}</p>
                    </a>
                    <textarea style={styles.comment} placeholder="Коментарии">

                    </textarea>
                    <button type="submit">Сохранить</button>
                </div>
              
            ))}
        </div>

      </div>
    )
  }

