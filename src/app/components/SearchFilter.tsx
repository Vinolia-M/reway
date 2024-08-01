import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchFilter.module.css";
import AdvertBannerImage from "../assets/Advert-Banner.png";
import MailingList from './MailingList';

const SearchFilter: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([
    "SUPERBALIST",
    "Mango",
  ]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [price, setPrice] = useState<number>(500);

  const removeBrand = (brand: string) => {
    setSelectedBrands(selectedBrands.filter((b) => b !== brand));
  };

  const handleSearch = () => {
    console.log({ selectedBrands, selectedColor, price });
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  return (
    <div>
      <div className={styles.searchFilter}>
        <div className={styles.header}>
          <span className={`${styles.headerTitle} pr-4`}>SEARCH REWAY</span>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterItem}>
            <label className={styles.label}>BRANDS</label>
            <div className={styles.selectedBrands}>
              {selectedBrands.map((brand) => (
                <div key={brand} className={styles.brand}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="pr-[7px]"
                    onClick={() => removeBrand(brand)}
                  />
                  {brand}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.filterItem}>
            <label className={styles.label}>COLOUR</label>
            <select
              className={styles.select}
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">SELECT COLOUR</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>
          </div>
          <div className={styles.filterItem}>
            <label className={styles.label}>PRICING</label>
            <div className={styles.sliderContainer}>
              <input
                type="range"
                className={styles.slider}
                min={300}
                max={2000}
                value={price}
                onChange={handleSliderChange}
              />
              <div className={styles.sliderValue}>R{price}</div>
            </div>
          </div>
        </div>
        <button className={styles.searchButton} onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} /> SEARCH
        </button>
      </div>
      <Image
        className="banner"
        src={AdvertBannerImage}
        width={300}
        height={600}
        style={{ margin: "35px 74px" }}
        alt="Advert Banner"
      />
      <MailingList />
    </div>
  );
};

export default SearchFilter;
