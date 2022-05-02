import React, {useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary(){
    const [keyword, setKeyword] = useState('');

    function handleAPI(response){
        console.log(response);
    }
    function search(event){
        event.preventDefault();
        alert(keyword);
        let APIurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        axios.get(APIurl).then(handleAPI);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }

    
    return(<div className='Dictionary'>
        <form onSubmit={search}>
            <input type='search' autoFocus={true} onChange={handleKeywordChange}/>
            
        </form>
    </div>)
}