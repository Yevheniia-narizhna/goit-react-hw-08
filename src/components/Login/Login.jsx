import { Field, Form, Formik } from "formik";

export default function Login() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            recusandae ratione? Obcaecati praesentium repudiandae itaque
            repellat quia eveniet ipsam, inventore repellendus velit veritatis,
            quo dicta consequuntur blanditiis dolorem optio magni! Sapiente
            deleniti distinctio, dolor labore quia odio itaque. Minima delectus
            obcaecati pariatur fugiat doloribus quidem iure expedita provident,
            corrupti iusto temporibus minus? Quod deleniti porro asperiores,
            quidem reiciendis ex esse!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Formik>
            <Form className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
