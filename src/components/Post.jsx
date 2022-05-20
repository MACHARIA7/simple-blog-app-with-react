import React from "react";
import {
    Card
} from "react-bootstrap";
import { Button } from "@mui/material";


export default function Post({ title }) {
    return (
        <>
            {/* Post */}
            <Card className="mt-4">
                <Card.Img
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.mcbH2X5jizVzjOoK3FZcJwHaEa?pid=ImgDet&rs=1"
                />
                <Card.Body>
                    <Card.Title>
                        <h3>{title}</h3>
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita praesentium similique corrupti facilis nisi deleniti esse ea incidunt laborum aut repellat, perspiciatis placeat sequi quam vel quaerat voluptatem minima harum modi voluptatibus, reiciendis necessitatibus. Voluptatibus sit officia, dolorem dolor perspiciatis cumque aut, minima laudantium repellat praesentium iste hic culpa!
                    </Card.Text>
                    <Button>read &gt; </Button>
                </Card.Body>
            </Card>
            {/* post */}    
        </>
    )
}