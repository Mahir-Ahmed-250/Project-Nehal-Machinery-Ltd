import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import loadingImg from "../../Assets/logo.png";
import { db } from "../../Hooks/useFirebase";
import BannerTitle from "../../Components/BannerTitle/BannerTitle";
import AdminNavigation from "../Components/AdminNavigation/AdminNavigation";
import LoadingSkeleton from "../Components/LoadingSkeleton/LoadingSkeleton";
import "./AdminHomeBanner.css";

const AdminHomeBanner = () => {
  const [baseImage, setBaseImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

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
      if (baseImage) {
        await addDoc(collection(db, "HomeBanner"), {
          img: baseImage,
        });
        setBaseImage("");

        swal(
          "Well Done!",
          "You have successfully Uploaded the Home Banner!",
          "success",
          {
            buttons: {
              cancel: "Cancel",
              catch: {
                text: "Go to Home",
                value: "catch",
              },
            },
          }
        ).then((value) => {
          switch (value) {
            case "catch":
              window.location.href = "/";

              break;
            default:
          }
        });
      } else {
        swal({
          title: "Sorry",
          text: `No Image Found!`,
          icon: "error",
          button: "OK",
        });
      }
    } catch (error) {
      console.log("error--->", error);
      swal({
        title: "Sorry",
        text: "Image Size is Not Matched",
        icon: "error",
        button: "OK",
      });
    }
    setLoading(false);
  };

  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setLoading2(true);
    //create the query
    const q = query(collection(db, "HomeBanner"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setBanners(list);
      setLoading2(false);
      console.log(banners);
    });
    return bannerListenerSubscription;
  }, []);

  const onPressDelete = async (id) => {
    try {
      deleteDoc(doc(db, "HomeBanner", id));
    } catch (err) {
      console.log("err--->", err);
    }
  };
  const onPressDeleteMsg = (id) => {
    swal(
      "Delete Warning!",
      "Do you really want to Delete this Banner?",
      "warning",
      {
        buttons: {
          cancel: "NO",
          catch: {
            text: "YES",
            value: "catch",
          },
        },
      }
    ).then((value) => {
      switch (value) {
        case "catch":
          onPressDelete(id);
          swal(
            "Success!",
            "You have successfully Deleted the Banner!",
            "success"
          );
          break;
        default:
      }
    });
  };

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
      <div style={{ paddingTop: "12%" }} className="container">
        <BannerTitle title1="Current Home Banners" />
        <AdminNavigation />
        {loading2 ? (
          <>{<LoadingSkeleton />}</>
        ) : (
          <div className="row">
            {banners.map((banner) => (
              <div key={banner.id} className="col-lg-4 col-md-6 mb-4">
                <img
                  src={banner.img}
                  alt=""
                  width="100%"
                  height="300px"
                  style={{ border: "5px solid black" }}
                />
                <button
                  className="delBtn"
                  onClick={() => onPressDeleteMsg(banner.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="pb-5" style={{ marginTop: "80px" }}>
          <BannerTitle title1="Upload a new Home Banner" />
          <div className="imgAndDrop">
            <div className="file-drop-area">
              <span className="choose-file-button">Choose files</span>
              <span className="file-message">or drag and drop files here</span>
              <input
                className="file-input"
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
    </>
  );
};

export default AdminHomeBanner;
