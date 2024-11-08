import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../Hooks/useFirebase";
import swal from "sweetalert";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import AdminNavigation from "../../Components/AdminNavigation/AdminNavigation";
import LoadingSkeleton from "../../Components/LoadingSkeleton/LoadingSkeleton";
import loadingImg from "../../../Assets/logo.png";
import AdminSingleMold from "./AdminSingleMold";

const AdminMolds = () => {
  const [serial, setSerial] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [baseImage, setBaseImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleSerial = (e) => {
    const result = e.target.value;
    setSerial(result);
  };

  const handleName = (e) => {
    const result = e.target.value;
    setName(result);
  };

  const handleDescription = (e) => {
    const result = e.target.value;
    setDescription(result);
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onClickCreate = async () => {
    setLoading(true);
    try {
      if (baseImage && serial && name && description) {
        await addDoc(collection(db, "Molds"), {
          serial: serial,
          name: name,
          description: description,
          img: baseImage,
        });
        setSerial("");
        setName("");
        setDescription("");
        setBaseImage("");

        swal(
          "Well Done!",
          "You have successfully Uploaded a Molds!",
          "success",
          {
            buttons: {
              cancel: "Cancel",
              catch: {
                text: "Go to Molds",
                value: "catch",
              },
            },
          }
        ).then((value) => {
          switch (value) {
            case "catch":
              window.location.href = "/molds";

              break;
            default:
          }
        });
      } else {
        swal({
          title: "Sorry",
          text: `Some fields are missing!`,
          icon: "error",
          button: "OK",
        });
      }
    } catch (error) {
      swal({
        title: "Sorry",
        text: "Image Size is Not Matched",
        icon: "error",
        button: "OK",
      });
    }
    setLoading(false);
  };

  const [molds, setMolds] = useState([]);
  useEffect(() => {
    setLoading2(true);
    //create the query
    const q = query(collection(db, "Molds"));
    //create listener
    const teamListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setMolds(list);
      setLoading2(false);
    });
    return teamListenerSubscription;
  }, []);

  if (loading) {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="loading-gif">
          <img src={loadingImg} alt="" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
  return (
    <>
      <>
        <div style={{ paddingTop: "12%" }} className="container">
          <BannerTitle title1="Current Molds" />
          <AdminNavigation />
          <div className="row">
            {loading2 ? (
              <>
                <LoadingSkeleton />
              </>
            ) : (
              <>
                {molds
                  .sort((a, b) => a.serial - b.serial)
                  .map((mold) => (
                    <AdminSingleMold key={mold.id} mold={mold} />
                  ))}
              </>
            )}
          </div>
          <div className="pb-5" style={{ marginTop: "180px" }}>
            <BannerTitle title1="Upload a new Molds" />
            <div>
              <input
                type="number"
                id="form3Example3"
                className="form-control form-control-lg mb-2 w-25"
                onChange={handleSerial}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                placeholder="Serial"
              />
              <input
                type="text"
                id="form3Example3"
                className="form-control form-control-lg mb-2 w-50"
                onChange={handleName}
                placeholder="Name"
              />

              <textarea
                type="textarea"
                rows="10"
                cols="50"
                id="form3Example3"
                className="form-control form-control-lg mb-2 w-100"
                onChange={handleDescription}
                placeholder="Description"
              />

              <div className="imgAndDrop">
                <div class="file-drop-area">
                  <span class="choose-file-button">Choose files</span>
                  <span class="file-message">or drag and drop files here</span>
                  <input
                    class="file-input"
                    type="file"
                    multiple
                    onChange={(e) => {
                      uploadImage(e);
                    }}
                  />
                </div>
                <img src={baseImage} height="200px" alt="" />
              </div>
              <button className="uploadBtn" onClick={onClickCreate}>
                Upload
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AdminMolds;
