import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import { db } from "../../../Hooks/useFirebase";

function MyVerticallyCenteredModal(props) {
  const [serial, setSerial] = useState(props.mold.serial);
  const [name, setName] = useState(props.mold.name);
  const [description, setDescription] = useState(props.mold.description);
  const [baseImage, setBaseImage] = useState(props.mold.img);

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
  const onClickUpdate = async () => {
    const MachineryRef = doc(db, "Molds", props.mold.id);
    try {
      if (baseImage && serial && name && description) {
        await updateDoc(MachineryRef, {
          serial: serial,
          name: name,
          description: description,
          img: baseImage,
        });

        setSerial(serial);
        setName(name);
        setDescription(description);
        setBaseImage(baseImage);

        swal(
          "Well Done!",
          "You have successfully Updated the Mold!",
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
    } catch (err) {
      swal({
        title: "Sorry",
        text: "Image Size is Not Matched",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.mold.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <input
            type="number"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleSerial}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            defaultValue={props.mold.serial}
            placeholder="Serial"
          />

          <input
            type="text"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleName}
            defaultValue={props.mold.name}
            placeholder="Name"
          />

          <textarea
            row="6"
            cols="10"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleDescription}
            defaultValue={props.mold.description}
            placeholder="Description"
          />

          <div className="imgAndDrop">
            <div
              className="file-drop-area"
              style={{ border: "1px dashed #161616" }}
            >
              <span>Choose files</span>
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
            {baseImage ? (
              <img src={baseImage} height="200px" alt="" />
            ) : (
              <img src={props.machinery.img} height="200px" alt="" />
            )}
          </div>
          <button className="uploadBtn" onClick={onClickUpdate}>
            UPDATE
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="delBtn" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

const AdminSingleMold = ({ mold }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onPressDelete = async (id) => {
    try {
      deleteDoc(doc(db, "Molds", id));
    } catch (err) {
      console.log("err--->", err);
    }
  };
  const onPressDeleteMsg = (id) => {
    swal(
      "Delete Warning!",
      "Do you really want to Delete this Mold?",
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
          swal("Success!", "You have successfully Delete the Mold!", "success");
          break;
        default:
      }
    });
  };

  return (
    <div key={mold.id} className="col-lg-4 col-md-4 mt-5">
      <div className="serialDiv">
        <span className="ps-2">{mold.serial}</span>
      </div>
      <img
        src={mold.img}
        alt=""
        width="100%"
        height="300px"
        style={{ border: "5px solid black" }}
      />

      <button className="delBtn" onClick={() => onPressDeleteMsg(mold.id)}>
        Delete
      </button>
      <button className="editBtn" onClick={() => setModalShow(true)}>
        Edit
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        mold={mold}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminSingleMold;
