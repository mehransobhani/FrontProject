export  default  async  function Pagination(props:{hasMore:boolean,page:number,nextPage:any,previousPage:any})
{
    return(<>
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm m-5">
                <li>
                    {
                        props.page>1 &&

                    <div
                        onClick={props.previousPage}
                        className="flex cursor-pointer items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-indigo-500 border border-e-0 border-gray-300 rounded-s-lg hover:bg-indigo-400  ">
                        <span className="sr-only">Previous</span>

                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 9 4-4-4-4"/>
                        </svg>
                    </div>
                    }
                </li>
                <li>
                    <div aria-current="page"
                       className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-indigo-600 border border-indigo-300 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 ">{props.page}</div>
                </li>
                {
                    props.hasMore &&
                    <li>
                        <div
                            onClick={props.nextPage}

                            className="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-white bg-indigo-500 border border-gray-300 rounded-e-lg hover:bg-indigo-400 ">
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M5 1 1 5l4 4"/>
                            </svg>
                        </div>
                    </li>
                }

            </ul>
        </nav>

    </>)
}
