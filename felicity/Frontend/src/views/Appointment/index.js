import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';
import { AppointmentHolder } from "../../Components/Appointment";
import Axios from "axios";
import UserRedirect from "../UserRedirect";


function Appointment() {

  return (

    <Mostouter>
      <UserRedirect isRole={true}/>

    <Cat>
        <Header isDoctor={false}/>
    </Cat>

    <Directory>
        <Path directory="Appointment"/>
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
      <AppointmentHolder />
    </Video>



    </Mostouter>


  );
}

export default Appointment;