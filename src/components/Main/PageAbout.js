import React from "react";
import "../../scss/style.scss";

export default function PageAbout({ title, sectionItem, children }) {
    return (
        <section className="page-title bg-title overlay-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="title">
                            <h3>{title}</h3>
                        </div>
                        <ol className="breadcrumb justify-content-center p-0 m-0">
                            {sectionItem.map((item, index) => (
                                <li key={index} className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
                                    {item.active ? item.label : <a href={item.href}>{item.label}</a>}
                                </li>
                            ))}
                        </ol>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
