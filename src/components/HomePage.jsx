export const HomePage = () => {
  return (
    <>
      <section className="py-8 z-10 font-serif">
        <div className="text-center">
          <h1 className="text-7xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome
          </h1>
          <p class="max-w-3xl mx-auto mt-4 text-xl text-center ">
            This project was initated to pratcice using the Tailwind CSS
            framework and the d3.js library with React. The aim was to create an
            attractive UI and try and have a play with some data visualization
            in web browser.
          </p>
        </div>
        <div className="flex justify-center items-center p-10">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-1/2">
            <img
              className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1585&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="a group of people holding hands on top of a tree"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-emerald-700 dark:text-white">
                Family planning needs satisfied
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The data for this project highlight the proportion of demand for family planning satisfied with modern methods. Access to and use of family planning tools helps empower people to exercise their rights to make decisions about their health freely and responsibly, with the information, education and means to do so. The data are sourced from the World Health Organization's Global Health Observatory data repository.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
