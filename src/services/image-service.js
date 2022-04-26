const onImgError = (currentTarget) => {
	currentTarget.onerror = null;
	currentTarget.src = "assets/default_image_thumb.png"; // Set img as default in case image's src can't loading (internet interruption)
};

export { onImgError };