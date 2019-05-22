import Head from 'next/head';
import NavigationBar from './NavigationBar';

const OverlayBGcolor ="#0078ff";

const Layout = (props) => (
  <div>
<React.Fragment>
    <Head>
      <title>BMD React Next</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.min.css" rel="stylesheet"></link>
      {/* <link rel="stylesheet" href="/static/assets/css/global.css"></link> */}
    </Head>
    
    <NavigationBar />

</React.Fragment>
    <>
      {props.children}
      <style jsx global >{` 
        .overlay-mf {
          background-color: ${OverlayBGcolor};
        }

        .overlay-mf {
          position: absolute;
          top: 0;
          left: 0px;
          padding: 0;
          height: 100%;
          width: 100%;
          opacity: .7;
        }

      `}</style>
    </>
  </div>

);

export default Layout;

