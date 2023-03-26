import React, { useEffect, useState } from "react"
import Header from '../../Components/Header/Header';
import { Mostouter, Directory, User, Cat, Video } from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import DoctorList from "./DoctorList";
import UserRedirect from "../../Components/UserRedirect";
import Axios from "axios";
import API_URL from "../../../API/server-ip";


function DoctorListPage() {
  const [doctorList, setDoctorList] = useState([])

  useEffect(() => {
    Axios.get(`${API_URL}/available-doctor`)
      .then((response) => {
        console.log(response.data)
        setDoctorList(response.data);
      })
  }, [])
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  return (

    <Mostouter>
      {!jwt && <UserRedirect isRole={true} />}

      <Cat>
        <Header isDoctor={false} />
      </Cat>
      <Directory>
        <Path directory="Doctor List" />
      </Directory>

      <User>
        <Login />
      </User>
      
      <Video>
        <DoctorList doctorList={doctorList} />
      </Video>

    </Mostouter>


  );
}

export default DoctorListPage;