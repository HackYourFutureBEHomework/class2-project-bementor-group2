import React from "react";

import Foto from "../assets/images/ticket.jpg";

const Home = props => {
  return (
    <p>
      Be Mentor is an organistion that Lorem ipsum dolor sit amet, ante aenean
      pellentesque at aliquet. Maecenas accumsan, dui purus, morbi aenean sed
      risus dictum amet est, quis tincidunt, natoque gravida venenatis dis.
      Aenean ac nunc, morbi neque. Est aliquet in erat interdum euismod hac,
      fringilla pellentesque erat eleifend integer magna condimentum, placerat
      quam quod. Et risus placerat proin eros, nunc sed quisque ac donec,
      pellentesque enim lectus quam quis morbi et <br />
      <img src={Foto} alt="random photo" width="25%" />
      <br />
    </p>
  );
};

export default Home;
