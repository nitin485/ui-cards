import Card from "./card";
import Arrow from "./arrow";
import  '../../App.css'
export default function center(props) {

  return (
    <div className="2h-[90vh] py-10 pb-16 pt-6  flex  overflow-hidden ">
      <div className="leftContent h-full w-1/3   flex flex-col  items-center   ">
        <div className=" flex flex-col gap-10 ml-8 w-70">
          <h3 className=" flex  flex-col  mt-10 text-3xl font-bold tracking-widest">
            Prospective <br />
            <span className="bg-gray-100 rounded-2xl w-fit">customer</span>
            <br />
            segmentation
          </h3>
          <p className=" w-60  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            placeat quaerat voluptatum adipisci maiores? Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet.
          </p>

          {/* arrow div */}
          <div className=" mt-15">
            <Arrow />
          </div>
        </div>
      </div>

      {/* left content  ends here*/}

      {/* right content starts here */}
      <div className="rightContent  h-full w-2/3 flex py-0 ml-20 gap-4 shrink-0 p-2 overflow-x-auto ">

        {props.user.map((user, index) => (
          <Card key={index} user={user} index={index} />
        ))}

{/* {props.user.map((user, index) => (
  <Card key={index} user={user} />
))} */}


      </div>
      {/* left content ends here  */}
    </div>
  );
}
