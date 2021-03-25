const q = (n) => String.fromCharCode(n);
const u = [39, 34, 39, 36, 32, 39, 34, 39].map(q).join("");
const e = `const q = (n) => String.fromCharCode(n);
const u = [39, 34, 39, 36, 32, 39, 34, 39].map(q).join("");
const e = A.replace(u.substr(2, 4), u);
const d = "echo " + q(39) + e + q(39) + " > pages/index.js";
const Q = () => (
  <div style={{ margin: "auto", maxWidth: "40em" }}>
    <h1>Next.js Quine</h1>
    <h2>1. Create a nextjs app</h2>
    <pre>npx create-next-app nextjs-quine</pre>
    <h2>2. Move into the directory</h2>
    <pre>cd nextjs-quine</pre>
    <h2>3. Replace pages/index.js as follows</h2>
    <pre>{d.replace("A", q(96) + e + q(96))}</pre>
    <h2>4. Start the app and open http://localhost:3000</h2>
    <pre>npx next dev</pre>
    <h2>Source code</h2>
    <a href="https://github.com/mame/nextjs-quine">github: mame/nextjs-quine</a>
    <style jsx>{"pre:before{content:'$ ';}"}</style>
    <style jsx>{"pre{margin:1em 0em;user-select:all;}"}</style>
  </div>
);
export default Q;`.replace(u.substr(2, 4), u);
const d = "echo " + q(39) + e + q(39) + " > pages/index.js";
const Q = () => (
  <div style={{ margin: "auto", maxWidth: "40em" }}>
    <h1>Next.js Quine</h1>
    <h2>1. Create a nextjs app</h2>
    <pre>npx create-next-app nextjs-quine</pre>
    <h2>2. Move into the directory</h2>
    <pre>cd nextjs-quine</pre>
    <h2>3. Replace pages/index.js as follows</h2>
    <pre>{d.replace("A", q(96) + e + q(96))}</pre>
    <h2>4. Start the app and open http://localhost:3000</h2>
    <pre>npx next dev</pre>
    <h2>Source code</h2>
    <a href="https://github.com/mame/nextjs-quine">github: mame/nextjs-quine</a>
    <style jsx>{"pre:before{content:'$ ';}"}</style>
    <style jsx>{"pre{margin:1em 0em;user-select:all;}"}</style>
  </div>
);
export default Q;
