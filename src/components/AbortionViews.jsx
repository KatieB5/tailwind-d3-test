import { LineGraph } from "./LineGraph";

export const AbortionViews = () => {
  return (
    <>
      <section className="py-8 z-10 font-serif">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Abortion views
          </h1>
          <p class="max-w-7xl mx-auto mt-4 text-lg text-center ">
            The data below show the responses to Gallup polling of people in the US, from 1975 to 2021, on their opinion on the legality of abortion.
          </p>
          <LineGraph/>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Data sources</h2>
          <p class="max-w-3xl mx-auto mt-4 text-md text-center ">
            The original data are available from Gallup <a href="https://news.gallup.com/poll/1576/abortion.aspx">here</a>.
          </p>
        </div>
      </section>
    </>
  );
};
