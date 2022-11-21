
import { useNavigate, useParams } from "react-router-dom";

const ReserveDetail = () =>{
    const {id} = useParams();
    //const {data: reserve, isLoading, error} = useRecuperation('http://localhost:3000/reserves/'+id);
    const navigate = useNavigate();
    const HandleDelete = () => {
       fetch('http://localhost:3000/reserves/'+id, {
        method: 'DELETE'
       }).then( () =>{
        navigate('/Reserve'); 
       })
    }
return(
    <div className="reserve">
        {/* {isLoading && <div> En cour de traitement ....</div> }
        {error && <div style={ {'color': 'red'}}> {error}</div>}
        { reserve &&(
            <div className="reserve">
                <small className="reserve-date">{'Publier le: {reserve.date} par:'}</small>
                <h2 className="reserve-nom">{reserve.Nom}</h2>
                <h2 className="reserve-prenom">{reserve.Prenom}</h2>
                <h2 className="reserve-tel">{reserve.Tel}</h2>
                <h2 className="reserve-numplaq">{reserve.NumPlaq}</h2>
                <h2 className="reserve-cars">{reserve.cars}</h2>
                <button onClick={HandleDelete }>Supprimer</button>
                
             </div>   
        )
    } */}
    </div>
); 

}


export default ReserveDetail;