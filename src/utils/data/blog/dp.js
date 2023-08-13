export const dataBlog = {
  dp: {
    id: 1,
    path: 'dp',
    date: 'Friday October 21st 2022',
    badge: 'Engineering',
    imageUrl: '/svg/DpLogo.svg',
    bgColor: 'bg-gradient-to-r from-gray-900 from-100%  via-20% ',

    title: `dp`,
    // subtitle: 'Bring your creativity to life with the web 3D graphic rendering API.',
    // postContent1:
    //   ' WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging WebGL, we were able to take what would have been a static conference signup and turned it into',
    // postContent2:
    //   ' WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging WebGL, we were able to take what would have been a static conference signup and turned it into',
    // paragraph: 'The big idea',
    postContent3:
      'WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging WebGL, we were able to take what would have been a static conference signup and turned it into',
    codestring1: `<mesh ref={sensor6Ref}
      onClick={() => {
      console.log("sensor6");
      }}
      geometry={nodes.sensor6.geometry}
      material={
      badSensors.includes(6) ? materials["Material.001"] 
      : materials.pxrUsdPreviewSurface2SG
      }
      position={[0.7, 0.58, 0.28]}
      rotation={[0.09, 0.06, 0]}
    />`,
    codestring2: `
    useEffect(() => {
      const check = async () => {
        if (isMobile && !isLandscape)
          await cameraControlsRef.current?.reset(true);
            switch (isClicked) {
              case "sensor1":
               cameraControlsRef.current?.reset(true);
              if (!isMobile || (isMobile && isLandscape)) {
                await cameraControlsRef.current?.setPosition(2, 3, 5, true);
               cameraControlsRef.current?.truck(-0.3, 0.5, true);
              cameraControlsRef.current?.forward(-0.1, true);
             await cameraControlsRef.current?.zoomTo(6, true);
            } else {
              cameraControlsRef.current?.forward(0.2, true);
               cameraControlsRef.current?.truck(0.85, 0.2, true);
              await cameraControlsRef.current?.zoomTo(10, true);
                   …
             }
            break;
            default:
            cameraControlsRef.current?.reset(true);
            break;
          }
        };
        check();
      }, [isClicked]); 
    `,
    codestring3: `
      const [isMobile, setMobile] = useState(navigator.userAgent.match(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/gi)
        ? true : false);
      const [isLandscape, setLandscape] = useState(
      useMediaQuery("(orientation : landscape)");
      `,
  },
  loop: {
    id: 2,
    path: 'event-loop',
    date: 'Friday August 11th 2023',
    badge: 'javascript',
    imageUrl:
      'https://ucarecdn.com/21f3fb0f-a09a-4fc2-bbf2-bbb8757a98c2/-/exposure/-451/-/filter/yedis/100/-/preview/600x400/',
    bgColor: 'bg-gradient-to-r from-gray-900 from-100% via-black-900 via-indigo-900 via-80% pulse',

    title: 'event-loop',
    subtitle: 'Bring your creativity to life with the web 3D graphic rendering API.',
    postContent1:
      ' WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging WebGL, we were able to take what would have been a static conference signup and turned it into',
    postContent2:
      ' WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging WebGL, we were able to take what would have been a static conference signup and turned it into',
    paragraph: 'The big idea',
    postContent3:
      'WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging WebGL, we were able to take what would have been a static conference signup and turned it into',
    codestring1: `function first() {
      // code
    }
    
function second() {
      first();
    }
    
function third() {
      second();
    }`,
    codestring2: `
function factorial(n) {
   if (n < 2) {
    return 1;
    }
  return n * factorial(n - 1);
}`,
    codestring3: `
function log(value) {
  console.log(value);
}
log("start");
    
setTimeout(() => {
  log("Show discount message");
}, 3000);
    
log("end");
 `,
  },
}
