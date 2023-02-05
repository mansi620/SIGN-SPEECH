import React, { useRef, useEffect } from "react";
import styles from "./main.module.css";
function MyCamera() {
    
  const videoRef = useRef(null);
  

  useEffect(() => {
    async function setupCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    }
    setupCamera();
  }, []);

  return (

    <div className={styles.camborder}>
      <div className={styles.camera}>
        <video autoPlay ref={videoRef} />
      </div>
    </div>
    
  );
}

export default MyCamera;
