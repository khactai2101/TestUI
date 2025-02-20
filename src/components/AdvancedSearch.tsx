"use client";
import DatePicker from "./DatePicker";
import { useState } from "react";

export default function AdvancedSearch({ onSearch }: { onSearch: (query: string) => void }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        onSearch(searchQuery);
    };
    return (
        <div className="box ">
            <div className="field has-addons is-transparent">
                <div className="control">
                    <div className="select ">
                        <select>
                            <option>Product Title</option>
                            <option>SKU</option>
                            <option>Category</option>
                        </select>
                    </div>
                </div>
                <div className="control is-flex" style={{ width: "500px" }}>
                    <input className="input" type="text" placeholder="Keywords..." value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                </div>

                <div className="control mx-2">
                    <div className="select">
                        <select>
                            <option>Filters</option>
                            <option>Store A</option>
                            <option>Store B</option>
                        </select>
                    </div>
                </div>
                <div className="control">
                    <span className="button is-light"
                        style={{
                            borderRadius: "6px 0 0 6px",
                            color: "black",
                            boxShadow: "none",
                            border: "none",
                        }}>
                        Store
                    </span>
                </div>
                <div className="control mr-3" >
                    <div className="select " >
                        <select style={{
                            width: "150px",
                            borderRadius: "0",
                            border: "1px solid #ccc",
                            padding: "8px",
                        }}>
                            <option>All</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                </div>

                <div className="control is-flex">
                    <span className="button is-light"
                        style={{
                            borderRadius: "6px 0 0 6px",
                            color: "black",
                            boxShadow: "none",
                            border: "none",
                        }}>
                        Store
                    </span>
                    <div className="mr-3">
                        <DatePicker />

                    </div>
                    <div className="control">
                        <button className="button is-primary"
                            style={{
                                borderRadius: "6px 6px",
                            }}
                            onClick={handleSearch}>
                            <i className="fas fa-search mr-2"></i> Search
                        </button>
                    </div>
                </div>

                <div className="navbar-end is-flex is-align-items-center">
                    <div className="control mx-5">
                        <a href="#" className="has-text-link">
                            <i className="fas fa-mouse-pointer"></i>  Click priority
                        </a>
                    </div>
                    <div className="control ml-3">
                        <a href="#" className="has-text-grey">
                            <i className="fas fa-mouse"></i> First & Last click
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
