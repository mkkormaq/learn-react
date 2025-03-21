import Contact from "./Contact";
/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

function App() {
  return (
    <>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </>
  );
}

export default App;
