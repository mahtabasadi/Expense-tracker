import { useEffect, useState } from "react";

const TranseActionComponent = (props) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredInx, setFilteredInx] = useState(props.transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredInx(props.transactions);
      return;
    }
    const filtered = props.transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredInx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);    
    filterTransactions(e.target.value);     
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [props.transactions]);

  if(!props.transactions.length) return <h3>add some tnx</h3>

  return (
    <section>
      <input type="text" value={searchItem} onChange={changeHandler} placeholder='Search for tnx ...' className="search"/>
      {filteredInx.length ?
        filteredInx.map((t) => (
          <div
            key={t.id}
            className="transaction"
            style={{ borderRight: t.type === "expense" && "4px solid  red" }}
          >
            <span>{t.desc}</span>
            <span>$ {t.amount}</span>
          </div>
        )):'no item matchs !'}
    </section>
  );
};

export default TranseActionComponent;
