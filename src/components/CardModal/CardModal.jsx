import React from "react";
import './CardModal.css'

export default function CardModal(props) {

    const usesArr = props.uses.length > 1 ? props.uses.split(',') : props.uses

    return (

        <div className="modal-dialog card__modal" role="document">
            <div className="modal-content">
                <div className="modal-header card__modal-header">
                    <h5 className="card__modal-title" id="exampleModalLabel">{props.title}</h5>
                    <span>Image field</span>
                </div>
                <div className="modal-body card__modal-body">
                    <p>Uses</p>
                    <ul>
                        {
                            Array.isArray(usesArr) ?
                                usesArr.map((e, i) => <li key={i}>{e}</li>)
                            : 
                                <li>{usesArr}</li>
                        }
                    </ul>

                    <p>Main characteristics</p>
                    <ul>
                        {props.isoo !=="" ? <li>Object Oriented</li> : null}
                        {props.isfunctional !=="" ? <li>Functional</li> : null}
                        {props.isprocedural !=="" ? <li>Procedural</li> : null}
                        {props.isgeneric !=="" ? <li>Generic</li> : null}
                        {props.isreflective !=="" ? <li>Reflective</li> : null}
                        {props.isevdriven !=="" ? <li>Event-driven</li> : null}
                        {props.other !=="" ? <li>Has other paradigms</li> : null}
                        {props.isstandardized !=="" ? <li>Standardized: {props.isstandardized}</li> : null}

                    </ul>
                </div>
            </div>
        </div>

    )
}