import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { db, storage } from './Config'; // Ensure correct import from your configuration file
import { v4 } from "uuid";

function StoreImageTextFirebase() {
  const [txt, setTxt] = useState("");
  const [img, setImg] = useState(null); // Use null for initial state
  const [textlink, setTextLink] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // To store the uploaded image URL

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (!selectedImage) {
      console.error("No image selected.");
      return;
    }
    setImg(selectedImage); // Update state with the selected image file
  };

  const handleClick = async () => {
    if (!txt || !textlink || !img) {
      console.error("Please fill in all fields and select an image.");
      return;
    }

    try {
      // 1. Upload the image to Firebase Storage
      const imageRef = ref(storage, `images/${v4()}`); // Generate a unique filename
      await uploadBytes(imageRef, img);

      // 2. Get the download URL
      const url = await getDownloadURL(imageRef);
       const getimglink = url
      setImageUrl(url); // Store the URL for display
      
      // 3. Create a document in Firestore with text and image URL
      console.log("URL",getimglink)
      const docRef = await addDoc(collection(db, "product"), {
        
        ProjectName: txt,
        projectLink: textlink,
        imgurl :getimglink,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error saving image or document:", error);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setTxt(e.target.value)}
        placeholder="Project Name"
      />
      <br />
      <input
        onChange={(e) => setTextLink(e.target.value)}
        placeholder="Project Link"
      />
      <br />
      <input type="file" onChange={handleImageChange} />
      <br />
      <button onClick={handleClick}>Add</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
    </div>
  );
}

export default StoreImageTextFirebase;
