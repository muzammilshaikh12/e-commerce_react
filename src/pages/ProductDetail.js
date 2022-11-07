import { useParams } from "react-router-dom";

import { Fragment, useState } from "react";

import "./ProductDetail.css";

const ProductDetail = () => {
  const params = useParams();
  const id = params.productId;

  const detailarray = [
    [
      "https://th.bing.com/th/id/OIP.pVtfi-6M9QclOizrvrmxtgHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.1nBSmwwmANjhNsnU78iG0QHaE7?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.fpZQC_WPozx3a7ulX1FmeAHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.K32seY3zkWjSsETp56HyDQHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ],
    [
      "https://th.bing.com/th/id/OIP.HLGRROGOQLyY1COrB1uGcQHaFj?w=264&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.oZ2oLrvbjidOjCo9AOQfAwHaFp?w=255&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.J7Tin8ltKocb_y0Of_kOkgHaE8?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.6riI8qQXuTVrJyW2dNjHtgHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ],
    [
      "https://th.bing.com/th/id/OIP.tnBLVyhbpkbprrjdrpIEEwHaGu?w=207&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.gVJXOGG1ALc7Zy9bT2clUgHaE8?w=283&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.YvDO4HX1N9qc67XdQTkIBgHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.2MpG4-dO4F2Ekok6c40APwHaHe?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ],
    [
      "https://th.bing.com/th/id/OIP.t7N_C3eQvcOO2AUC4fH3WAHaFj?w=258&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.rlFvdBLDj9Ld5STPO_fhRAHaE7?w=291&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.arDRw0U2PwpV5YsggLFMTAHaLH?w=123&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://th.bing.com/th/id/OIP.jFtHqxeJFMRKPVenuVbO4AHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ],
  ];

  const reviewArray = [
    " This is an awesome Bike.",
    "The mileage is superb",
    "Performance is at peak",
  ];

  const nameArray = [
    "YAMAHA R15 V4",
    "KAWASAKI NINJA H2",
    "TRIUMPH TIGER",
    "HONDA CBR 1000RR",
  ];


  const dynamicArray = detailarray.filter((array) => {
    return array;
  });
  const finalpics = dynamicArray[id - 1].map((image) => {
    return <img src={image} alt="A Bike" className="pics" />;
  });

  const [largeimage, setLarge] = useState(finalpics[0].props.src);
  const enlargedImage = (event) => {
    setLarge(event.target.src);
  };

  const reviews = reviewArray.map((review) => {
    return (
      <ul>
        <li>{review}</li>
      </ul>
    );
  });

  return (
    <Fragment>
      <div className="maindiv">
        <div className="detail-images" onClick={enlargedImage}>
          {finalpics}
        </div>
        <div className="enlarged">
          <h1 className="heading">{nameArray[id-1]}</h1>
          <img src={largeimage} alt="A Bike" className="enlarged-image" />
        </div>
      </div>
      <div className="reviews">{reviews}</div>
    </Fragment>
  );
};

export default ProductDetail;
