import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
  function sendData(values) {
    console.log(values);
  }
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Please Enter The Name')
      .min(3, 'the name must be more than 3 Characters')
      .max(15, 'the name must be more than 3 Characters'),
    email: Yup.string()
      .required('Please Enter The Email')
      .email('Email Not Vaild'),
    password: Yup.string()
      .required('Please Enter The Password')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        'pass must me captial char and small char and number , * '
      ),
    age: Yup.number().required('Please Enter The Age').max(2, 'not Age'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
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
            <div className="username ">
              <span
                className={` text-secondprime block z-20 font-bold px-2 duration-[.6s] transition-opacity transition-transform   ${
                  formik.values.name
                    ? 'translate-y-0 opacity-1'
                    : 'translate-y-20 opacity-0'
                }`}
              >
                User Name:
              </span>

              <input
                type="text"
                placeholder="userName"
                className="border-b-[1px] rounded-md focus:outline-none border-b-gray-200 px-2 py-3 block w-3/4"
                name="name"
                // value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
