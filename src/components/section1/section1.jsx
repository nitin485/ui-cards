import Navbar from "./navbar.jsx";
import Center from "./center.jsx";


export default function section1(props) {
  console.log(props.user);
  
  return (
    <>
      <Navbar />
      <Center user={props.user} />

    </>
  );
}
