import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><img src="bbor2L.png" width="200"></img></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <main>
          
          <div className="main_content">
            <div className="bheader">
              <h2 className="bheadertitle">CREATING MANY IMPORTANT RESEARCHES</h2>
              <img className="bfacilityimg" src="b2facility.jpg" />
            </div>
            <div className='hr'></div>
            <h2 className="bheadertitle">RECENT PROJECTS</h2>
            <div className='projects'>
              <div className="proj">
                <img className="projImg" src="2_1.png" />
              </div>
            </div>
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
