import "./Storage.css";
import Sidenav from "./Sidenav";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { Navigate } from "react-router-dom";

function Storage(props) {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    
    <div> <Sidenav Pic={props.user.picture} />
        <h2 className="jj">Your Prescription Will Be Shown Here.....</h2>

    <div className="App2">
      <input
        type="file"
        className="bul1"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button className="bul11" onClick={uploadFile}> Upload</button>
      {imageUrls.map((url) => {
        return <img className="img11" src={url}  />;
      })}
      </div>
    </div>
  );
}

export default Storage;