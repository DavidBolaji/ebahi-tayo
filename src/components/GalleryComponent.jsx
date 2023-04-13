import ImageGallery from "react-image-gallery";
import { Row, Col } from "antd";
import "./Gallery.css";
import { IMAGES } from "../constants";

const images = [
  {
    original: IMAGES.EbahiCourse,
    thumbnail: IMAGES.EbahiCourse,
  },
  {
    original: IMAGES.EbahiBook,
    thumbnail: IMAGES.EbahiBook,
  },
  {
    original: IMAGES.EbahiVocal,
    thumbnail: IMAGES.EbahiVocal,
  },
  //   {
  //     original:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //     thumbnail:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //   },
  //   {
  //     original:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //     thumbnail:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //   },
  //   {
  //     original:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //     thumbnail:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //   },
  //   {
  //     original:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //     thumbnail:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //   },
  //   {
  //     original:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //     thumbnail:
  //       "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  //   },

  // {
  // original: "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  // thumbnail: "https://lh5.googleusercontent.com/jMbmGhY8L2kK1dZs1y9JKRVvv4BCbn0FGD7is7jZeLlE4JNLTePFIdVoIoQoVtJW8vmyuoRPrN0UknFBXhPMqHs=w16383",
  // },
  // {
  // original: "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672481684/lppm/PHOTO-2022-12-25-20-49-10_kqi7a3.jpg",
  // thumbnail: "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672481684/lppm/PHOTO-2022-12-25-20-49-10_kqi7a3.jpg",
  // },
];

const GalleryComponent = () => {
  return (
    <Row className=" bg-[#fff] pt-20 pb-20 md:px-20 scale-75">
      <Col span={24}>
        <ImageGallery autoPlay items={images} />
      </Col>
    </Row>
  );
};

export default GalleryComponent;
