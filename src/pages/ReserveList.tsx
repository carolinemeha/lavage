
const ReserveList = ({reserves}:any) => {
    

 return(
    <div className="reservelist">

        {
            reserves.map( (reserve:any) => (
                <div className="reserve" key={reserve.id}>
                    <small className="reserve-date">{'Publier le: {reserve.date} par:'}</small>
                    <p className="reserve-nom">{reserve.nom}</p>
                    <p className="reserve-prenom">{reserve.prenom}</p>
                    <h2 className="reserve-tel">{reserve.tel}</h2>
                    <h2 className="reserve-numplaq">{reserve.numplaq}</h2>
                    <h2 className="reserve-cars">{reserve.typengin}</h2>

                </div>
            ))
        }

    </div>
 )
}

export default ReserveList