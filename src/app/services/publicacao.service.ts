
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Publicacao } from '../interfaces/publicacao';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  private publicacaoCollection: AngularFirestoreCollection<Publicacao>;

  constructor(private afs: AngularFirestore) {
    this.publicacaoCollection = this.afs.collection<Publicacao>('publicacoes');
  }

  getPublicacoes() {
    return this.publicacaoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
    
  }

  addPublicacao(publicacao: Publicacao) {
    return this.publicacaoCollection.add(publicacao);
  }

  getPublicacao(id: string) {
    return this.publicacaoCollection.doc<Publicacao>(id).valueChanges();
  }

  
  updatePublicacao(id: string, publicacao: Publicacao) {
    return this.publicacaoCollection.doc<Publicacao>(id).update(publicacao);
  }

  deletePublicacao(id: string) {
    return this.publicacaoCollection.doc(id).delete();
  }
}


