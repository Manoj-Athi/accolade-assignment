import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000/patients",
});

export const fetchAllDetails = async () => {
    const { data } = await api.get("/read");
    return data;
} 

export const createPatientDetails = async (values) => {
    const { data } = await api.post("/create", values);
    return data;
}

export const updatePatientDetails = async (_id, values) => {
    const { data } = await api.put(`/update/${_id}`, { values });
    return data;
} 

export const deletePatientDetails = async (_id) => {
    const { data } = await api.delete(`/delete/${_id}`);
    return data;
}