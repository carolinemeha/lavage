import api from "./Index";
import { Reservation } from "../data/interface";

//Cette fonction sert a envoyer une nouvelle reservation au serveur
export const ajoutReservation = async (reservation:Reservation) => {
    //Poster la nouvelle reservation:parametres{   
       // lien ou route de postage au serveur, 
       //les donnees la reservation a envoyer. reservation est de type reservation
    //}
    await api.post('/reservations', reservation).then ( (response) =>{
        // en cas de succes retourner la reponse du serveur
        return response;
    }).catch ( (error) => {
        // en cas d'echec imprimer l'erreur et retourner 'erreur
        console.log(error);
        return error;
    })

   
}