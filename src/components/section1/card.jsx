import CardTextContent from "./CardTextContent";
export default function card(props) {
  // console.log(props.user[1].img);

  return (
    <>
      <div className=" h-full   shrink-0  rounded-4xl  relative   w-70 ml-2  overflow-x-auto ">
        <img
          src={props.user.imgs}
          alt="image"
          className=" opacity-95 h-full w-full  "
        />

        

        <CardTextContent user={props.user} index={props.index} />
      </div>
    </>
  );
}
