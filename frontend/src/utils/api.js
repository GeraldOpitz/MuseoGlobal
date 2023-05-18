import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return api.post('/upload', formData);
};

export const getAllObras = () => {
    return api.get('/obras');
  };
  
  export const getObraById = (id) => {
    return api.get(`/obras/${id}`);
  };
  
  export const saveObra = (obra) => {
    return api.post('/obras', obra);
  };
  
  export const updateObra = (id, obra) => {
    return api.put(`/obras/${id}`, obra);
  };
  
  export const deleteObra = (id) => {
    return api.delete(`/obras/${id}`);
  };