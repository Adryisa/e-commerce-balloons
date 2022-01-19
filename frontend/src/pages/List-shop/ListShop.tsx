import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/listShop/List";
import Balloon from "../../interfaces/balloonsInterface";
import { loadBalloons } from "../../redux/actions/actionCreators";
import { rootState } from "../../redux/reducers";
import "./listShop.scss";

const ListShop = () => {
  const [search, setSearch] = useState([]);
  const balloons = useSelector((store: rootState) => {
    return store.balloons;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setSearch(balloons);
  }, [balloons]);

  useEffect(() => {
    dispatch(loadBalloons());
  }, [dispatch]);

  const filter = (query: string) => {
    if (query.length) {
      const newSearch = search.filter((item: any) =>
        item.color.toLowerCase().includes(query.trim().toLowerCase())
      );
      setSearch(newSearch);
    } else {
      setSearch(balloons);
    }
  };

  return (
    <section className="shop">
      <h2 className="page-title"> Shop </h2>
      <p className="bar"></p>
      <div className="search-container">
        <input
          className="search-container__input"
          type="text"
          placeholder="Find your balloon"
          onChange={(evt) => filter(evt.target.value)}
          data-testid="dos"
        />
      </div>
      <section className="shop-list">
        {search.length > 0 ? (
          search.map((balloon: Balloon) => (
            <List balloon={balloon} key={balloon._id} />
          ))
        ) : (
          <p className="shop-list__item-text">No stock available</p>
        )}
      </section>
    </section>
  );
};

export default ListShop;
