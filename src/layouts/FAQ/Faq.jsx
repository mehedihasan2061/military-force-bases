import { Helmet } from "react-helmet";
import faq from "../../assets/faq-templates-880x440.png"

const Faq = () => {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title> FAQ - Bangladesh Defence Portal</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="flex justify-between bg-cyan-50 text-amber-800 w-[90%] mx-auto p-6 rounded-xl  ">
          {/* <div className="w-1/2">
            <h1 className="text-4xl font-bold text-center bg-gray-50 p-6 rounded-xl">FAQ</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              accusamus fuga atque vel doloremque illo delectus et nam id, harum
              nostrum facere cupiditate recusandae inventore! Eaque, iusto
              itaque ad voluptates molestiae qui numquam! Hic quaerat, nemo
              consectetur, amet delectus similique officia harum magni iure quas
              esse aspernatur dignissimos magnam quidem.
            </p>
          </div> */}
          <div>
            <img className="rounded-xl" src={faq} alt="" />
          </div>
        </div>
        <div>
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <h2 className="text-2xl text-center font-semibold sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 mb-8 text-center dark:text-gray-600">
                Some information about Bangladesh Defense Force is given
                below.....
              </p>
              <div className="space-y-4">
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none  bg-green-100 focus-visible:dark:ring-violet-600">
                    1. What are the main branches of the Bangladesh Armed
                     Forces?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 bg-gray-50 dark:text-gray-600">
                    The Bangladesh Armed Forces consist of three main branches:
                    the Bangladesh Army, the Bangladesh Navy, and the Bangladesh
                    Air Force.{" "}
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none  bg-green-100 focus-visible:dark:ring-violet-600">
                    2. What is the primary role of the Bangladesh Army?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 bg-gray-50 dark:text-gray-600">
                    The Bangladesh Army is responsible for land-based military
                    operations. Its primary roles include defending the
                    country's territorial integrity, supporting civil
                    authorities during emergencies, and contributing to
                    international peacekeeping missions.{" "}
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none  bg-green-100 focus-visible:dark:ring-violet-600">
                    3. How does the Bangladesh Navy contribute to national
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 bg-gray-50 dark:text-gray-600">
                    The Bangladesh Navy ensures maritime security, protects the
                    country's territorial waters, and safeguards its maritime
                    interests. It also participates in humanitarian missions and
                    international naval exercises.{" "}
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none bg-green-100 focus-visible:dark:ring-violet-600">
                    4. What is the function of the Bangladesh Air Force?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 bg-gray-50 dark:text-gray-600">
                    The Bangladesh Air Force is tasked with defending the
                    country's airspace, providing air support to ground and
                    naval forces, and conducting search and rescue missions. It
                    also plays a role in disaster response and humanitarian
                    assistance..{" "}
                  </p>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Faq;