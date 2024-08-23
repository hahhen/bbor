import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { supabase } from '../supabaseClient';

const Tab1: React.FC = () => {
  const [works, setWorks] = useState<any[]>([]);

  useEffect(() => {
    getWorks();
  }, []);

  const getWorks = async () => {
    try {
      const { data, error } = await supabase.from('paper').select();

      if (error) {
        console.error('Error fetching works:', error.message);
        return;
      }

      if (data) {
        setWorks(data);
      }
    } catch (error: any) {
      console.error('Error fetching works:', error.message);
    }
  };
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonTitle><img className='logo' src="bborL.png" width="200"></img></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <main>
          <div className="main_content">
            <div className="bheader">
              <h2 className="bheadertitle">THERE'S NO PLACE LIKE HOME</h2>
              <img className="landIm" src="https://images.divisare.com//images/c_limit,f_auto,h_2000,q_auto,w_3000/v1526582808/ohq1du4nhlgclyca7zbo/august-fischer-teshima-art-museum.jpg" />
            </div>
            <div className='hr'></div>
            <h2 className="bheadertitle">RECENT PROJECTS</h2>
            <div className='projects'>
              {
                works.map((work: any) => (
                  <div className="proj">
                    <img className="projImg" src={work.image} />
                  </div>
                ))
              }
            </div>
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
