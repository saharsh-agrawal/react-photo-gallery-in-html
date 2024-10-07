import React from "react";
import ReactDOM from "react-dom";
import PhotoGallery from "./PhotoGallery";

const App = ({ photos }) => {
	return <PhotoGallery photos={photos} />;
};

ReactDOM.render(<App photos={photos} />, document.getElementById("root"));
