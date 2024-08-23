import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { supabase } from '../supabaseClient';
import React, { useEffect, useState } from 'react';

const Tab2: React.FC = () => {
  const [works, setWorks] = useState<any[]>([]);

  useEffect(() => {
    getWorks();
  }, []);

  const getWorks = async () => {
    try {
      const { data, error } = await supabase.from('paper').select().match({bureau_id: 1});

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
        <IonToolbar >
          <IonTitle><img className='logo' src="bbor1L.png" width="200"></img></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <main>
          <div className="main_content">
            <div className="bheader">
              <h2 className="bheadertitle">CREATING VERY IMPORTANT RESEARCH</h2>
              <img className="bfacilityimg" src="b1facility.jpg" />
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

export default Tab2;
