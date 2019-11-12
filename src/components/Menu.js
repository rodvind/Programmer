import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonNav
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';
import { home, list, wallet, pricetags, logoAngular } from 'ionicons/icons';
import JavaScript from '../pages/JavaScript';

// interface MenuProps extends RouteComponentProps {
//   appPages: AppPage[];
// }

 const techs = [{
     'title': 'Angular',
     'icon': 'angular',
     'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
     'color': '#E63135'
   },
   {
     'title': 'CSS3',
     'icon': 'css3',
     'description': 'The latest version of cascading stylesheets - the styling language of the web!',
     'color': '#0CA9EA'
   },
   {
     'title': 'HTML5',
     'icon': 'html5',
     'description': 'The latest version of the web\'s markup language.',
     'color': '#F46529'
   },
   {
     'title': 'JavaScript',
     'icon': 'javascript',
     'description': 'One of the most popular programming languages on the Web!',
     'color': '#FFD439'
   },
   {
     'title': 'Sass',
     'icon': 'sass',
     'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
     'color': '#CE6296'
   },
   {
     'title': 'NodeJS',
     'icon': 'nodejs',
     'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
     'color': '#78BD43'
   },
   {
     'title': 'Python',
     'icon': 'python',
     'description': 'A clear and powerful object-oriented programming language!',
     'color': '#3575AC'
   },
   {
     'title': 'Markdown',
     'icon': 'markdown',
     'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
     'color': '#412159'
   },
   {
     'title': 'Tux',
     'icon': 'tux',
     'description': 'The official mascot of the Linux kernel!',
     'color': '#000'
   },
 ];

const nav = document.querySelector('ion-nav')
const showDetail = title => {
  const tech = techs.find(tech => tech.title === title)
  nav.push('nav-detail', { tech })
}
// const Menu = () => (
//   <>
//     <IonHeader>
//       <IonToolbar color="primary">
//         <IonTitle>Menu</IonTitle>
//       </IonToolbar>
//     </IonHeader>
//     <IonContent>
//       <IonList>
        
//           <IonItem button>
//             <IonNav root={Budget}>
//               <IonIcon slot="start" icon={logoAngular} style={{ color: '#E63135' }}></IonIcon>
//               <IonLabel>
//                 <h3>Angular</h3>
//               </IonLabel>
//             </IonNav>
//           </IonItem>
        
//       </IonList>
//     </IonContent>
//   </>
// );
const Menu = () => (
  <IonMenu contentId="main" type="overlay" side="start">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/home' routerDirection="none">
            <IonIcon slot="start" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/javascript' routerDirection="none">
            <IonIcon slot="start" src="/assets/js.svg" />
            <IonLabel>JavaScript</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/expenses' routerDirection="none">
            <IonIcon slot="start" src="/assets/css3.svg" />
            <IonLabel>CSS</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/JavaScript' routerDirection="none">
            <IonIcon slot="start" src="/assets/py.svg" />
            <IonLabel>Python</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/JavaScript' routerDirection="none">
            <IonIcon slot="start" src="/assets/njs.svg" />
            <IonLabel>NodeJS</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/JavaScript' routerDirection="none">
            <IonIcon slot="start" src="/assets/graphql.svg" />
            <IonLabel>GraphQL</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink='/JavaScript' routerDirection="none">
            <IonIcon slot="start" src="/assets/tsc.svg" />
            <IonLabel>TypeScript</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default withRouter(Menu);
