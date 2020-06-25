import React from "react";
import { Layout } from "../components/common";

const AboutPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">About</h1>
                <section className="content-body">
                    I am a software developer in Toronto. I write my notes here.
                </section>
            </article>
        </div>
    </Layout>
)

export default AboutPage
