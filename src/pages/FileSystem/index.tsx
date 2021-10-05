import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useCallback } from 'react';
import { readFile, writeFile } from '../../utils/FileHelpers';

import './styles.css';

const FileSystem: React.FC = () => {
  const onWriteFile = useCallback(() => writeFile('abc', 'abc'), []);
  const onReadFile = useCallback(() => readFile('abc'), []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>File System</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={onWriteFile} expand="full">
          Write
        </IonButton>
        <IonButton onClick={onReadFile} expand="full">
          Read
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FileSystem;
