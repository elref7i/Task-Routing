import { useFormik } from 'formik';

export default function Contact() {
  function sendData(values) {
    console.log(values);
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      password: '',
    },
    onSubmit: sendData,
  });
  return (
    <>
      <section className="min-h-screen pt-[110px] pb-20">
        <div className="container ">
          <div className="title text-center space-y-3">
            <h2 className="text-5xl font-semibold uppercase text-firstprime">
              conatct section
            </h2>
            <div className="icon-star  flex items-center justify-center gap-3  ">
              <div className="line bg-firstprime"></div>
              <i className="fa-solid fa-star text-xl "></i>
              <div className="line bg-firstprime"></div>
            </div>
          </div>
          <form
            action=""
            className="w-3/4 mx-auto py-10 space-y-8"
            onSubmit={formik.handleSubmit}
          >
            <div className="username">
              <span className="text-secondprime font-medium px-2">
                User Name:
              </span>
              <input
                type="text"
                placeholder="userName"
                className="border-b-[1px] rounded-md focus:outline-none border-b-gray-200 px-2 py-3 block w-3/4"
                name="name"
              />
            </div>
            <div className="userage">
              <span className="text-secondprime font-medium px-2">
                User Age:
              </span>
              <input
                type="number"
                placeholder="userAge"
                className="border-b-[1px] rounded-md focus:outline-none border-b-gray-200 px-2 py-3 block w-3/4"
                name="age"
              />
            </div>
            <div className="email">
              <span className="text-secondprime font-medium px-2">
                User Email:
              </span>
              <input
                type="email"
                placeholder="userEmail"
                className="border-b-[1px] rounded-md focus:outline-none border-b-gray-200 px-2 py-3 block w-3/4"
                name="email"
              />
            </div>
            <div className="userPassword">
              <span className="text-secondprime font-medium px-2">
                User Password:
              </span>
              <input
                type="password"
                placeholder="userPassword"
                className="border-b-[1px] rounded-md focus:outline-none border-b-gray-200 px-2 py-3 block w-3/4"
                name="password"
              />
            </div>
            <button className="bg-secondprime py-2 px-2 text-white  rounded-md">
              send Message
            </button>
          </form>
        </div>
      </section>
      ;
    </>
  );
}
