//
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./SIGNUPBASEBALL.css";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";
// import "cropperjs/dist/cropper.css";
import axios from "axios";
import Cropper from "react-easy-crop";
import createImg from "./croppedImg";
import getCroppedImg from "./croppedImg";
import $ from "jquery";

function SIGNUPBASEBALL(props) {
  const {
    registration,
    x2023OlympicIndoo,
    screenshot20230123At8321,
    place,
    theFacility,
    memberships,
    battingCages,
    programsEvents,
    contactUs,
    ois,
    eazy,
    base1,
    cropYourPhotoToF,
    letsGo,
    pexelsPixabay1632091,
    title,
    letsCreateYourCustomPlayersCard,
    number,
  } = props;
  const [src, setSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);
  const canvasRef = useRef(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const CROP_AREA_ASPECT = 3 / 2;

  const handleFileChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
    setSrc(URL.createObjectURL(event.target.files[0]));
    console.log({
      image: event.target.files[0],
      preview: URL.createObjectURL(selectedFile),
      src: URL.createObjectURL(event.target.files[0]),
    });
  };
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  const handleUpload = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "eazyapp");

    await axios
      .post("https://api.cloudinary.com/v1_1/djfxlkr1i/image/upload", data)
      .then((res) => {
        console.log(res);
      });
  };

  // const handleDownload = () => {
  //   if (image) {
  //     const link = document.createElement("a");
  //     link.href = previewUrl;
  //     link.download = image.name;
  //     link.click();
  //   }
  // const data = new FormData();
  // data.append("file", image);
  // data.append("upload_preset", "eazyapp");
  // data.append("cloud_name", "djfxlkr1i");

  // fetch("https://api.cloudinary.com/v1_1/djfxlkr1i/image/upload", {
  //   method: "post",
  //   body: data,
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   //   });
  // };

  const Output = ({ croppedArea }) => {
    const scale = 100 / croppedArea.width;
    const transform = {
      x: `${-croppedArea.x * scale}%`,
      y: `${-croppedArea.y * scale}%`,
      scale,
      width: "calc(100% + 0.5px)",
      height: "auto",
    };

    const imageStyle = {
      transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
      width: transform.width,
      height: transform.height,
    };
    console.log($(`#preview`).css("transform"));
    return (
      <div
        className="output"
        style={{ paddingBottom: `${100 / CROP_AREA_ASPECT}%` }}
      >
        <img id="preview" src={previewUrl} alt="" style={imageStyle} />
      </div>
    );
  };

  const [useCanvas, setCanvas] = useState();
  const saveCanvas = () => {
    const dataURL = canvasRef.current.toDataURL();
    setCanvas(dataURL);
  };

  const onClick = () => {
    window.location.href = "http://35.72.8.63:5678/";
  };
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(previewUrl, croppedAreaPixels);
      // console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      // console.error(e);
    }
  }, [croppedAreaPixels]);
  // console.log(croppedImage);
  const handleCrop = (crop) => {
    console.log(crop);
    setCrop({ crop });
    console.log(crop);
  };
  // useEffect(() => {
  //   if (!src) return;

  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   const image = new Image();
  //   image.src = src;
  //   image.onload = () => {
  //     context.drawImage(
  //       image,
  //       crop.x,
  //       crop.y,
  //       crop.width,
  //       crop.height,
  //       0,
  //       0,
  //       canvas.width,
  //       canvas.height
  //     );
  //   };
  // }, [src, crop, canvasRef]);

  // const handleCrop = (x, y, width, height) => {
  //   setCrop({ x, y, width, height });
  // };
  // const handleCrop = () => {
  //   console.log("console");
  //   if (typeof cropperRef.current.getCroppedCanvas() === "undefined") {
  //     console.log("anything");
  //     return;
  //   }

  //   setCropResult(cropperRef.current.getCroppedCanvas().toDataURL());
  //   console.log("cropped");
  // };
  return (
    <div className="container-center-horizontal">
      <div className="sign-up-baseball-2 screen">
        <div className="overlap-group2">
          <div className="overlap-group">
            <div className="rectangle-42"></div>
            <div className="registration dohyeon-normal-white-37px">
              {registration}
            </div>
            <div className="rectangle-43"></div>
            <div className="rectangle-44"></div>
            <div className="rectangle-23"></div>
            <p className="x2023-olympic-indoo chakrapetch-normal-white-15px">
              {x2023OlympicIndoo}
            </p>
            <div className="rectangle-33"></div>
            <div className="rectangle-5"></div>
            <img
              className="screenshot-2023-01-23-at-832-1"
              src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63ed44f8a1a58d92896d8c03/img/olympiclogo-1.png"
              alt="Screenshot 2023-01-23 at 8.32 1"
            />
            <div className="the-facility akshar-normal-black-19px">
              {theFacility}
            </div>{" "}
            <p
              className="place akshar-normal-black-19px"
              onClick={onClick}
              style={{ zIndex: 999, cursor: "pointer" }}
            >
              {/* <a
                className="place akshar-normal-black-19px"
                href="http://35.72.8.63:1234/"
              >
                HOME
              </a> */}
              HOME
            </p>
            <div className="memberships akshar-normal-black-19px">
              {memberships}
            </div>
            <div className="batting-cages akshar-normal-black-19px">
              {battingCages}
            </div>
            <div className="programs-events akshar-normal-black-19px">
              {programsEvents}
            </div>
            <div className="contact-us akshar-normal-black-19px">
              {contactUs}
            </div>
            <div className="rectangle-6"></div>
            <div className="eazy inter-bold-white-21px">SIGN UP</div>
            <img className="base-1" src={base1} alt="BASE 1" />
            {/* <div className="rectangle-61"></div> */}
            <img
              class="iconsax-linearcamera-m6WwqA"
              data-id="170:2432"
              src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63ed3ddd05d0cd1ecddaf81a/img/iconsax-linear-camera-1.svg"
              anima-src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63ed3ddd05d0cd1ecddaf81a/img/iconsax-linear-camera-1.svg"
              alt="Iconsax/Linear/camera"
              style={{
                position: "absolute",
                zIndex: previewUrl ? 0 : 1,
                top: "450px",
                left: "1145px",
              }}
            ></img>
            <div className="rectangle-63"></div>
            <div className="rectangle-61">
              {/* <a
                href={useCanvas}
                type="submit"
                download
                style={{ zIndex: 999, position: "absolute", top: "2px" }}
              >
                Download Image
              </a>
              <input type="file" onChange={handleFileChange} />
              {src && (
                <canvas
                  ref={canvasRef}
                  style={{ height: 400, width: "100%" }}
                />
              )}
              {src && (
                <img
                  src={src}
                  style={{ height: 400, width: "100%" }}
                  alt="Uploaded Image"
                />
              )}
              {/* <button
                onClick={() => handleCrop()}
                style={{ zIndex: 999, position: "absolute", top: "2px" }}
              >
                Crop
              </button> */}

              {/* <input type="file" onChange={handleFileChange} /> */}
              {/* {src && (
                <Cropper
                  src={src}
                  style={{ height: 400, width: "100%" }}
                  aspectRatio={1}
                  zoomable={true}
                  guides={false}
                  autoCrop={true}
                  ref={cropperRef}
                />
              )} */}
              {/* <button onClick={handleCrop}>Crop</button>
              {cropResult && (
                <img
                  src={cropResult}
                  style={{ height: 200, width: 200 }}
                  alt="Crop result"
                />
              )}  */}
              {/* <div>
                <input type="file" onChange={handleFileChange} />
                {src && (
                  <canvas
                    ref={canvasRef}
                    style={{ height: 400, width: "100%" }}
                  />
                )}
                {src && (
                  <img
                    src={src}
                    style={{ height: 400, width: "100%" }}
                    alt="Uploaded Image"
                  />
                )}
              </div> */}

              <input
                type="file"
                id="file"
                onChange={(event) => {
                  handleImageChange(event);
                  // console.log("Called");
                }}
                style={{
                  position: "relative",
                  zIndex: "1000",
                  display: "none",
                }}
              />
              <label
                className="inter-normal-mercury-30px "
                style={{ position: "relative", zIndex: "1000" }}
                for="file"
              >
                BROWSE
              </label>
              {previewUrl && (
                <>
                  {/* <img
                    src={previewUrl}
                    alt="Preview"
                    style={{
                      overflow: "hidden",
                      height: "360px",
                      width: "400px",
                    }}
                  /> */}
                  {/* <button onClick={handleDownload}>Download</button> */}
                </>
              )}
              {/* <Cropper
                image={previewUrl}1
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropAreaChange={(croppedArea) => {
                  setCroppedArea(croppedArea);
                }}
              /> */}
              {/* <img
                class="iconsax-linearcamera-m6WwqA"
                data-id="170:2432"
                src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63ed3ddd05d0cd1ecddaf81a/img/iconsax-linear-camera-1.svg"
                anima-src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63ed3ddd05d0cd1ecddaf81a/img/iconsax-linear-camera-1.svg"
                alt="Iconsax/Linear/camera"
                style={{
                  position: "absolute",
                  left: "310px",
                }}
              ></img> */}
              <div className="App">
                <div className="cropper">
                  <Cropper
                    image={previewUrl}
                    aspect={CROP_AREA_ASPECT}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropAreaChange={(croppedArea) => {
                      setCroppedArea(croppedArea);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* <img
              src={croppedImage}
              alt="hello"
              style={{
                position: "relative",
                top: "770px",
                left: "770px",
                height: "200px",
                width: "200px",
              }}


            /> */}
            {/* <div
              className="viewer"
              style={{
                height: "200px",
                width: "200px",
              }}
            >
              {croppedArea && <Output croppedArea={croppedArea} />}
              {console.log(croppedArea)}
            </div> */}
            {console.log(croppedArea)}
            <p className="crop-your-photo-to-f akshar-light-white-26px">
              {cropYourPhotoToF}
            </p>
            <div className="rectangle-62"></div>
            {/* <button
              style={{
                backgroundColor: "red",
                height: "20px",
                width: "60px",
                position: "relative",
                left: "750px",
                top: "330px",
              }}
              onClick={handleUpload}
            >
              Upload
            </button> */}
            {/* <ReactCrop
              src={previewUrl}
              crop={crop}
              onChange={handleCrop}
              style={{
                backgroundColor: "white",
                height: "200px",
                width: "200px",
                position: "relative",
                left: "750px",
                top: "770px",
              }}
            /> */}
            {/* "http://localhost:60594/" "http://35.72.8.63:37815/ThanksForRegister/" */}
            <a href="http://35.72.8.63:34265/ThanksForRegister/">
              <button
                onClick={handleUpload}
                className="lets-go inter-bold-black-30px "
                style={{
                  cursor: "pointer",
                  height: "65px",
                  top: "829px",
                  backgroundColor: "transparent",
                }}
              >
                {letsGo}
              </button>
            </a>
            {/* <div className="ellipse-2"></div> */}
            {/* <img className="pexels-pixabay-163209-1" src={pexelsPixabay1632091} alt="pexels-pixabay-163209 1" /> */}
          </div>
          <h1 className="title inter-bold-white-46px">{title}</h1>
          <p className="lets-create-your-custom-players-card inter-light-white-26px">
            {letsCreateYourCustomPlayersCard}
          </p>
          <div className="overlap-group1">
            <div className="ellipse-1"></div>
            <div className="number inter-bold-black-36px">1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SIGNUPBASEBALL;
