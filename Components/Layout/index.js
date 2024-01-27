import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Delivery Fee Calculator</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <small>Wolt&copy;</small>
        </p>
      </footer>
    </>
  );
}
