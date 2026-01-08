import { http, httpAsset, httpDownload, urlBase } from './http';

export const indexCategories = () => {
    return http().get(`${urlBase}/categories`);
};

export const storeCategory = data => {
    return http().post(`${urlBase}/categories`, data);
};

export const showCategory = id => {
    return http().get(`${urlBase}/categories/${id}`);
};

export const updateCategory = (id, data) => {
    return http().put(`${urlBase}/categories/${id}`, data);
};

export const deactivateCategory = id => {
    return http().delete(`${urlBase}/categories/${id}`);
};

export const activateCategory = id => {
    return http().post(`${urlBase}/categories/${id}/activate`);
};

export const categoriesActives = () => {
    return http().get(`${urlBase}/category/actives`);
};

export const categoriesActivesDriver = () => {
    return http().get(`${urlBase}/category/state-actives-driver`);
};

// ========== NUEVAS FUNCIONES PARA IMPORT/EXPORT ==========
export const downloadCategoriesTemplate = () => {
    return httpDownload().get(`${urlBase}/categories-excel/template`);
};

export const importCategories = file => {
    const formData = new FormData();
    formData.append('file', file);

    return httpAsset().post(`${urlBase}/categories-excel/import`, formData);
};
