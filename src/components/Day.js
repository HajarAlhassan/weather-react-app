
export default function Day(props) {
         //////////////***********handle the change of the clicked day card **********//////////////////
        const clicked = () => {
                props.clickHandler(props.city, props.id)
        }
        return (
                <div className="card" onClick={clicked} >
                        <img src={props.src} className="card-img-top  border rounded" style={{ width: "130px" }} />
                        <div className="card-body" >
                                <h6 className="card-title" >{props.day}</h6>
                                <h6 className="card-text" >Low: {props.lTemp} {props.scale}</h6>
                                <h6 className="card-text " >Height: {props.hTemp} {props.scale}</h6>
                        </div>
                </div>






        )

}

