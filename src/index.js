import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const Person=({img,name,job,children})=>{
    const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return(
      <div className="person">
        <img src={url}/>
        <h4>Name:{name}</h4>
        <h3>Job : {job}</h3>
        {children}
      </div>
    )
}

const PeopleList=()=>{
    return(
      <section className="person-list">
        <Person img="1" name="Akkewach" job="Frontend Developer">
          <p>Skill : Html, CSS, Javascript, React</p>
        </Person>
        <Person img="20" name="Sompong" job="Backend Developer">
          <p>Skill : Database, PHP</p>
        </Person>
        <Person img="30" name="Somchai" job="Android Developer">
          <p>Skill : Java</p>
        </Person>
        <Person img="40" name="Suchad" job="Backend Developer">
          <p>Skill : Database, PHP</p>
        </Person>
        <Person img="50" name="Chadchakaj" job="Android Developer">
          <p>Skill : Java</p>
        </Person>
        <Person img="60" name="Jetsada" job="Frontend Developer">
          <p>Skill : Skill : Html, CSS, Javascript, React</p>
        </Person>
        <Person img="70" name="Wisit" job="Android Developer">
          <p>Skill : Java</p>
        </Person>
        <Person img="80" name="Anirut" job="Backend Developer">
          <p>Skill : Database, PHP</p>
        </Person>
        <Person img="90" name="Surak" job="Frontend Developer">
          <p>Skill : Skill : Html, CSS, Javascript, React</p>
        </Person>
      </section>
    )
}

ReactDOM.render(<PeopleList/>,document.getElementById('root'));


