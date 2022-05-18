import React, { useEffect, useState } from "react";
import './CardList.css'

import Card from '../Card/Card'

export default function Main(props){

    

    return(
        <section className="card-list">
            <h2 className="card-list__title">{props.title}</h2>
            <div className="card-list__area">

                {
                    props.langs===null ? "No programming languages to show" : props.langs.map((e, i) =>{
                        return(<Card 
                                title={props.langs[i]['Intended use']} 
                                modalId={props.langs[i]['Language']}
                                uses={props.langs[i]['Imperative']}
                                isoo = {props.langs[i]['Object-oriented']}
                                isfunctional = {props.langs[i]['Functional']}
                                isprocedural = {props.langs[i]['Procedural']}
                                isgeneric = {props.langs[i]['Generic']}
                                isreflective = {props.langs[i]['Reflective']}
                                isevdriven = {props.langs[i]['Event-driven']}
                                other = {props.langs[i]['Other paradigm(s)']}
                                isstandardized = {props.langs[i]['Standardized?']}
                                key={props.keyChar+i}
                            />)
                    })
                }
            </div>
        </section>
    )
}