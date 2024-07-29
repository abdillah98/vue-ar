export function getRootUrl() {
  const { protocol, hostname, port } = window.location;
  const baseURL = `${protocol}//${hostname}${port ? `:${port}` : ''}`;
  // return process.env.NODE_ENV === 'production' ? baseURL + '/vue-ar' : baseURL
  return baseURL
}

export function stopCamera() {
  try {
    // Find and stop the video stream
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(videoElement => {
      const stream = videoElement.srcObject as MediaStream;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
      // Remove the video element from the DOM
      videoElement.parentNode?.removeChild(videoElement);
    });
  } catch (error) {
    console.error('Error stopping camera:', error);
  }
}