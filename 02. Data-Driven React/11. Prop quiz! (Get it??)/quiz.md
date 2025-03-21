1. What do props help us accomplish?

passing data into components to make them truly reusable

2. How do you pass a prop into a component?

just like you would pass any parameter into a function, you take in props in the component function, and you define the arguments for the props opbject in the app components as you're building out the file.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

no, because HTML elements have predefined properties that they are able to interpret.

4. How do I receive props in a component?
   function Navbar() {
   return (
   <header>
   ...
   </header>
   )
   }

use props as a parameter in the function definition

5. What data type is `props` when the component receives it?

object
