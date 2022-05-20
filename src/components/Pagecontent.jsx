import react from "react";
import {
    Container,
    Row,
    Col,
} from "react-bootstrap";
import Post from "./Post";
import SearchWidget from "./SearchWidget";
import CategoryWidget from "./CategoryWidget";


// This component displays content of the Homepage
// such as featured blog, list of blogs, and additional widgets
export default function PageContent() {

    const titles = [
        "The Future of Coding",
        "How to Learn Anything",
        "Understanding Data Science",
        "Know Elon Musk"
    ]

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={8}>
                        {/* Featured blog */}
                        <Post title="Featured Blog" />

                        <Row>
                            {/* Non-featured blogs start here */}                                
                            {
                                titles.map((title) => (
                                    <Col lg={6}>
                                        <Post title={title} />
                                    </Col>
                                ))
                            }                                
                            {/* Non-Featured blogs start here */}
                        </Row>
                    </Col>                    

                    {/* Widgets starts here */}
                    <Col lg={4}>
                        {/* Search Widget */}
                        <SearchWidget />                        
                        
                        {/* Categories Widget */}
                        <CategoryWidget />                  
                    </Col>
                    {/* Widgets ends here */}

                </Row>
            </Container>
        </div>
    )
}