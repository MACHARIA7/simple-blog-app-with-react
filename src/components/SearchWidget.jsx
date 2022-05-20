import React from "react";
import {
    Card,
    FormControl,
    Form,
} from "react-bootstrap";
import {
    IconButton,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export default function SearchWidget() {
    return (
        <>
            <Card className="mt-4">
                <Card.Header>
                    Search
                </Card.Header>
                <Card.Body>
                    <Form className="d-flex">
                        <FormControl
                            placeholder="search"
                            type="search"
                            aria-label="Search"
                        />
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Form>                                
                </Card.Body>
            </Card>        
        </>
    )
}