import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Gallery from "react-photo-gallery";
import Viewer from "react-viewer";

const App = ({ photos }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setViewerIsOpen(false);
	};

	return (
		<div>
			<h1>My Photo Gallery</h1>
			<Gallery photos={photos} onClick={openLightbox} />
			{viewerIsOpen && (
				<Viewer
					visible={viewerIsOpen}
					onClose={closeLightbox}
					images={photos.map((photo) => ({
						src: photo.src,
						alt: "ISB Gallery Image",
					}))}
					activeIndex={currentImage}
					// deactivate other controls apart from close button and forward/backward arrows
					zoomable={false}
					rotatable={false}
					scalable={false}
					// attribute={false}
					noImgDetails={true}
					drag={false}
					disableMouseZoom={true}
					// noToolbar={true}
					// onMaskClick={closeLightbox}
				/>
			)}
		</div>
	);
};

ReactDOM.render(<App photos={photos} />, document.getElementById("root"));
