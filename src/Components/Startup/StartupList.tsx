import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { Startup } from "../../Types/Startup";
import StartupItem from "./StartUp";
import Pagination from "@mui/material/Pagination";

export default function StartupList(): ReactElement {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startupsPerPage] = useState(5);

  const indexOfLastStartup = currentPage * startupsPerPage;
  const indexOfFirstStartup = indexOfLastStartup - startupsPerPage;
  const currentStartups = startups?.slice(indexOfFirstStartup, indexOfLastStartup);

  useEffect(() => {
    const getStartups = async () => {
      const startUps = await StartupHttpService.getStartups();
      setStartups(startUps);
    }
    getStartups();
  },[]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  
  return (
    <Fragment>
      {currentStartups?.map(startup => {
        return (
          <StartupItem startup = {startup}/>
        )
      })}
      <Pagination count={15} page={currentPage} onChange={handleChange} />
    </Fragment>
  );
}
