import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Service to get infos and features of catalog
 */
@Injectable({ providedIn: 'root' })
export class ApplicationsService {

    /** url base of oauth server OBT */
    private urlOauth = window['__env'].urlOauth;

    /** start http service client */
    constructor(private http: HttpClient) { }

    /**
     * get All Applications/Clients by user_id
     */
    public async getApplications(id): Promise<any> {
        const urlSuffix = `/clients/users/${id}`;
        const authenticationToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : '';
        const response = await this.http.get(`${this.urlOauth}${urlSuffix}`, {
            headers: {
                Authorization: `Bearer ${authenticationToken}`
            }
        }).toPromise();
        return response;
    }

    /**
     * get Application/Client by ID
     */
    public async getApplicationById(id): Promise<any> {
        const urlSuffix = `/clients/${id}`;
        const authenticationToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : '';
        const response = await this.http.get(`${this.urlOauth}${urlSuffix}`, {
            headers: {
                Authorization: `Bearer ${authenticationToken}`
            }
        }).toPromise();
        return response;
    }

    /**
     * update Application/Client by ID
     */
    public async updateApplicationById(id, data): Promise<any> {
        const urlSuffix = `/clients/${id}`;
        const authenticationToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : '';
        const response = await this.http.put(`${this.urlOauth}${urlSuffix}`, data, {
            headers: {
                Authorization: `Bearer ${authenticationToken}`
            }
        }).toPromise();
        return response;
    }

    /**
     * create Application/Client
     */
    public async createApplication(data): Promise<any> {
        const urlSuffix = `/clients/`;
        const authenticationToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : '';
        const response = await this.http.post(`${this.urlOauth}${urlSuffix}`, data, {
            headers: {
                Authorization: `Bearer ${authenticationToken}`
            }
        }).toPromise();
        return response;
    }

    /**
     * remove Author
     */
    public async removeAuthorById(clientId, authorId): Promise<any> {
        const urlSuffix = `/clients/${clientId}/author/${authorId}`;
        const authenticationToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : '';
        const response = await this.http.delete(`${this.urlOauth}${urlSuffix}`, {
            headers: {
                Authorization: `Bearer ${authenticationToken}`
            }
        }).toPromise();
        return response;
    }

    /**
     * add Author
     */
    public async addAuthorById(clientId, authorId): Promise<any> {
        const urlSuffix = `/clients/${clientId}/author/${authorId}`;
        const authenticationToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : '';
        const response = await this.http.post(`${this.urlOauth}${urlSuffix}`, {}, {
            headers: {
                Authorization: `Bearer ${authenticationToken}`
            }
        }).toPromise();
        return response;
    }

    /**
     * add Scope
     */
    public async addScope(clientId, userId, scope): Promise<any> {
        const urlSuffix = `/auth/authorize/${userId}/${clientId}`;
        const authenticationToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : '';
        const response = await this.http.post(`${this.urlOauth}${urlSuffix}`, { scope: [scope] }, {
            headers: {
                Authorization: `Bearer ${authenticationToken}`
            }
        }).toPromise();
        return response;
    }

    /**
     * remove Scope
     */
    public async deleteScope(clientId, userId, scope): Promise<any> {
        const urlSuffix = `/auth/revoke/${userId}/${clientId}`;
        const authenticationToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : '';
        const response = await this.http.post(`${this.urlOauth}${urlSuffix}`, { scope: [scope] }, {
            headers: {
                Authorization: `Bearer ${authenticationToken}`
            }
        }).toPromise();
        return response;
    }
}