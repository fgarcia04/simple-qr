import { Injectable } from '@angular/core';
import { Registry } from '../model/registry.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  saved: Registry[] = [];

  constructor(private storage: Storage) {
    this.loadRegistry();
  }

  async loadRegistry() {
    this.saved = await this.storage.get('registry') || [];
  }

  saveRegistry(format: string, text: string) {
    const newRegistry = new Registry(format, text);
    this.saved.unshift(newRegistry);
    this.storage.set('registry', this.saved);
  }

}
