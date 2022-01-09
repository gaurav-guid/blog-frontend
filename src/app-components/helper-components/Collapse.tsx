import { useState } from "react";
import { Button, Collapse, Container } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const Collapsible : React.FC<{ content: string }> = ({ content }) => {
    const [open, setOpen] = useState(false);
    const [btnText, setBtnText] = useState("View final result");

    return (
        <>
            <Button variant="secondary"
                onClick={() => {
                    //DEBT: Something fishy here... it seems like the setState functions are not instanteous!
                    setBtnText(open ? "View final result" : "Collapse final result")
                    setOpen(!open)
                }}
                aria-expanded={open}
            >{btnText}</Button>
            <Collapse in={open}>
                <Container>
                    <br />
                    <Container style={{ border: "1px solid lightgray" }}>
                    <ReactMarkdown>
                        {content}
                    </ReactMarkdown>
                    </Container>
                </Container>
            </Collapse>
        </>
    );
}
  
export default Collapsible