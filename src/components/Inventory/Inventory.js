import "./Inventory.scss";

/**
 * Has class names - inventory inventory__page-nav inventory__title 
 * inventory__search-bar inventory__button inventory__button-text
 * @returns Inventory component for Instock - contains list of inventory items
 */

const url = "http://localhost:3000";
const apiKey = "";

function Inventory() {

  // useEffect(() => {
  //   axios.get(`${url}/inventories/?api_key=${apiKey}`)
  //   .then(item => {
      
  //   }
  // )})
  return (
    <section className="inventory">
      <div className="inventory__page-nav">
        <p className="inventory__title">Inventory</p>
        <div className="inventory__cta-container">
        <form type="submit" name="search-bar" id="search-bar" className="inventory__search-bar" placeholder="Search..."></form>
        <button type="submit" className="inventory__button">
          <p className="inventory__button-text">+ Add New Item</p>
        </button>
        </div>
        
      </div>
        <ul className="inventory__items">

        </ul>
      <div>

      </div>
    </section>
  );
}

export default Inventory;