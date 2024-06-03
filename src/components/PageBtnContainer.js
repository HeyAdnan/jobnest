import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, idx) => {
    return idx + 1;
  });
  const nextPage = () => {
    let newPage = page+1;
    if(newPage>numOfPages){
        newPage =  1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page-1;
    if(newPage<1){
        newPage =  numOfPages;
    }
    dispatch(changePage(newPage));
  };
  return <Wrapper>
    <button type ='button' className="prev-btn" onClick={ prevPage}>
        <HiChevronDoubleLeft/> Prev
    </button>
    <div className="btn-container">
        {pages.map((item,index)=>{
            return <button key={index} className={item===page? 'pageBtn active': 'pageBtn'} onClick={()=>dispatch(changePage(item))} >{item}</button>
        })}    
    </div>
    <button type ='button' className="next-btn" onClick={nextPage}>
        Next <HiChevronDoubleRight/></button>
  </Wrapper>;
};

export default PageBtnContainer;
