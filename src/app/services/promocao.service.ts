import { Promocao } from './../interfaces/promocao';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private promocaoCollection: AngularFirestoreCollection<Promocao>;

  constructor(private afs: AngularFirestore) {
    this.promocaoCollection = this.afs.collection<Promocao>('promocoes');
  } 
    getPromocoes() {
      return this.promocaoCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
  
            return { id, ...data };
          });
        })
      );
      
    }
  
    addPromocao(promocao: Promocao) {
      return this.promocaoCollection.add(promocao);
    }
  
    getPromocao(id: string) {
      return this.promocaoCollection.doc<Promocao>(id).valueChanges();
    }
  
    
    updatePromocao(id: string, promocao: Promocao) {
      return this.promocaoCollection.doc<Promocao>(id).update(promocao);
    }
  
    deletePromocao(id: string) {
      return this.promocaoCollection.doc(id).delete();
    }
  }
  

