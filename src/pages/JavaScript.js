import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent, IonItem, IonIcon, IonList, IonLabel } from '@ionic/react'
import { arrowForward } from 'ionicons/icons';

const JavaScript = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        <IonTitle>JavaScript</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem routerLink='/home' routerDirection="none">
            <IonIcon slot="start" src="/assets/react.svg" />
            <IonIcon slot="end" src="/assets/chev.svg" />
            <IonLabel>React</IonLabel>
          </IonItem>
          <IonItem routerLink='/home' routerDirection="none">
            <IonIcon slot="start" src="/assets/rn.svg" />
            <IonIcon slot="end" src="/assets/chev.svg" />
            <IonLabel>React Native</IonLabel>
          </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
)

// const ListItems = () => {
//   const sources = [
//     react,
//     rn,
//     ,
//     football,
//     basketball,
//     paperPlane,
//     americanFootball,
//     boat,
//     bluetooth,
//     build
//   ];

//   const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => {
//     return (
//       <IonItem key={x}>
//         <IonIcon src={sources[x - 1]} slot="start" />
//         Item {x}
//         <div className="item-note" slot="end">
//           This is item # {x}
//         </div>
//       </IonItem>
//     );
//   });

//   return <IonList>{items}</IonList>;
// };

export default JavaScript