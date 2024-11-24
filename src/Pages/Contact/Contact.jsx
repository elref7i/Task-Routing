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
            className="w-3/4 mx-auto py-20 "
            onSubmit={formik.handleSubmit}
          >
            <div className="space-y-8 mx-auto w-3/4 *:">
              <div className="username ">
                <span
                  className={`labalinput   ${
                    formik.values.name
                      ? 'translate-y-0 opacity-1'
                      : 'translate-y-15 opacity-0'
                  }`}
                >
                  User Name:
                </span>
                <input
                  type="text"
                  placeholder="userName"
                  className="input"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="userage">
                <span
                  className={` text-secondprime block -z-20 font-bold px-2 duration-[.6s] transition-opacity transition-transform   ${
                    formik.values.age
                      ? 'translate-y-0 opacity-1'
                      : 'translate-y-15 opacity-0'
                  }`}
                >
                  User Age:
                </span>
                <input
                  type="number"
                  placeholder="userAge"
                  className="input"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="email">
                <span
                  className={` text-secondprime block -z-20 font-bold px-2 duration-[.6s] transition-opacity transition-transform   ${
                    formik.values.email
                      ? 'translate-y-0 opacity-1'
                      : 'translate-y-15 opacity-0'
                  }`}
                >
                  User Email:
                </span>
                <input
                  type="email"
                  placeholder="userEmail"
                  className="input"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="userPassword">
                <span
                  className={` text-secondprime block -z-20 font-bold px-2 duration-[.6s] transition-opacity transition-transform   ${
                    formik.values.password
                      ? 'translate-y-0 opacity-1'
                      : 'translate-y-15 opacity-0'
                  }`}
                >
                  User Password:
                </span>
                <input
                  type="password"
                  placeholder="userPassword"
                  className="input"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <button className="bg-secondprime py-2 px-2 text-white  rounded-md">
                send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
