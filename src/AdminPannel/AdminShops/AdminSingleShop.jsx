import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import { db } from "../../Hooks/useFirebase";

function MyVerticallyCenteredModal(props) {
  const [serial, setSerial] = useState(props.shop.serial);
  const [name, setName] = useState(props.shop.name);
  const [price, setPrice] = useState(props.shop.price);
  const [description, setDescription] = useState(props.shop.description);
  const [baseImage, setBaseImage] = useState(props.shop.img);

  const handleSerial = (e) => {
    const result = e.target.value;
    setSerial(result);
  };
  const handleName = (e) => {
    const result = e.target.value;
    setName(result);
  };
  const handlePrice = (e) => {
    const result = e.target.value;
    setPrice(result);
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
    const MachineryRef = doc(db, "Shops", props.shop.id);
    try {
      if (baseImage && serial && name && description) {
        await updateDoc(MachineryRef, {
          serial: serial,
          name: name,
          price: price,
          description: description,
          img: baseImage,
        });

        setSerial(serial);
        setName(name);
        setPrice(price);
        setDescription(description);
        setBaseImage(baseImage);

        swal(
          "Well Done!",
          "You have successfully Updated the Shops!",
          "success",
          {
            buttons: {
              cancel: "Cancel",
              catch: {
                text: "Go to Shops",
                value: "catch",
              },
            },
          }
        ).then((value) => {
          switch (value) {
            case "catch":
              window.location.href = "/shops";
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
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.shop.name}
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
            defaultValue={props.shop.serial}
            placeholder="Serial"
          />

          <input
            type="text"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleName}
            defaultValue={props.shop.name}
            placeholder="Name"
          />

          <input
            type="text"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handlePrice}
            defaultValue={props.shop.price}
            placeholder="Price"
          />

          <textarea
            row="6"
            cols="10"
            className="form-control form-control-lg mb-2 w-100"
            onChange={handleDescription}
            defaultValue={props.shop.description}
            placeholder="Description"
          />

          <div className="imgAndDrop">
            <div
              class="file-drop-area"
              style={{ border: "1px dashed #161616" }}>
              <span>Choose files</span>
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
            {baseImage ? (
              <img src={baseImage} height="200px" alt="" />
            ) : (
              <img src={props.shop.img} height="200px" alt="" />
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

const AdminSingleShop = ({ shop }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onPressDelete = async (id) => {
    try {
      deleteDoc(doc(db, "Shops", id));
    } catch (err) {
      console.log("err--->", err);
    }
  };
  const onPressDeleteMsg = (id) => {
    swal(
      "Delete Warning!",
      "Do you really want to Delete this Shop?",
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
          swal("Success!", "You have successfully Delete the Shop!", "success");
          break;
        default:
      }
    });
  };

  return (
    <div key={shop.id} className="col-lg-4 col-md-4 mt-5">
      <div className="serialDiv">
        <span className="ps-2">{shop.serial}</span>
      </div>
      <img
        src={shop.img}
        alt=""
        width="100%"
        height="300px"
        style={{ border: "5px solid black" }}
      />

      <button className="delBtn" onClick={() => onPressDeleteMsg(shop.id)}>
        Delete
      </button>
      <button className="editBtn" onClick={() => setModalShow(true)}>
        Edit
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        shop={shop}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminSingleShop;
