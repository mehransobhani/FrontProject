export default function CustomerForm (){
    return(<>
    <div className="isolate bg-white px-24 py-24 sm:py-32 ">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
   </div>
  <div className="mx-auto max-w-2xl text-center">
    <strong className="text-2xl font-bold tracking-tight text-gray-900 ">ثبت مشتری </strong>
   </div>
  <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label  className="block text-sm font-semibold leading-6  text-gray-800">نام </label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name"  className="block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold leading-6  text-gray-800">نام خانوادگی  </label>
        <div className="mt-2.5">
          <input type="text" name="last-name" id="last-name"   className="block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label  className="block text-sm font-semibold leading-6  text-gray-800">موبایل</label>
        <div className="mt-2.5">
          <input type="text" name="company" id="company" className="block w-full   rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold leading-6  text-gray-800">برند  </label>

        <select id="country" name="country" className="w-full border py-2 rounded-md  bg-transparent bg-none pl-4 pr-9 text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
              <option>UK</option>
              <option>YE</option>
              <option>MA</option>
            </select>
       </div>
      <div className="sm:col-span-2">
        <label  className="block text-sm font-semibold leading-6 text-gray-800">آدرس</label>
        <div className="mt-2.5">
          <textarea name="message" id="message"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>

    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">  ثبت </button>
    </div>
  </form>
</div>
    </>)
}
