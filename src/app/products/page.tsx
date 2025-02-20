"use client"

import AdvancedSearch from "@/components/AdvancedSearch";
import { useState } from "react";
import { fakeProducts } from "@/app/data/products";
import Link from "next/link";

export default function ProductsPage() {
    const [filteredProducts, setFilteredProducts] = useState(fakeProducts);
    const handleSearch = (query: string) => {
        const filtered = fakeProducts.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="container is-fluid">
            <div className="navbar is-transparent box">
                <div className="navbar-start">
                    <h1 className=" is-size-3 " style={{ fontWeight: "bold" }}>
                        ANALYTICS: SALE BY PRODUCTS
                    </h1>
                </div>
                <div className="navbar-end">
                    <div className="is-flex is-align-items-center" style={{ overflow: "hidden" }}>
                        <span className="button is-info" style={{ borderRadius: "6px 0 0 6px", color: "white" }}>
                            Order
                        </span>
                        <span className="button is-dark mr-3" style={{ borderRadius: "0 6px 6px 0", fontWeight: "bold" }}>
                            $12.643
                        </span>
                    </div>
                    <div className="is-flex is-align-items-center" style={{ overflow: "hidden" }}>
                        <span className="button is-warning" style={{ borderRadius: "6px 0 0 6px", color: "white" }}>
                            Products
                        </span>
                        <span className="button is-dark mr-3" style={{ borderRadius: "0 6px 6px 0", fontWeight: "bold" }}>
                            $1.033
                        </span>
                    </div>
                    <div className="is-flex is-align-items-center" style={{ overflow: "hidden" }}>
                        <span className="button is-danger" style={{ borderRadius: "6px 0 0 6px" }}>
                            Net Revenue
                        </span>
                        <span className="button is-dark" style={{ borderRadius: "0 6px 6px 0", fontWeight: "bold" }}>
                            $410.911
                        </span>
                    </div>
                </div>
            </div>

            <AdvancedSearch onSearch={handleSearch} />

            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>RANK</th>
                        <th>STORE</th>
                        <th style={{ width: "600px" }}>PRODUCT TITLE</th>
                        <th className="has-text-centered">NET REV</th>
                        <th className="has-text-centered">PERCENT</th>
                        <th className="has-text-centered">QUANTITY</th>
                        <th className="has-text-centered">FACEBOOK</th>
                        <th className="has-text-centered">GOOGLE</th>
                        <th className="has-text-centered">TIKTOK</th>
                        <th className="has-text-centered">KLAVIYO</th>
                        <th className="has-text-centered">OTHERS</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>#{product.id}</td>
                            <td className="has-text-link">{product.store}</td>
                            <td className="product-title">
                                <div className="product-info is-flex">
                                    <Link className="navbar-item" href="/">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            width="112"
                                            height="28"
                                        />
                                    </Link>
                                    <div className="product-details">
                                        <p className="has-text-primary-20">{product.title}</p>
                                        <p className="product-description">{product.content}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="has-text-black-bis has-text-centered">{product.netRev}</td>
                            <td className="has-text-warning has-text-centered">{product.percent}</td>
                            <td className="has-text-centered">{product.quantity}</td>
                            <td className="has-text-success has-text-centered">{product.facebook}</td>
                            <td className="has-text-danger has-text-centered">{product.google}</td>
                            <td className="has-text-info has-text-centered">{product.tiktok}</td>
                            <td className="has-text-primary has-text-centered">{product.klaviyo}</td>
                            <td className="has-text-link has-text-centered">{product.others}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}