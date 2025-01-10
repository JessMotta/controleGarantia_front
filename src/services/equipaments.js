import axios from 'axios';

//const apiOnline ='https://controle-garantia-c3160bdc917a.herokuapp.com/equipamentos';
const apiLocal = 'http://localhost:8080/equipamentos';

const equipmentsAPI = axios.create({baseURL: apiLocal});

export async function getEquipments() {
   const response = await equipmentsAPI.get('/')
    return response.data;
}

export async function createEquipment(createdEquipment){
    await equipmentsAPI.post('/', createdEquipment);
}

export async function getEquipmentById(id) {
    const response = await equipmentsAPI.get(`/${id}`);
    //console.log(response.data);
     return response.data;
 }

export async function updateEquipment(id, updatedEquipment){
const response = await equipmentsAPI.put(`/${id}`, updatedEquipment);
    console.log(response.data);

return response.data;
}

export async function deleteEquipment(id){
    const response = await equipmentsAPI.delete(`/${id}`);
    console.log(response.data);

    return response.data;
}