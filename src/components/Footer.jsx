export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://github.com/KatieB5" className="hover:underline">
            KatieB5
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.linkedin.com/in/katie-bickford-7a9958aa/" className="hover:underline me-4 md:me-6">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/KatieB5" className="hover:underline me-4 md:me-6">
              About KatieB5
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/katie-bickford-7a9958aa/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
