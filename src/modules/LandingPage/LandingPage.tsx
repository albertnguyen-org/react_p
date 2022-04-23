import { Button, Container, Grid } from '@mui/material';
import { Logo } from 'components';
import React from 'react';

export default function LandingPage() {
    return (
        <Container>
            {/* TODO: Menu */}
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Logo />
                </Grid>
                <Grid item xs={6}>
                    <p> Dashboard </p>
                </Grid>
            </Grid>
            {/* TODO: Page name */}

            <section>
                <Container>
                    Hi there,
                </Container>
                <Container>
                    I am a software engineer
                </Container>
            </section>
            {/* TODO: Welcome message */}
            {/* TODO: Button hire me */}
            {/* TODO: Image */}

            {/* Footer */}
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Button data-testid="button-hire-me"> Hire me </Button>
                </Grid>
                <Grid item xs={10}>
                    <img alt="profile-picture"/>
                </Grid>
            </Grid>
        </Container>
    );
}