import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar >
          <IonTitle><img className='logo' src="bbor1L.webp" width="200"></img></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <main>
          <div className="main_content">
            <div className="bheader">
              <h2 className="bheadertitle">CREATING VERY IMPORTANT RESEARCH</h2>
              <img className="bfacilityimg" src="b1facility.webp" />
            </div>
            <div className='hr'></div>
            <h2 className="bheadertitle">RECENT PROJECTS</h2>
            <div className='projects'>
              <div className="proj">
                <img className="projImg" src="yarthi.webp" />
              </div>
              <div className="proj">
                <img className="projImg" src="1_2.webp" />
              </div>
              <div className="proj">
                <img className="projImg" src="1_1.webp" />
              </div>
            </div>
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
