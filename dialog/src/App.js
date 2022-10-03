import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form>
          <fieldset>
            <legend>
              Ajouter un commentaire
            </legend>
           <div>
           <label for="name">Nom d'utilisateur </label>
            <input type="text" id="name" name="name" required
              minlength="4" maxlength="8" size="10" />
            <label for="theme">Thème </label>
            <select name="pets" id="pet-select">
              <option value="activité">Activité Physique</option>
              <option value="nutrition">Nutrition</option>
              <option value="hygiène">Hygiène de vie</option>
            </select>
            <label><input type="radio" name="radio" value="public" /> Public</label>
            <label><input type="radio" name="radio" value="private" /> Private</label><br />
           </div>

            <legend>
              Message
            </legend>
            <textarea id="message" name="story"
              rows="5" cols="33">

            </textarea>
          <div>
            <input type="submit" value="Valide" />
          </div>
          </fieldset>
        </form>
        
      </header>
    </div>
  );
}

export default App;
