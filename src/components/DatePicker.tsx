"use client";

import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default function DatePicker() {
    const dateInputRef = useRef(null);

    useEffect(() => {
        if (dateInputRef.current) {
            flatpickr(dateInputRef.current, {
                mode: "range",
                dateFormat: "d/m/Y",
                defaultDate: ["13/02/2025", "19/02/2025"],
                position: "auto",
            });
        }
    }, []);

    return (
        <div className="control">
            <input
                ref={dateInputRef}
                className="input"
                type="text"
                placeholder="Select Date Range"
            />
        </div>
    );
}
