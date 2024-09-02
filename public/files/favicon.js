console.log('Favicon script loaded');

let frameIndex = 0;
const favicon_frames = [
  '/files/artwork/favicon_frames/frame_00.png',
  '/files/artwork/favicon_frames/frame_01.png',
  '/files/artwork/favicon_frames/frame_02.png',
  '/files/artwork/favicon_frames/frame_03.png',
  '/files/artwork/favicon_frames/frame_04.png',
  '/files/artwork/favicon_frames/frame_05.png',
  '/files/artwork/favicon_frames/frame_06.png',
  '/files/artwork/favicon_frames/frame_07.png',
  '/files/artwork/favicon_frames/frame_08.png',
  '/files/artwork/favicon_frames/frame_09.png',
  '/files/artwork/favicon_frames/frame_10.png',
  '/files/artwork/favicon_frames/frame_11.png',
  '/files/artwork/favicon_frames/frame_12.png',
  '/files/artwork/favicon_frames/frame_13.png',
  '/files/artwork/favicon_frames/frame_14.png',
  '/files/artwork/favicon_frames/frame_15.png',
  '/files/artwork/favicon_frames/frame_16.png',
  '/files/artwork/favicon_frames/frame_17.png',
  '/files/artwork/favicon_frames/frame_18.png',
  '/files/artwork/favicon_frames/frame_19.png'
];

const favicon = document.getElementById('dynamic-favicon'); // Cast to HTMLLinkElement
    if (favicon) {
      console.log('Favicon element found:', favicon);
    //   favicon.href = '/files/artwork/favicon_frames/frame_03.png'; // Test with a known frame
    } else {
      console.log('Favicon element not found.');
    }


function updateFavicon() {
  const favicon = document.getElementById('dynamic-favicon');
  if (favicon) {
    frameIndex = (frameIndex + 1) % favicon_frames.length;
    favicon.href = favicon_frames[frameIndex];
    console.log('Favicon updated:', favicon_frames[frameIndex]);
  } else {
    console.log('Favicon element not found.');
  }
}


  console.log('Window loaded');
  setInterval(updateFavicon, 220); // Adjust interval as needed
