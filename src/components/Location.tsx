import { IPInfo } from "../types/location";

const Location = ({ location }: { location: IPInfo }) => {
  return (
    <section className="flex p-10 max-sm:p-5 max-sm:-translate-y-1/3  max-lg:-translate-y-1/2 max-xl:translate-y-0 z-10 w-[80%] max-xl:w-[90%] items-center max-lg:flex-col gap-5 lg:gap-10 justify-between shadow rounded-lg left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  bg-white">
      <div className="lg:border-r lg:pr-10 border-gray-300">
        <p className="uppercase max-lg:text-center max-sm:text-xs text-gray-500">
          ip address
        </p>
        <p className="mt-2 text-2xl max-sm:text-lg font-medium">
          {location?.ip}
        </p>
      </div>
      <div className="lg:border-r lg:pr-10  border-gray-300">
        <p className="uppercase max-lg:text-center max-sm:text-xs text-gray-500">
          location
        </p>
        <p className="mt-2 text-2xl max-sm:text-lg font-medium">
          <span>{location?.location.country}, </span>
          <span>{location?.location.region}, </span>
          <span>{location?.location.city} </span>
        </p>
      </div>
      <div className="lg:border-r  lg:pr-20 border-gray-300">
        <p className="uppercase max-lg:text-center max-sm:text-xs text-gray-500">
          time zone
        </p>
        <p className="mt-2 text-2xl max-sm:text-lg font-medium">
          <span>UTC {location?.location.timezone}</span>
        </p>
      </div>
      <div>
        <p className="uppercase max-lg:text-center max-sm:text-xs text-gray-500">
          isp
        </p>
        <p className="mt-2 text-2xl max-sm:text-lg font-medium">
          {location?.isp || "NO ISP"}
        </p>
      </div>
    </section>
  );
};

export default Location;
