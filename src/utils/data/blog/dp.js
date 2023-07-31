export const dataBlog = {
  dp: {
    id: 1,
    path: 'dp',
    date: 'Friday October 21st 2022',
    badge: 'Engineering',
    imageUrl: '/svg/DpLogo.svg',
    bgColor: 'bg-gradient-to-r from-green-900 from-10% via-black-900 via-indigo-900 via-80% pulse',

    title: 'Building an interactive WebGL experience in Next.js',
    subtitle: 'Bring your creativity to life with the web 3D graphic rendering API.',
    postContent1:
      ' WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging WebGL, we were able to take what would have been a static conference signup and turned it into',
    postContent2:
      ' WebGL is a JavaScript API for rendering 3D graphics within a web browser, giving developers the ability to create unique, delightful graphics, unlike anything a static image is capable of. By leveraging WebGL, we were able to take what would have been a static conference signup and turned it into',
    paragraph: 'The big idea',
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
}
