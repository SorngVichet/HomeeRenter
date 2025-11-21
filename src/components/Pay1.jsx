import visa from "../assets/VISA.png";
import mastercart from "../assets/Mastercard.webp";
import aba from "../assets/aba.png";
import aceleda from "../assets/aceleda.png";
import bgpayment from "../assets/Bgpayment.jpg";
import logo from "../assets/LOGO3.png";
const Pay = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="  flex  px-2  flex-col relative mt-12   items-center "
    >
      <div className=" w-full top-0 grid  relative  grid-cols-1 md:grid-cols-2 ">
        <div style={{ height: "200px" }} className=" relative">
          <img src={bgpayment} className=" h-full absolute top-0" alt="" />
          <img src="" alt="" />
        </div>
        <div style={{ height: "200px" }} className=" relative">
          {" "}
          <img
            src={bgpayment}
            className=" transform h-full rotate-180 absolute  bottom-0"
            alt=""
          />
        </div>
        <div className="  absolute h-full w-full d-flex  justify-between  gap-3 flex-column flex-md-row p-4 items-center">
          <div className=" flex items-center gap-3">
            <img
              src={logo}
              className=" w-32 bg-white rounded-full p-1"
              alt=""
            />
            <div className=" flex flex-col ">
              <span className=" text-2xl font-bold text-orange-600">
                Welcome to Dream Home
              </span>
              <span className=" text-orange-400 text-sm">
                Sale or Rent a lots of king of home.
              </span>
            </div>
          </div>
          <div className=" h-full py-8 flex flex-col border-b">
            <span className=" text-xl font-bold">
              Happy EveryDay with Your Dream House!
            </span>
            <span>
              We all thank you so much for using our service. We promice to try
              our best to make you easiest.
            </span>
          </div>
        </div>
      </div>
      <div className=" w-full  grid grid-cols-1 md:grid-cols-2 ">
        <div className=" border p-2">
          <div className="  grid gap-2 px-2 md:grid-cols-2 justify-center grid-cols-1 bg-gray-200">
            <div className=" flex  flex-col pt-2  ">
              <h3 className=" w-full  p-md-0 ps-3 border-b shadow  justify-content-md-center justify-content-start  bg-orange-400 flex  text-white ">
                Your item
              </h3>
              <h6 className="  h-32 bg-amber-100 justify-center flex items-center">
                The Modern Hotel in Phnom Penh
              </h6>
            </div>
            <div
              style={{ maxHeight: "300px" }}
              className=" border  overflow-hidden"
            >
              <img
                className=" w-full"
                src="https://archipro.com.au/images/s1/article/building/Form-Apartments-Port-Coogee-by-Stiebel-Eltron-.jpg/eyJlZGl0cyI6W3sidHlwZSI6InpwY2YiLCJvcHRpb25zIjp7ImJveFdpZHRoIjoxOTIwLCJib3hIZWlnaHQiOjE1NTgsImNvdmVyIjp0cnVlLCJ6b29tV2lkdGgiOjIzMTcsInNjcm9sbFBvc1giOjU2LCJzY3JvbGxQb3NZIjozMywiYmFja2dyb3VuZCI6InJnYigxMTUsMTQwLDE5NCkiLCJmaWx0ZXIiOjZ9fV0sInF1YWxpdHkiOjg3fQ=="
                alt="photo"
              />
            </div>
          </div>

          <div className=" w-full">
            <h5 className=" border-b w-full bg-gray-300 py-2">stutus:</h5>
            <div className=" gap-2 px-2 w-full grid grid-cols-2">
              <div className="  flex flex-col">
                <span className=" border-b bg-gray-200 font-semibold">
                  Type
                </span>
                <span className=" bg-gray-100">hotel</span>
              </div>
              <div className=" flex flex-col">
                <span className=" border-b bg-gray-100 font-semibold">
                  Size
                </span>
                <span className=" bg-gray-200">
                  300{" "}
                  <i className=" caret-neutral-50 text-sm fa-solid fa-xmark"></i>
                  400 m<sup>2</sup>
                </span>
              </div>
            </div>
          </div>
          <div className=" mt-2 w-full">
            <h5 className=" border-b w-full bg-gray-300 py-2">Price</h5>
            <div className=" gap-2 px-2 w-full grid grid-cols-2">
              <div className="  flex flex-col">
                <span className=" border-b bg-gray-200 font-semibold">PPM</span>
                <span className=" bg-gray-100">555$</span>
              </div>
              <div className=" flex flex-col">
                <span className=" border-b bg-gray-100 font-semibold">PPY</span>
                <span className=" bg-gray-200">5555$</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full border py-1 ">
          <div className=" flex justify-start shadow ps-3 text-white border-b text-2xl font-bold w-full bg-orange-400 py-1">
            Billing
          </div>
          <div className=" border-b flex w-full justify-center items-center">
            These informations are repuied!
          </div>
          <form className=" gap-2 flex flex-col w-full bg-amber-300 pe-4 rounded border  py-3">
            <div className=" grid grid-cols-2 ">
              <div className=" form-check">
                <label
                  className="   w-full ps-2  d-flex justify-content-start form-label"
                  htmlFor="firstname"
                >
                  First-Name
                </label>
                <input
                  className=" flex justify-center form-control"
                  placeholder="Your first name"
                  type="text"
                  id="firstname"
                />
              </div>
              <div className=" form-check">
                <label
                  className=" w-full ps-2  d-flex justify-content-start  form-label"
                  htmlFor="lastname"
                >
                  Last-Name
                </label>
                <input
                  placeholder="Your last name"
                  className=" form-control"
                  type="text"
                  id="lastname"
                />
              </div>
            </div>
            <div className=" form-check">
              <label
                className=" w-full ps-2  d-flex justify-content-start  form-label"
                htmlFor="email"
              >
                Email-Adress
              </label>
              <input
                placeholder="Your email"
                className=" form-control"
                type="email"
                id="emamil"
              />
            </div>
            <div className="  form-check">
              <label
                className="  w-full ps-2  d-flex justify-content-start  form-label"
                htmlFor="phone"
              >
                Phone-Number
              </label>
              <input
                placeholder="Your phone numer"
                className=" form-control"
                type="phone"
                id="phone"
              />
            </div>
            <div className=" grid grid-cols-2 ">
              <div className=" form-check">
                <label
                  className="  w-full ps-2  d-flex justify-content-start form-label"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className=" flex justify-center form-control"
                  placeholder="Your city"
                  type="text"
                  id="city"
                />
              </div>
              <div className=" form-check">
                <label
                  className=" w-full ps-2  d-flex justify-content-start  form-label"
                  htmlFor="state"
                >
                  State
                </label>
                <input
                  placeholder="Your state"
                  className=" form-control"
                  type="text"
                  id="state"
                />
              </div>
            </div>
            <div className=" w-full pr-3 ps-8">
              <div className=" w-full items-center  pt-2  border-t  flex justify-between">
                <div>
                  <h5 className="  ">Rental Choice</h5>
                  <div className=" px-2 flex gap-6">
                    <div className=" gap-2  items-center flex">
                      <input type="radio" name="" id="ppm" />
                      <label htmlFor="ppm">PPM</label>
                    </div>
                    <div className=" items-center flex gap-2">
                      <input type="radio" name="" id="ppy" />
                      <label htmlFor="ppy">PPY</label>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <button className=" btn btn-warning border shadow text-white">
                    Save Imformation
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className=" w-full border  ">
          <h2 className=" bg-orange-400 shadow py-2 flex justify-start ps-3 text-white">
            Booking Payment
          </h2>
          <div className=" w-full d-flex flex-column gap-1 py-2  flex-lg-row">
            <div>The Way accepted!</div>
            <div className=" w-full flex gap-3 justify-center">
              <img style={{ height: "35px" }} src={visa} alt="" />
              <img style={{ height: "35px" }} src={mastercart} alt="" />
              <img style={{ height: "35px" }} src={aba} alt="" />
              <img style={{ height: "35px" }} src={aceleda} alt="" />
            </div>
          </div>
          <div className=" w-full bg-gray-300 py-3 rounded">
            <h4>Add Card</h4>
            <div className=" w-full flex flex-col gap-3">
              <div className=" w-full flex flex-col px-3  items-start">
                <label className="  text-xl ps-2" htmlFor="cardnumber">
                  Card Number
                </label>
                <input
                  className=" h-10 px-3 bg-gray-100 rounded border-b w-full outline-0"
                  type="text"
                  id="cardnumber"
                  placeholder="Card Number"
                />
              </div>

              <div className=" grid w-full grid-cols-2 gap-2 px-3">
                <div className=" flex flex-col items-start w-full">
                  <label className="   text-xl ps-2" htmlFor="expiry">
                    Expiry
                  </label>
                  <input
                    className=" h-10 px-3 bg-gray-100 rounded border-b w-full outline-0"
                    type="text"
                    name=""
                    id="expiry"
                    placeholder="Expiry"
                  />
                </div>
                <div className=" w-full flex flex-col items-start">
                  <label className="text-xl ps-2" htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    className=" h-10 px-3 bg-gray-100 rounded border-b w-full outline-0"
                    type="password"
                    name=""
                    id="cvv"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col px-3  items-start">
                <label className="ps-2 text-xl" htmlFor="cardholder name">
                  CardHolder Name
                </label>
                <input
                  className=" h-10 px-3 bg-gray-100 rounded border-b w-full outline-0"
                  type="text"
                  id="cardholdername"
                  placeholder="CardHolder Name"
                />
              </div>
              <div className="  grid grid-cols-2 px-3">
                <div className=" flex gap-2 ps-2  items-center">
                  <input type="checkbox" name="" id="savecard" />
                  <label htmlFor="savecard">Save Card</label>
                </div>
                <button className=" btn btn-success">Save</button>
              </div>
              <div className=" w-full px-3">
                <button className=" btn w-full   btn-primary btn">
                  {" "}
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" border p-2">
          <h3>More Option & Contant to Rent</h3>
        </div>
      </div>
    </div>
  );
};
export default Pay;
