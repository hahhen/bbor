import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><img src="bborL.png" width="200"></img></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <main>
          <div className="main_content">
            <div className="bheader">
              <h2 className="bheadertitle">THERE'S NO PLACE LIKE HOME</h2>
              <img className="bfacilityimg" src="https://images.divisare.com//images/c_limit,f_auto,h_2000,q_auto,w_3000/v1526582808/ohq1du4nhlgclyca7zbo/august-fischer-teshima-art-museum.jpg" />
            </div>
            <div className='hr'></div>
            <h2 className="bheadertitle">RECENT PROJECTS</h2>
            <div className='projects'>
              <div className="proj">
                <img className="projImg" src="yarthi.png" />
              </div>
              <div className="proj">
                <img className="projImg" src="1_2.png" />
              </div>
              <div className="proj">
                <img className="projImg" src="1_1.png" />
              </div>
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

export default Tab1;
