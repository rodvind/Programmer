import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent, IonLabel, IonInput, IonItem, IonPicker } from '@ionic/react'
import {text} from "ionicons/icons";

const Expense = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Expense</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen class="ion-padding">
      <IonItem>
        <IonLabel>Picker</IonLabel>
        <IonPicker 
          columns={
            [{
              name: 'Events',
              options: ['React', 'Node']
            }]
          } 
          buttons={
            [{
              text: 'Save',
              role: 'save'
            }]
          } 
        />
      </IonItem>
      <IonInput>

      </IonInput>
    </IonContent>
  </IonPage>
)

export default Expense
