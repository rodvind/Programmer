import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton
  } from '@ionic/react';
import { book, build, colorFill, grid, add } from 'ionicons/icons';
import React from 'react';
import './Home.css';

const HomePage = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Programmer Learning Tracker Platform</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Programming Languages</IonLabel>
          </IonListHeader>
          < IonItem href = "https://reactjs.org/"
          target = "_blank" >
            <IonIcon slot="start" style={{ height:25 }} color="medium" src="/assets/js.svg" />
            <IonLabel>JavaScript</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/h5.svg" />
            <IonLabel>HTML</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/css3.svg" />
            <IonLabel>CSS</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/py.svg" />
            <IonLabel>Python</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/njs.svg" />
            <IonLabel>NodeJs</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/graphql.svg" />
            <IonLabel>GraphQL</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/tsc.svg" />
            <IonLabel>TypeScript</IonLabel>
          </IonItem>
          <IonListHeader>
            <IonLabel>Version Control</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/git.svg" />
            <IonLabel>Git</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/gh.svg" />
            <IonLabel>GitHub</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/gl.svg" />
            <IonLabel>GitLab</IonLabel>
          </IonItem>
          <IonListHeader>
            <IonLabel>Clouds</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/aws.svg" />
            <IonLabel>AWS</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/g.svg" />
            <IonLabel>Google</IonLabel>
          </IonItem>
          <IonListHeader>
            <IonLabel>OS</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/linux-tux.svg" />
            <IonLabel>Linux</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/apple.svg" />
            <IonLabel>Apple</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" src="/assets/windows.svg" />
            <IonLabel>Windows</IonLabel>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/expense')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
