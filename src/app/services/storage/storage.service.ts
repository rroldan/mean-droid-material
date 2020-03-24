import {environment} from '../../../environments/environment';
import { Injectable } from '@angular/core';

/**
 * Clase a cargo de la gestión del almacenamiento local de la aplicacion.
 */
@Injectable()
export class StorageService {
    private local = window.localStorage;

    public setLocal(key: string, value) {
        this.local[environment.apiKey + key] = JSON.stringify(value);
    }

    public getLocal(key: string) {
        return this.local[environment.apiKey + key] ? JSON.parse(this.local[environment.apiKey + key]) : null;
    }

    public removeLocal(key: string) {
        this.local.removeItem(environment.apiKey + key);
    }
}
