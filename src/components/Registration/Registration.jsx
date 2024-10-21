import { Field, Form, Formik } from "formik";
import s from "./Registration.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { motion } from "framer-motion";
import { slideFrom } from "../../components/motion";

export default function Registration() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={slideFrom()}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            {/* <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            recusandae ratione? Obcaecati praesentium repudiandae itaque
            repellat quia eveniet ipsam, inventore repellendus velit veritatis,
            quo dicta consequuntur blanditiis dolorem optio magni! Sapiente
            deleniti distinctio, dolor labore quia odio itaque. Minima delectus
            obcaecati pariatur fugiat doloribus quidem iure expedita provident,
            corrupti iusto temporibus minus? Quod deleniti porro asperiores,
            quidem reiciendis ex esse!
          </p> */}
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
              <Form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label"></label>
                </div>
                <div className="form-control mt-6">
                  <button className={s.btnreg} type="submit">
                    Register
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
