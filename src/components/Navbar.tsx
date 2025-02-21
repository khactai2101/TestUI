"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const router = useRouter();

    const checkLogin = () => {
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            setUserEmail(parsedUser.email);
        } else {
            setUserEmail(null);
        }
    };

    useEffect(() => {
        checkLogin();

        window.addEventListener("storage", checkLogin);
        return () => {
            window.removeEventListener("storage", checkLogin);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("storage"));
        setUserEmail(null);
        router.push("/login");
    };

    if (!userEmail) return null;

    return (
        <nav className="navbar is-transparent box">
            <div className="navbar-brand">
                <Link className="navbar-item" href="/">
                    <img
                        src="https://vieclam43.net/uploads/658306-10-2021_070754.jpg?1623280074"
                        alt="Bulma Logo"
                        width="112"
                        height="28"
                    />
                </Link>
                <button
                    className={`navbar-burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start ">
                    <Link className="navbar-item has-text-weight-bold" href="/">
                        <span className="icon">
                            <i className="fas fa-home"></i>
                        </span>
                        Home
                    </Link>
                    <Link className="navbar-item has-text-weight-bold" href="/"> <span className="icon">
                        <i className="fas fa-book-medical"></i>
                    </span> PostID </Link>
                    <Link className="navbar-item has-text-weight-bold" href="/"> <span className="icon">
                        <i className="fas fa-file-alt"></i>
                    </span> Fanpage </Link>
                    <Link className="navbar-item has-text-weight-bold" href="/"> <span className="icon">
                        <i className="fas fa-book"></i>
                    </span> Ads Library </Link>
                    <Link className="navbar-item has-text-weight-bold" href="/"> <span className="icon">
                        <i className="fas fa-chart-simple"></i>
                    </span> Reports </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link has-text-weight-bold" href="/"> <span className="icon">
                            <i className="fas fa-clock"></i>
                        </span> Fullfillment </Link>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link has-text-weight-bold" href="/">  <span className="icon">
                            <i className="fas fa-circle"></i>
                        </span>Analytics </Link>
                    </div>
                    <Link className="navbar-item has-text-weight-bold" href="/"> <span className="icon">
                        <i className="fas fa-mouse-pointer"></i>
                    </span> Tiktok Ads </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link has-text-weight-bold" href="/">  <span className="icon">
                            <i className="fas fa-book-medical"></i>
                        </span>Google Ads </Link>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link has-text-weight-bold" href="/">  <span className="icon">
                            <i className="fas fa-book-medical"></i>
                        </span>Tool </Link>
                    </div>
                    <Link className="navbar-link has-text-weight-bold" href="/"> <span className="icon">
                        <i className="fas fa-book-medical"></i>
                    </span> Config </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item is-flex is-align-items-center">
                        <span className="icon">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="user-email has-text-weight-bold">{userEmail}</span>
                        <button className="button is-danger is-small" onClick={handleLogout}>
                            <span className="icon">
                                <i className="fas fa-sign-out-alt"></i>
                            </span>
                            <span>Đăng Xuất</span>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}
