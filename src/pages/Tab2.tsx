import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><img src="bbor1L.png" width="200"></img></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <main>
          <div className="main_content">
            <div className="bheader">
              <h2 className="bheadertitle">CREATING VERY IMPORTANT RESEARCH</h2>
              <img className="bfacilityimg" src="b1facility.jpg" />
            </div>
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
