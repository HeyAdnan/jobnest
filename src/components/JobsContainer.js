import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "./Job";
import Loading from "./Loading";
import { useEffect } from "react";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const dispatch = useDispatch();
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  
  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

 

  if (isLoading) {
    return <Loading />;
  }
  if (jobs.length === 0) {
    console.log(jobs);
    return (
      <Wrapper>
        <h2>No jobs found</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {" "}
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages>1 && <PageBtnContainer/>}
    </Wrapper>
  );
};

export default JobsContainer;
