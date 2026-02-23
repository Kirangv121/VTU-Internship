import './App.css'

function App() {
  return (
    <div>
      <header>
        <h1>My React Webpage</h1>
        <nav>
          <a href="#">Home</a> | 
          <a href="#"> About</a> | 
          <a href="#"> Contact</a>
        </nav>
      </header>

      <main>
        <section>
          <article>
            <h2>Welcome</h2>
            <p>This page uses advanced semantic HTML elements.</p>
          </article>
        </section>

        <section>
          <h2>Technologies</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Technology</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTML</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td>React</td>
                <td>Learning</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Contact Form</h2>
          <form>
            <fieldset>
              <legend>Personal Info</legend>
              

              <label>Name:</label><br />
              <input type="text" /><br /><br />

              <label>Email:</label><br />
              <input type="email" /><br /><br />

              <label>Message:</label><br />
              <textarea rows="4" cols="30"></textarea><br /><br />

              <button type="submit">Send</button>
            </fieldset>
          </form>

          <form action="">
            <fieldset>
              <legend>Next Page</legend>
              <button>Click here to get more info...</button>
            </fieldset>
          </form>
        </section>
      </main>

      <aside>
        <h3>Side Info</h3>
        <p>This is an aside section for extra content.</p>
      </aside>

      <footer>
        <p>©All rights reserved under kirangv121</p>
      </footer>
    </div>
  )
}

export default App