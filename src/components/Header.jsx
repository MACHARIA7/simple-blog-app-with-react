import React from "react"
import {
    Container
} from "react-bootstrap";


export default function Appheader() {
    return (
        <div>
            <header className="bottom-border">
                <Container>
                    <div className="text-center my-5">
                        <h1>WELCOME TECH BLOG WEBSITE</h1>
                        <p>Under different aspects of technology and become
                            a tech-savvy person. People will fear your knowledge
                            in the Tech landscape!
                        </p>
                    </div>
                </Container>
            </header>
        </div>
    )
}