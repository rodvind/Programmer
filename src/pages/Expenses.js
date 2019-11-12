import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react'

const Expenses = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        <IonTitle>Expenses</IonTitle>
      </IonToolbar>
    </IonHeader>
  </IonPage>
)

export default Expenses