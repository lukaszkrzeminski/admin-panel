import React from 'react';
import { Container, Paragraph, ParagraphBody, ParagraphHeader } from './styled';

const Section = ({ contentHeader, contentBody }) => (
    <Container>
        <Paragraph>
            <ParagraphHeader>
                { contentHeader }
            </ParagraphHeader>
            <ParagraphBody>
                { contentBody }
            </ParagraphBody>
        </Paragraph>
    </Container>
)

export default Section;