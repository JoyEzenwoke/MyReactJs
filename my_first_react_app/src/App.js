import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h2 id="Heading">How to Cook Afang Soup – A Delicious Nigerian Dish</h2>

      <p className="introduction">
        Afang soup is a traditional Nigerian soup popular among the Efik and Ibibio people of southern Nigeria.
        <br />
        It is rich, flavorful, and packed with healthy vegetables and proteins. Whether you're a food lover or just
        learning to cook, this guide will show you how to prepare this delicious delicacy .
      </p>

      <div className="section" id="ingredients">
        <h2>Main Ingredients</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Water leaves (or spinach)</td>
              <td>3 cups (chopped)</td>
            </tr>
            <tr>
              <td>Afang leaves (Okazi)</td>
              <td>2 cups (blended or pounded)</td>
            </tr>
            <tr>
              <td>Palm oil</td>
              <td>1 cup</td>
            </tr>
            <tr>
              <td>Stock fish</td>
              <td>1 cup (soaked and cleaned)</td>
            </tr>
            <tr>
              <td>Beef / Goat meat</td>
              <td>2 cups (boiled)</td>
            </tr>
            <tr>
              <td>Periwinkle (optional)</td>
              <td>1 cup</td>
            </tr>
            <tr>
              <td>Crayfish</td>
              <td>2 tablespoons</td>
            </tr>
            <tr>
              <td>Seasoning cubes</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Salt and pepper</td>
              <td>To taste</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section" id="steps">
        <h2>Steps to Prepare Afang Soup</h2>
        <ol>
          <li>Wash and chop the water leaves, set aside.</li>
          <li>Grind or pound the Afang (Okazi) leaves until smooth.</li>
          <li>Boil your meats (beef, stock fish, etc.) with seasoning cubes and salt until tender.</li>
          <li>Add crayfish and pepper to the meat stock and stir.</li>
          <li>Pour in the palm oil and allow it to simmer for 5 minutes.</li>
          <li>Add the chopped water leaves and cook for another 3–5 minutes.</li>
          <li>Finally, add the blended Afang leaves and stir well.</li>
          <li>Let everything cook together for about 5 more minutes.</li>
          <li>Taste and adjust seasoning as needed.</li>
        </ol>
      </div>

      <p>
        Want to explore more Nigerian dishes? Visit 
        <a href="https://en.m.wikipedia.org/wiki/Special:Search?go=Go&search=About+nigerian+recipe+&ns0=1" target="_blank" rel="noreferrer"> All Nigerian Recipes</a>.
      </p>


      <div className="section" id="form-section">
        <fieldset className="form-fieldset">
          <legend>Share Your Cooking Experience</legend>

          <form>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" className="input-field" /><br /><br />

            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email" name="email" className="input-field" /><br /><br />

            <label htmlFor="feedback">How did your Afang Soup turn out?</label><br />
            <textarea id="feedback" name="feedback" rows="4" cols="30" className="input-field" /><br /><br />

            <label>Favorite Nigerian Soups:</label><br />
            <input type="checkbox" id="egusi" value="egusi" /> 
            <label htmlFor="egusi">Egusi</label><br />
            <input type="checkbox" id="ogbono" value="ogbono" /> 
            <label htmlFor="ogbono">Ogbono</label><br />
            <input type="checkbox" id="afang" value="afang" checked /> 
            <label htmlFor="afang">Afang</label><br /><br />

            <label htmlFor="date">When did you cook it?</label><br />
            <input type="date" id="cook-date" name="cook-date" className="input-field" /><br /><br />

            <input type="submit" value="Submit Feedback" className="submit-button" />
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default App;