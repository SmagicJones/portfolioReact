export const Footer = () => {
    return (
      <footer id="footer" className="bg-lime-500 text-xl text-white">
        <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justifiy-between">
          <address>
            <h2>Manchester, UK</h2>
            Willing to relocate <br />
            
            Email:
            <a href="mailto:mail@bobteaches.com">
              mail@bobteaches.com
            </a>{" "}
            <br />
            Phone: <a href="07902725273">07902 725273</a>
          </address>
          <nav className="hidden flex-col gap-2 md:flex mx-auto" aria-label="footer">
            <a href="#projects" className="hover:opacity-90">
              Projects
            </a>
            <a href="#skills" className="hover:opacity-90">
              Skills
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2023</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    );
  };