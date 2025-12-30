import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Dizaji CRM Project</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://amirbdizaji.com" target="_blank" rel="noreferrer">
          AmirBDizaji.com
        </a>{" "}
        | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
