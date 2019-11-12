import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonHeader, IonTitle, IonNav, IonToolbar, IonList, IonIcon, IonContent, IonLabel, IonItem, IonButtons, IonBackButton, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { AppPage } from './declarations';
import { logoAngular } from 'ionicons/icons'

import Menu from './components/Menu';
import Home from './pages/Home';
import List from './pages/List';
import Expenses from './pages/Expenses'
import JavaScript from './pages/JavaScript'
import Expense from './pages/Expense'
// import { home, list } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// const appPages: AppPage[] = [
//   {
//     title: 'Home',
//     url: '/home',
//     icon: home
//   },
//   {
//     title: 'List',
//     url: '/home/list',
//     icon: list
//   }
// ];
// const nav = document.querySelector('ion-nav')
// const tit = (title) => <IonPage><IonHeader translucent>
//   <IonToolbar>
//     <IonButtons slot="start">
//       <IonBackButton defaultHref="/"></IonBackButton>
//     </IonButtons>
//     <IonTitle>{title}</IonTitle>
//   </IonToolbar>
// </IonHeader>
// <IonContent>
//   <IonIcon icon={logoAngular} size="large"></IonIcon>
//   <p>test</p>
// </IonContent>
// </IonPage>

// const App = () => (
//   <IonApp>
//     <IonNav >
//        <IonHeader translucent>
//       <IonToolbar>
//         <IonTitle>Nav</IonTitle>
//       </IonToolbar>
//     </IonHeader>
//     <IonContent fullscreen>
//       <IonList>
//         <IonItem button onClick={() => 
//            nav.insert(tit, { title: 'Angular' })
//         }>
//             <IonIcon slot="start" icon={logoAngular} style={{ color: '#E63135' }}></IonIcon>
//             <IonLabel>
//               <h3>Angular</h3>
//             </IonLabel>
//         </IonItem>
//       </IonList>
//     </IonContent>
//     </IonNav>
   
//   </IonApp>
// );
const App = () => (
  <IonApp>
    <IonReactRouter>
      <Menu />
      <IonRouterOutlet id="main">
        <Route path="/home" component={Home} />
        <Route path="/javascript" component={JavaScript} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/expense" component={Expense} />
        <Route path="/list" component={List} />
        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonSplitPane contentId="main">
//         <Menu appPages={appPages} />
//         <IonRouterOutlet id="main">
//           <Route path="/home" component={Home} exact={true} />
//           <Route path="/home/list" component={List} exact={true} />
//           <Route exact path="/" render={() => <Redirect to="/home" />} />
//         </IonRouterOutlet>
//       </IonSplitPane>
//     </IonReactRouter>
//   </IonApp>
// );

export default App;
