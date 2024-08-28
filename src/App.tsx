import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hook/useFetch";
import { Loading, Location } from "./components";
import { notify } from "./utils/helpers";
import Map from "./components/LocationMarker";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [ip, setIp] = useState<string>("");
  const { error, status: isLoading, data: location } = useFetch(ip);
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      return notify("Please add the ip");
    }
    inputRef.current && setIp(inputRef?.current?.value);
  };
  useEffect(() => {
    if (error) {
      notify(error.response.data.messages);
    }
  }, [error]);
  return (
    <>
      <div className="relative">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/images/pattern-bg-desktop.png"
          />
          <img src="/images/pattern-bg-mobile.png" alt="Flowers" />
        </picture>
        <div className="absolute top-10 left-1/2 -translate-x-1/2">
          <h3 className="text-3xl max-sm:text-xl font-medium text-white/90 text-center">
            IP Address Tracker
          </h3>
          {/* form */}
          <form className="mt-7 max-lg:w-[24rem] w-[40rem] max-sm:w-[20rem] flex rounded-xl overflow-hidden">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for any IP address or domain"
              className="border p-3 pl-5 w-full outline-none"
            />
            <button
              className="bg-black hover:bg-black/70 p-3 px-7"
              onClick={handelSubmit}
              type="button"
            >
              <img src="images\icon-arrow.svg" alt="icon arrow" />
            </button>
          </form>
        </div>
        <Location location={location} />
        {isLoading && <Loading />}
      </div>
      <Map position={location} />
    </>
  );
}

export default App;
